"use client"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface UseScrollParallaxOptions {
  containerRef: React.RefObject<HTMLElement | null>
  bgRef?: React.RefObject<HTMLDivElement | null>
  cardsContainerRef?: React.RefObject<HTMLDivElement | null>
  disabled?: boolean
}

/**
 * Hook for layered expedition-world parallax and cinematic World-to-Event transition
 * using GSAP ScrollTrigger.
 *
 * 1. Layered parallax across 5 calibrated depth planes.
 * 2. World-to-Event transition: as user scrolls down toward cards, the world background
 *    gradually blurs (0 -> 8px), scales (1 -> 1.05), and dims (1 -> 0.25) while cards stay sharp.
 * 3. Scrolling back up reverses the effect seamlessly via ScrollTrigger scrub.
 */
export function useScrollParallax({
  containerRef,
  bgRef,
  cardsContainerRef,
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

      const isMobile = window.innerWidth < 768

      // ─── 1. WORLD-TO-EVENT CINEMATIC SCROLL TRANSITION ─────────────
      // Targets ONLY the world background canvas, leaving cards & foreground sharp
      const bgCanvas =
        bgRef?.current || section.querySelector("#world-background-canvas")

      if (bgCanvas) {
        gsap.fromTo(
          bgCanvas,
          { opacity: 1, scale: 1, filter: "blur(0px)" },
          {
            opacity: 0.25,
            scale: 1.05,
            filter: "blur(8px)",
            ease: "none",
            scrollTrigger: {
              trigger: cardsContainerRef?.current || section,
              start: "top 80%", // when cards approach lower third of viewport
              end: "top 25%",   // when cards dominate active focus
              scrub: 0.6,
            },
          }
        )
      }

      // If mobile, keep parallax extremely subtle to maintain 60 FPS
      if (isMobile) {
        return
      }

      const scrollTriggerConfig = {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.6,
      }

      // Layer 1: Distant Sky, Moons, Stars (very slow: y 0 -> -20px)
      const layer1 = section.querySelectorAll('[data-parallax="1"]')
      if (layer1.length > 0) {
        gsap.to(layer1, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            ...scrollTriggerConfig,
            scrub: 0.9,
          },
        })
      }

      // Layer 2: Midground Silhouettes, Mountains, Reference Art (y 0 -> -45px)
      const layer2 = section.querySelectorAll('[data-parallax="2"]')
      if (layer2.length > 0) {
        gsap.to(layer2, {
          y: -45,
          ease: "none",
          scrollTrigger: {
            ...scrollTriggerConfig,
            scrub: 0.7,
          },
        })
      }

      // Layer 3: Floating Telemetry, Radar Towers, Ferris Wheel (y 0 -> -70px)
      const layer3 = section.querySelectorAll('[data-parallax="3"]')
      if (layer3.length > 0) {
        gsap.to(layer3, {
          y: -70,
          ease: "none",
          scrollTrigger: {
            ...scrollTriggerConfig,
            scrub: 0.5,
          },
        })
      }

      // Layer 4: Hero Elements & Dividers (y 0 -> -30px)
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

      // Layer 5: Event Cards Grid (subtle stability anchor: y 0 -> -10px)
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
  }, [containerRef, bgRef, cardsContainerRef, disabled])
}
