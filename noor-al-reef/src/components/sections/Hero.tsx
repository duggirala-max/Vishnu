// Built by Duggirala for Vishnu N
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { GlobeCdn } from "../ui/cobe-globe-cdn"

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section 
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-32 lg:pt-48 pb-12 lg:pb-32 px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12 lg:gap-20 z-10"
    >
      <motion.div 
        style={{ y: y1, opacity }}
        className="flex-1 text-center lg:text-left z-20"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="space-y-4 lg:space-y-6">
          <span className="text-emerald font-black tracking-[0.4em] uppercase text-[10px] lg:text-xs">Elite Industrial Networking</span>
          <h1 className="text-3xl sm:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.85] mt-4 lg:mt-6 tracking-tighter">
            UNIFIED <br />
            <span className="text-orange italic">TRADE HUB</span>
          </h1>
          <p className="text-gray-500 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Directing high level commercial acquisition and distribution strategies for contemporary enterprises. Our firm bridges the gap between global manufacturing excellence and regional market demands through a rigorous framework of professional integrity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 lg:pt-8">
            <a href="#catalog" className="btn-orange w-full sm:w-auto px-10 py-5 text-sm uppercase font-black tracking-widest text-center">Global Catalog</a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.7, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 w-full max-w-[550px] lg:max-w-none aspect-square relative z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00685f]/5 to-[#e17726]/5 rounded-full blur-[140px] -z-10" />
        <GlobeCdn className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]" />
      </motion.div>
    </section>
  )
}
