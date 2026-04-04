"use client"

import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

interface CdnMarker {
  id: string
  location: [number, number]
  region: string
}

interface CdnArc {
  id: string
  from: [number, number]
  to: [number, number]
}

interface GlobeCdnProps {
  markers?: CdnMarker[]
  arcs?: CdnArc[]
  className?: string
  speed?: number
}

const defaultMarkers: CdnMarker[] = [
  { id: "cdn-iad", location: [38.95, -77.45], region: "Washington" },
  { id: "cdn-sfo", location: [37.62, -122.38], region: "San Francisco" },
  { id: "cdn-cdg", location: [49.01, 2.55], region: "Paris" },
  { id: "cdn-hnd", location: [35.55, 139.78], region: "Tokyo" },
  { id: "cdn-syd", location: [-33.95, 151.18], region: "Sydney" },
  { id: "cdn-gru", location: [-23.43, -46.47], region: "São Paulo" },
  { id: "cdn-sin", location: [1.36, 103.99], region: "Singapore" },
  { id: "cdn-arn", location: [59.65, 17.93], region: "Stockholm" },
  { id: "cdn-dub", location: [25.20, 55.27], region: "Dubai" },
  { id: "cdn-bom", location: [19.09, 72.87], region: "Mumbai" },
]

const defaultArcs: CdnArc[] = [
  { id: "cdn-arc-1", from: [38.95, -77.45], to: [49.01, 2.55] },
  { id: "cdn-arc-2", from: [37.62, -122.38], to: [35.55, 139.78] },
  { id: "cdn-arc-3", from: [49.01, 2.55], to: [1.36, 103.99] },
  { id: "cdn-arc-4", from: [38.95, -77.45], to: [-23.43, -46.47] },
  { id: "cdn-arc-5", from: [35.55, 139.78], to: [-33.95, 151.18] },
  { id: "cdn-arc-6", from: [49.01, 2.55], to: [19.09, 72.87] },
]

export function GlobeCdn({
  markers = defaultMarkers,
  arcs = defaultArcs,
  className = "",
  speed = 0.015,
}: GlobeCdnProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)


  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    // Optional chaining to prevent strict mode errors if canvas is null
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return
    const canvas = canvasRef.current
    const container = containerRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = 0

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width, height: width,
        phi: 0, theta: 0.2, dark: 0, diffuse: 1.5,
        mapSamples: 16000, mapBrightness: 10,
        baseColor: [1, 1, 1],
        markerColor: [0.0, 0.407, 0.372], // Emerald Green #00685f
        glowColor: [0.94, 0.93, 0.91],
        markerElevation: 0.02,
        markers: markers.map((m) => ({ location: m.location, size: 0.012, id: m.id })),
        arcs: arcs.map((a) => ({ from: a.from, to: a.to, id: a.id })),
        arcColor: [0.882, 0.466, 0.149], // Orange #e17726
        arcWidth: 0.8, arcHeight: 0.25, opacity: 0.7,
      })
      function animate() {
        if (!isPausedRef.current) phi += speed
        const currentPhi = phi + phiOffsetRef.current + dragOffset.current.phi
        const currentTheta = 0.2 + thetaOffsetRef.current + dragOffset.current.theta
        
        globe!.update({
          phi: currentPhi,
          theta: currentTheta,
        })
        
        // Exact Cobe 3D-to-2D projection math for cross-browser Safari support
        const cosTheta = Math.cos(currentTheta)
        const sinTheta = Math.sin(currentTheta)
        const cosPhi = Math.cos(currentPhi)
        const sinPhi = Math.sin(currentPhi)

        const latLonToVector = (lat: number, lon: number) => {
          const p = (lat * Math.PI) / 180
          const t = ((lon - 180) * Math.PI) / 180
          const cP = Math.cos(p)
          return [-cP * Math.cos(t), Math.sin(p), cP * Math.sin(t)]
        }

        const project = (t: number[]) => {
          const c = cosPhi * t[0] + sinPhi * t[2]
          const s = sinPhi * sinTheta * t[0] + cosTheta * t[1] - cosPhi * sinTheta * t[2]
          const x = (c + 1) / 2
          const y = (-s + 1) / 2
          const z = -sinPhi * cosTheta * t[0] + sinTheta * t[1] + cosPhi * cosTheta * t[2]
          return { x, y, visible: z >= 0 || (c * c + s * s) >= 0.64 }
        }

        markers.forEach((m) => {
          const vec = latLonToVector(m.location[0], m.location[1])
          const r = 0.8 + 0.02 // cb core radius + marker elevation
          const t = [vec[0] * r, vec[1] * r, vec[2] * r]
          const p = project(t)
          
          container.style.setProperty(`--cobe-${m.id}-x`, `${p.x * 100}%`)
          container.style.setProperty(`--cobe-${m.id}-y`, `${p.y * 100}%`)
          // Using globe's auto-generated visibility root variables when possible, but fallback to math
          container.style.setProperty(`--cobe-visible-manual-${m.id}`, p.visible ? "1" : "0")
        })
        
        arcs.forEach((a) => {
          const vFrom = latLonToVector(a.from[0], a.from[1])
          const vTo = latLonToVector(a.to[0], a.to[1])
          const mid = [vFrom[0] + vTo[0], vFrom[1] + vTo[1], vFrom[2] + vTo[2]]
          const o = Math.sqrt(mid[0] ** 2 + mid[1] ** 2 + mid[2] ** 2)
          if (o < 0.001) return
          const i = 0.25 * (0.8 + 0.02) + 0.5 * (0.8 + 0.25 + 0.02) / o // math from cb curve
          const t = [mid[0] * i, mid[1] * i, mid[2] * i]
          const p = project(t)

          container.style.setProperty(`--cobe-arc-${a.id}-x`, `${p.x * 100}%`)
          container.style.setProperty(`--cobe-arc-${a.id}-y`, `${p.y * 100}%`)
          container.style.setProperty(`--cobe-visible-manual-arc-${a.id}`, p.visible ? "1" : "0")
        })

        animationId = requestAnimationFrame(animate)
      }
      animate()
      setTimeout(() => canvas && (canvas.style.opacity = "1"))
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [markers, arcs, speed])

  const pyramidFaceStyle = (nth: number): React.CSSProperties => {
    const transforms = [
      "rotateY(0deg) translateZ(4px) rotateX(19.5deg)",
      "rotateY(120deg) translateZ(4px) rotateX(19.5deg)",
      "rotateY(240deg) translateZ(4px) rotateX(19.5deg)",
      "rotateX(-90deg) rotateZ(60deg) translateY(4px)",
    ]
    const colors = ["#00685f", "#004d46", "#e17726", "#b05715"] // Branded 3D pyramids
    return {
      position: "absolute", left: -0.5, top: 0,
      width: 0, height: 0,
      borderLeft: "6.5px solid transparent",
      borderRight: "6.5px solid transparent",
      borderBottom: `13px solid ${colors[nth]}`,
      transformOrigin: "center bottom",
      transform: transforms[nth],
    }
  }

  return (
    <div ref={containerRef} className={`relative aspect-square select-none ${className}`}>
      <style>{`
        @keyframes pyramid-spin {
          0% { transform: rotateX(20deg) rotateY(0deg); }
          100% { transform: rotateX(20deg) rotateY(360deg); }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%", height: "100%", cursor: "grab", opacity: 0,
          transition: "opacity 1.2s ease", borderRadius: "50%", touchAction: "none",
        }}
      />
      {markers.map((m) => (
        <div
          key={m.id}
          style={{
            position: "absolute",
            top: `var(--cobe-${m.id}-y, 0px)`,
            left: `var(--cobe-${m.id}-x, 0px)`,
            transform: "translate(-50%, -100%)",
            marginTop: "-6px", // Offset for pyramid height
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "center",
            gap: 6,
            pointerEvents: "none" as const,
            opacity: `var(--cobe-visible-${m.id}, var(--cobe-visible-manual-${m.id}, 0))`,
            filter: `blur(calc((1 - var(--cobe-visible-${m.id}, var(--cobe-visible-manual-${m.id}, 0))) * 8px))`,
            transition: "opacity 0.3s, filter 0.3s",
            zIndex: 10,
          }}
        >
          <div style={{
            width: 12, height: 12, position: "relative",
            transformStyle: "preserve-3d" as const,
            animation: "pyramid-spin 4s linear infinite",
          }}>
            {[0, 1, 2, 3].map((n) => (
              <div key={n} style={pyramidFaceStyle(n)} />
            ))}
          </div>
          <span style={{
            fontFamily: "monospace", fontSize: "0.55rem", color: "#000",
            background: "#fff", padding: "2px 6px", borderRadius: 3,
            letterSpacing: "0.05em", whiteSpace: "nowrap" as const,
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          }}>{m.region}</span>
        </div>
      ))}
    </div>
  )
}
