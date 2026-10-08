"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface UseScrollParallaxOptions {
  containerRef: React.RefObject<HTMLElement | null>
  disabled?: boolean
}

/**
 * Hook for subtle expedition-map scroll parallax using GSAP ScrollTrigger.
 * Groups decorative and structural elements into 5 visual layers with calibrated speeds.
 */
export function useScrollParallax({
  containerRef,
  disabled = false,
}: UseScrollParallaxOptions) {
  useEffect(() => {
    if (typeof window === "undefined" || disabled) return

    // Accessibility check: disable parallax if reduced motion requested
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const section = containerRef.current
      if (!section) return

      const scrollTriggerConfig = {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
      }

      // Layer 1: Base Parchment & Grain (very subtle movement: y 0 -> -20px)
      const layer1 = section.querySelectorAll('[data-parallax="1"]')
      if (layer1.length > 0) {
        gsap.to(layer1, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            ...scrollTriggerConfig,
            scrub: 0.8,
          },
        })
      }

      // Layer 2: Map Grids, Bathymetric Rings, Circuit Traces (y 0 -> -40px)
      const layer2 = section.querySelectorAll('[data-parallax="2"]')
      if (layer2.length > 0) {
        gsap.to(layer2, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            ...scrollTriggerConfig,
            scrub: 0.8,
          },
        })
      }

      // Layer 3: Floating Compass, Waypoint Markers, Coordinates (y 0 -> -60px)
      const layer3 = section.querySelectorAll('[data-parallax="3"]')
      if (layer3.length > 0) {
        gsap.to(layer3, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            ...scrollTriggerConfig,
            scrub: 0.6,
          },
        })
      }

      // Layer 4: Hero Decorative Artwork & Dividers (y 0 -> -30px)
      const layer4 = section.querySelectorAll('[data-parallax="4"]')
      if (layer4.length > 0) {
        gsap.to(layer4, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            ...scrollTriggerConfig,
            scrub: 0.6,
          },
        })
      }

      // Layer 5: Event Cards Grid (VERY subtle: y 0 -> -10px)
      const layer5 = section.querySelectorAll('[data-parallax="5"]')
      if (layer5.length > 0) {
        gsap.to(layer5, {
          y: -10,
          ease: "none",
          scrollTrigger: {
            ...scrollTriggerConfig,
            scrub: 0.8,
          },
        })
      }
    }, containerRef)

    return () => {
      ctx.revert()
    }
  }, [containerRef, disabled])
}
