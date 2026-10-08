"use client"

import { useEffect, useState } from "react"

export type ScrollDirection = "up" | "down" | "initial"

interface ScrollState {
  scrollY: number
  isScrolled: boolean
  scrollDirection: ScrollDirection
}

export function useScrollDirection(threshold: number = 20): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    isScrolled: false,
    scrollDirection: "initial",
  })

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const updateScroll = () => {
      const currentScrollY = window.scrollY
      const isScrolled = currentScrollY > threshold
      let direction: ScrollDirection = "initial"

      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        direction = currentScrollY > lastScrollY ? "down" : "up"
      }

      setScrollState((prev) => {
        const nextDirection =
          direction !== "initial" ? direction : prev.scrollDirection
        if (
          prev.isScrolled === isScrolled &&
          prev.scrollDirection === nextDirection &&
          Math.abs(prev.scrollY - currentScrollY) < 10
        ) {
          return prev
        }
        return {
          scrollY: currentScrollY,
          isScrolled,
          scrollDirection: nextDirection,
        }
      })

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    // Initialize with current scroll
    updateScroll()

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [threshold])

  return scrollState
}
