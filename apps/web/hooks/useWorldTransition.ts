"use client"

import { useRef, useCallback, useEffect } from "react"
import { gsap } from "gsap"
import { WorldTheme } from "@/lib/theme"

interface UseWorldTransitionRefs {
  heroContainerRef: React.RefObject<HTMLDivElement | null>
  heroEyebrowRef: React.RefObject<HTMLDivElement | null>
  heroTitleRef: React.RefObject<HTMLHeadingElement | null>
  heroSubtitleRef: React.RefObject<HTMLParagraphElement | null>
  heroDividerRef: React.RefObject<HTMLDivElement | null>
  floatingDecorationsRef?: React.RefObject<HTMLDivElement | null>
  cardsContainerRef?: React.RefObject<HTMLDivElement | null>
  bgContainerRef?: React.RefObject<HTMLDivElement | null>
}

/**
 * Hook orchestrating the cinematic GSAP world transition timeline (~700-1100ms total):
 * 0–250ms:   old world hero fades upward
 * 100–400ms: old background scales slightly
 * 200–500ms: old atmospheric layer fades + blur increases
 * 280ms:     react world commit (CSS variables + DOM update)
 * 300–600ms: new world background enters & settles
 * 400–700ms: new world atmosphere appears
 * 500–900ms: new world hero title, subtitle & motifs enter
 * 600–1000ms: event cards stagger into place
 *
 * AVINYA navbar & branding remains stable throughout as the voyage ship.
 */
export function useWorldTransition({
  heroEyebrowRef,
  heroTitleRef,
  heroSubtitleRef,
  heroDividerRef,
  floatingDecorationsRef,
  cardsContainerRef,
  bgContainerRef,
}: UseWorldTransitionRefs) {
  const currentTimelineRef = useRef<gsap.core.Timeline | null>(null)

  // Clean up on component unmount
  useEffect(() => {
    return () => {
      if (currentTimelineRef.current) {
        currentTimelineRef.current.kill()
      }
    }
  }, [])

  const executeTransition = useCallback(
    (
      fromTheme: WorldTheme,
      toTheme: WorldTheme,
      onCommitWorldChange: () => void
    ) => {
      if (typeof window === "undefined") {
        onCommitWorldChange()
        return
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches

      // If reduced motion is active, switch instantly without transforms
      if (prefersReducedMotion) {
        onCommitWorldChange()
        return
      }

      // Kill any running transition timeline immediately on rapid clicks
      if (currentTimelineRef.current) {
        currentTimelineRef.current.kill()
        currentTimelineRef.current = null
      }

      const titleEl = heroTitleRef.current
      const subtitleEl = heroSubtitleRef.current
      const dividerEl = heroDividerRef.current
      const eyebrowEl = heroEyebrowRef.current
      const floatingEl = floatingDecorationsRef?.current
      const cardsGrid = cardsContainerRef?.current
      const bgCanvas =
        bgContainerRef?.current ||
        (document.querySelector("#world-background-canvas") as HTMLDivElement | null)

      // Clean up previous tweens
      gsap.killTweensOf([titleEl, subtitleEl, dividerEl, eyebrowEl, floatingEl, bgCanvas])

      const cardItems = cardsGrid ? cardsGrid.querySelectorAll(".event-card-item") : []
      if (cardItems.length > 0) {
        gsap.killTweensOf(cardItems)
      }

      // ─── MASTER GSAP TIMELINE ─────────────────────────────────────
      const tl = gsap.timeline({
        onComplete: () => {
          currentTimelineRef.current = null
        },
      })
      currentTimelineRef.current = tl

      // ── PHASE 1: OLD WORLD HERO FADES UPWARD (0–250ms) ───────────
      if (titleEl && subtitleEl) {
        tl.to(
          [titleEl, subtitleEl],
          {
            y: -24,
            opacity: 0,
            duration: 0.25,
            ease: "power2.in",
          },
          0
        )
      }

      if (dividerEl) {
        tl.to(
          dividerEl,
          {
            scaleX: 0.3,
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
          },
          0
        )
      }

      if (eyebrowEl) {
        tl.to(
          eyebrowEl,
          {
            y: -14,
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
          },
          0
        )
      }

      if (cardItems.length > 0) {
        tl.to(
          cardItems,
          {
            y: -15,
            opacity: 0.2,
            duration: 0.22,
            ease: "power2.in",
            stagger: 0.02,
          },
          0
        )
      }

      // ── PHASE 2: BACKGROUND SCALES SLIGHTLY (100–400ms) ───────────
      if (bgCanvas) {
        tl.to(
          bgCanvas,
          {
            scale: 1.04,
            duration: 0.3,
            ease: "power2.inOut",
          },
          0.1
        )
      }

      // ── PHASE 3: OLD ATMOSPHERE FADES + BLUR INCREASES (200–500ms) ─
      if (bgCanvas) {
        tl.to(
          bgCanvas,
          {
            filter: "blur(6px)",
            opacity: 0.45,
            duration: 0.28,
            ease: "power2.inOut",
          },
          0.2
        )
      }

      if (floatingEl) {
        tl.to(
          floatingEl,
          {
            opacity: 0.2,
            scale: 0.95,
            duration: 0.25,
            ease: "power2.in",
          },
          0.2
        )
      }

      // ── PHASE 4: ACCENT & REACT STATE COMMIT (0.28s) ──────────────
      // Seamlessly update CSS variables
      tl.add(() => {
        document.documentElement.style.setProperty(
          "--theme-accent",
          toTheme.colors.accent
        )
        document.documentElement.style.setProperty(
          "--theme-border",
          toTheme.colors.border
        )
        document.documentElement.style.setProperty(
          "--theme-glow",
          toTheme.colors.glow
        )
        document.documentElement.style.setProperty(
          "--theme-logo-accent",
          toTheme.colors.logoAccent
        )
        onCommitWorldChange()
      }, 0.28)

      // ── PHASE 5: NEW WORLD BACKGROUND ENTERS (300–600ms) ──────────
      if (bgCanvas) {
        tl.to(
          bgCanvas,
          {
            scale: 1.0,
            filter: "blur(0px)",
            opacity: 1.0,
            duration: 0.35,
            ease: "power2.out",
          },
          0.3
        )
      }

      // ── PHASE 6: NEW WORLD ATMOSPHERE APPEARS (400–700ms) ─────────
      if (floatingEl) {
        tl.fromTo(
          floatingEl,
          { opacity: 0.2, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.38, ease: "power2.out" },
          0.4
        )
      }

      // ── PHASE 7: NEW WORLD HERO ENTRANCE (500–900ms) ──────────────
      if (eyebrowEl) {
        tl.fromTo(
          eyebrowEl,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.38, ease: "power2.out" },
          0.48
        )
      }

      if (titleEl) {
        tl.fromTo(
          titleEl,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" },
          0.52
        )
      }

      if (subtitleEl) {
        tl.fromTo(
          subtitleEl,
          { y: 22, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.42, ease: "power2.out" },
          0.58
        )
      }

      if (dividerEl) {
        tl.fromTo(
          dividerEl,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.4, ease: "power2.out" },
          0.64
        )
      }

      // ── PHASE 8: EVENT CARDS SETTLE (600–1000ms) ──────────────────
      tl.add(() => {
        const freshContainer = cardsContainerRef?.current
        const freshCardItems = freshContainer
          ? freshContainer.querySelectorAll(".event-card-item")
          : []

        if (freshCardItems.length > 0) {
          gsap.fromTo(
            freshCardItems,
            { opacity: 0, y: 35, scale: 0.97 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.45,
              ease: "power2.out",
              stagger: 0.07,
            }
          )
        }
      }, 0.6)
    },
    [
      heroEyebrowRef,
      heroTitleRef,
      heroSubtitleRef,
      heroDividerRef,
      floatingDecorationsRef,
      cardsContainerRef,
      bgContainerRef,
    ]
  )

  return {
    executeTransition,
  }
}
