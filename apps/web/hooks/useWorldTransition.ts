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
}

/**
 * Hook orchestrating the 5-phase cinematic GSAP world transition sequence:
 * Phase 1: Old world exit (move up + fade out)
 * Phase 2: Theme accent color interpolation (400-600ms)
 * Phase 3: Background atmosphere transition
 * Phase 4: New world hero entrance with staggered elements (title, subtitle, line, metadata)
 * Phase 5: Event cards entrance with staggered GSAP timeline
 * Includes clean timeline kill and overwrite for rapid world switching.
 */
export function useWorldTransition({
  heroEyebrowRef,
  heroTitleRef,
  heroSubtitleRef,
  heroDividerRef,
  floatingDecorationsRef,
  cardsContainerRef,
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

      // Clean up previous tweens
      gsap.killTweensOf([titleEl, subtitleEl, dividerEl, eyebrowEl, floatingEl])

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

      // ── PHASE 1: OLD WORLD EXIT (0.0s - 0.28s) ────────────────────
      // Current hero content moves slightly upward and fades out
      if (titleEl && subtitleEl) {
        tl.to(
          [titleEl, subtitleEl],
          {
            y: -20,
            opacity: 0,
            duration: 0.28,
            ease: "power2.in",
          },
          0
        )
      }

      if (dividerEl) {
        tl.to(
          dividerEl,
          {
            scaleX: 0.4,
            opacity: 0,
            duration: 0.22,
            ease: "power2.in",
          },
          0
        )
      }

      if (eyebrowEl) {
        tl.to(
          eyebrowEl,
          {
            y: -12,
            opacity: 0,
            duration: 0.22,
            ease: "power2.in",
          },
          0
        )
      }

      if (floatingEl) {
        tl.to(
          floatingEl,
          {
            opacity: 0.3,
            scale: 0.96,
            duration: 0.26,
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
            duration: 0.24,
            ease: "power2.in",
            stagger: 0.02,
          },
          0
        )
      }

      // ── PHASE 2: WORLD ACCENT INTERPOLATION (0.15s - 0.65s) ───────
      // Color interpolation on CSS variables for a fluid shift
      const colorProxy = {
        accent: fromTheme.colors.accent,
        border: fromTheme.colors.border,
      }

      tl.to(
        colorProxy,
        {
          accent: toTheme.colors.accent,
          border: toTheme.colors.border,
          duration: 0.5,
          ease: "power2.out",
          onUpdate: () => {
            document.documentElement.style.setProperty(
              "--theme-accent",
              colorProxy.accent
            )
            document.documentElement.style.setProperty(
              "--theme-border",
              colorProxy.border
            )
          },
        },
        0.15
      )

      // Commit the React world state update at the exit boundary (0.28s)
      // so DOM updates with new world copy and motifs right as Phase 4 starts
      tl.add(() => {
        onCommitWorldChange()
      }, 0.28)

      // ── PHASE 4: NEW WORLD HERO ENTRANCE (0.35s - 0.85s) ──────────
      // Title enters (0ms in Phase 4)
      if (titleEl) {
        tl.fromTo(
          titleEl,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.48, ease: "power2.out" },
          0.35
        )
      }

      // Subtitle enters (+80ms stagger)
      if (subtitleEl) {
        tl.fromTo(
          subtitleEl,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.48, ease: "power2.out" },
          0.43
        )
      }

      // Decorative line enters (+150ms stagger)
      if (dividerEl) {
        tl.fromTo(
          dividerEl,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.42, ease: "power2.out" },
          0.5
        )
      }

      // Metadata / eyebrow enters (+220ms stagger)
      if (eyebrowEl) {
        tl.fromTo(
          eyebrowEl,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
          0.57
        )
      }

      if (floatingEl) {
        tl.to(
          floatingEl,
          { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" },
          0.48
        )
      }

      // ── PHASE 5: EVENT CARDS ENTRANCE TIMELINE (0.55s - 1.05s) ────
      tl.add(() => {
        // Query fresh card items matching the newly committed world state
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
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.08,
            }
          )
        }
      }, 0.55)
    },
    [
      heroEyebrowRef,
      heroTitleRef,
      heroSubtitleRef,
      heroDividerRef,
      floatingDecorationsRef,
      cardsContainerRef,
    ]
  )

  return {
    executeTransition,
  }
}
