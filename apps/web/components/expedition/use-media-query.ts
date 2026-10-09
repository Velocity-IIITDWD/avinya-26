"use client"

import { useEffect, useState } from "react"

/** Desktop cinematic mode: pinned scenes, route + boat, parallax. */
export const CINEMATIC_QUERY =
  "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(query)
    const update = () => setMatches(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [query])

  return matches
}

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia(REDUCED_MOTION_QUERY).matches
  )
}
