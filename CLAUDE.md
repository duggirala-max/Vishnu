# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Noor Al Reef General Trading LLC: a B2B trading company website (India-to-Dubai food exports). Two implementations exist:
- **`noor-al-reef/`** (PRIMARY): Next.js 14, production-ready
- **`noor-al-reef-rebuild/`** (SECONDARY): Vite + React 19, experimental SPA

## Commands

### noor-al-reef (Next.js)
```bash
cd noor-al-reef && npm run dev      # Dev server at localhost:3000
cd noor-al-reef && npm run build    # Production build
cd noor-al-reef && npm run lint     # ESLint
```

### noor-al-reef-rebuild (Vite)
```bash
cd noor-al-reef-rebuild && npm run dev      # Vite dev server
cd noor-al-reef-rebuild && npm run build    # Build with tsc type-check
cd noor-al-reef-rebuild && npm run lint     # ESLint
cd noor-al-reef-rebuild && npm run preview  # Preview production build
```

## Architecture (Next.js Primary)

Single-page scrollable site. Sections: Hero, Catalog, About, Sustainability, Inquiry.

**Key directories:**
- `src/components/three/`: Three.js globe (dynamically imported to avoid SSR issues)
- `src/components/sections/` : Page sections (Hero, Catalog, About, Sustainability, Inquiry)
- `src/components/ui/` : Reusable UI (ProductCard, QuickViewModal, GodRays, NoorLogo)
- `src/components/layout/` : Navbar, Footer
- `src/lib/theme.ts` : Centralized design tokens (colors, fonts, brand values)
- `src/lib/products.ts` : Product data (4 categories with certifications, MOQs, lead times)
- `src/types/index.ts` : Shared TypeScript interfaces
- `src/app/api/inquiry/route.ts` : POST endpoint for form submissions (console log only, no email backend)

**Client/Server split:** `layout.tsx` is a server component (metadata, JSON-LD). Components using GSAP, Three.js, or interactivity are marked `"use client"`.

**Path alias:** `@/*` maps to `./src/*`

## Brand & Design System

- **Canvas:** White (#ffffff) background. No dark mode.
- **Primary:** Orange #e17726. **Accent:** Emerald #00685f.
- **Typography:** Cera Pro (headers), Poppins (body).
- **Buttons:** Orange primary, emerald on hover, 0.4s GSAP power2.inOut transitions.
- **Visual style:** Neumorphic shadows, glassmorphism (backdrop-filter blur), minimalist luxury.

## Constraints

- Every file must start with: `//Built by Duggirala for Vishnu Vardhan`
- No em dashes. Use periods or colons instead.
- No emojis anywhere.
- GSAP animations must only modify `transform` and `opacity` (GPU compositing, 60fps target).
- Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, FID < 100ms.
- Three.js components must be dynamically imported (no SSR).
- Semantic HTML required (`<header>`, `<main>`, `<section>`, `<footer>`).
- Product imagery: macro photography style, no icons.

## Animation Stack

GSAP 3.14 with ScrollTrigger for scroll-based reveals. Three.js via React Three Fiber for the interactive globe. Custom Tailwind animations: `glow-pulse`, `ray-drift`, `fade-up`. God Rays effect uses CSS radial-gradients with mouse-tracking.

## SEO

JSON-LD Organization schema embedded in `layout.tsx`. SEO strategy documented in `noor-al-reef/SEO_STRATEGY.md`. Target keywords: B2B trading Dubai, Indian food exports, FMCG.

## Form Handling

Next.js version uses React Hook Form + Zod validation. Fields: companyName, contactName, email, phone, country, productCategory, estimatedVolume, message. Vite version uses plain useState with mailto: links.
