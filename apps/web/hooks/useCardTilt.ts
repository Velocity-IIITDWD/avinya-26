"use client"

import { useEffect, useRef, useCallback } from "react"
import { gsap } from "gsap"

interface UseCardTiltOptions {
  cardRef: React.RefObject<HTMLDivElement | null>
  imageRef: React.RefObject<HTMLDivElement | null>
  titleRef: React.RefObject<HTMLHeadingElement | null>
  accentLineRef: React.RefObject<HTMLDivElement | null>
  disabled?: boolean
}

/**
 * Hook for high-performance 60 FPS 3D mouse-following tilt and internal parallax
 * utilizing GSAP quickTo() with automatic mobile/touch and reduced-motion fallbacks.
 */
export function useCardTilt({
  cardRef,
  imageRef,
  titleRef,
  accentLineRef,
  disabled = false,
}: UseCardTiltOptions) {
  // GSAP quickTo interpolator instances
  const cardRotX = useRef<gsap.QuickToFunc | null>(null)
  const cardRotY = useRef<gsap.QuickToFunc | null>(null)
  const cardX = useRef<gsap.QuickToFunc | null>(null)
  const cardY = useRef<gsap.QuickToFunc | null>(null)

  const imgX = useRef<gsap.QuickToFunc | null>(null)
  const imgY = useRef<gsap.QuickToFunc | null>(null)

  const titleX = useRef<gsap.QuickToFunc | null>(null)
  const titleY = useRef<gsap.QuickToFunc | null>(null)

  const isEnabled = useRef(false)
  const isTablet = useRef(false)

  useEffect(() => {
    if (typeof window === "undefined" || disabled) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 768

    if (prefersReducedMotion || isTouch) {
      isEnabled.current = false
      return
    }

    isEnabled.current = true
    isTablet.current = window.innerWidth >= 768 && window.innerWidth < 1024

    const ctx = gsap.context(() => {
      if (!cardRef.current) return

      // Card quickTo interpolators (duration: 0.38s with power2.out for physical responsiveness)
      cardRotX.current = gsap.quickTo(cardRef.current, "rotationX", {
        duration: 0.38,
        ease: "power2.out",
      })
      cardRotY.current = gsap.quickTo(cardRef.current, "rotationY", {
        duration: 0.38,
        ease: "power2.out",
      })
      cardX.current = gsap.quickTo(cardRef.current, "x", {
        duration: 0.38,
        ease: "power2.out",
      })
      cardY.current = gsap.quickTo(cardRef.current, "y", {
        duration: 0.38,
        ease: "power2.out",
      })

      // Image internal parallax
      if (imageRef.current) {
        imgX.current = gsap.quickTo(imageRef.current, "x", {
          duration: 0.45,
          ease: "power2.out",
        })
        imgY.current = gsap.quickTo(imageRef.current, "y", {
          duration: 0.45,
          ease: "power2.out",
        })
      }

      // Title internal parallax
      if (titleRef.current) {
        titleX.current = gsap.quickTo(titleRef.current, "x", {
          duration: 0.5,
          ease: "power2.out",
        })
        titleY.current = gsap.quickTo(titleRef.current, "y", {
          duration: 0.5,
          ease: "power2.out",
        })
      }
    })

    return () => {
      ctx.revert()
    }
  }, [cardRef, imageRef, titleRef, accentLineRef, disabled])

  const onMouseEnter = useCallback(() => {
    if (!isEnabled.current || !cardRef.current) return

    // Card enters hover state: scale 1 -> 1.02, subtle lift
    gsap.to(cardRef.current, {
      scale: 1.02,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    })

    // Image zooms smoothly to 1.04
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.045,
        duration: 0.45,
        ease: "power2.out",
        overwrite: "auto",
      })
    }

    // Top accent line scales horizontally from center
    if (accentLineRef.current) {
      gsap.to(accentLineRef.current, {
        scaleX: 1,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      })
    }
  }, [cardRef, imageRef, accentLineRef])

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isEnabled.current || !cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      // Normalized coordinates: -0.5 to +0.5
      const normX = (e.clientX - rect.left) / rect.width - 0.5
      const normY = (e.clientY - rect.top) / rect.height - 0.5

      // Sensitivity factor (reduced on tablet form factors)
      const factor = isTablet.current ? 0.5 : 1.0

      // Maximum rotations: rotateX: ±3deg, rotateY: ±4deg
      const rotX = -normY * (6 * factor) // cursor top tilts card backward/forward
      const rotY = normX * (8 * factor) // cursor right tilts right side back
      const transX = normX * (8 * factor) // max ±4px
      const transY = normY * (8 * factor) // max ±4px

      // Update card position smoothly via quickTo
      cardRotX.current?.(rotX)
      cardRotY.current?.(rotY)
      cardX.current?.(transX)
      cardY.current?.(transY)

      // Internal Parallax: Image moves ±3px, Title moves ±1px
      imgX.current?.(normX * (6 * factor))
      imgY.current?.(normY * (6 * factor))

      titleX.current?.(normX * (2 * factor))
      titleY.current?.(normY * (2 * factor))
    },
    [cardRef]
  )

  const onMouseLeave = useCallback(() => {
    if (!cardRef.current) return

    // Smoothly return all transforms to rest state with power2.out
    cardRotX.current?.(0)
    cardRotY.current?.(0)
    cardX.current?.(0)
    cardY.current?.(0)

    imgX.current?.(0)
    imgY.current?.(0)

    titleX.current?.(0)
    titleY.current?.(0)

    gsap.to(cardRef.current, {
      rotationX: 0,
      rotationY: 0,
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    })

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      })
    }

    if (titleRef.current) {
      gsap.to(titleRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      })
    }

    if (accentLineRef.current) {
      gsap.to(accentLineRef.current, {
        scaleX: 0,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      })
    }
  }, [cardRef, imageRef, titleRef, accentLineRef])

  return {
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
  }
}
