"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useWorldTheme } from "@/lib/theme"

interface AvinyaLogoProps {
  className?: string
  showTagline?: boolean
  showSail?: boolean
  theme?: "dark" | "light" | "auto"
}

export function AvinyaLogo({
  className = "",
  showTagline = true,
  showSail = true,
  theme = "auto",
}: AvinyaLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoTextRef = useRef<HTMLSpanElement>(null)
  const taglineRef = useRef<HTMLSpanElement>(null)
  const sailRef = useRef<HTMLDivElement>(null)

  const { theme: worldTheme } = useWorldTheme()
  const activeLogoAccent = worldTheme?.colors?.logoAccent || "#C85A2B"
  const activeGlow = worldTheme?.colors?.glow || "rgba(200, 90, 43, 0.3)"

  // Subtle initial entrance animation (300-500ms) on Events page load
  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Subtle entrance sequence: logo opacity 0 -> 1, y: -10px -> 0, tagline opacity 0 -> 1
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
      )

      if (taglineRef.current) {
        gsap.fromTo(
          taglineRef.current,
          { opacity: 0 },
          { opacity: 0.95, duration: 0.4, delay: 0.15, ease: "power2.out" }
        )
      }
    }, containerRef)

    return () => {
      ctx.revert()
    }
  }, [])

  // High contrast text color ensuring visibility on both dark environments and parchment
  const colorClass =
    theme === "light"
      ? "text-[#062A3A]"
      : theme === "dark"
        ? "text-[#FAF4E8]"
        : "text-[#FAF4E8] drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"

  return (
    <div
      ref={containerRef}
      className={`group/logo relative flex items-center gap-3 select-none ${className}`}
    >
      {/* Avinya Maritime Sail Emblem with Dynamic World Accent */}
      {showSail && (
        <div
          ref={sailRef}
          className="relative flex shrink-0 items-center justify-center transition-transform duration-500 will-change-transform group-hover/logo:scale-105"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 transition-colors duration-500 sm:h-9 sm:w-9"
            aria-hidden="true"
          >
            {/* Mainsail (Left wind-filled sail in crisp light ivory) */}
            <path
              d="M38 12 C 40 35, 62 62, 22 75 C 20 62, 28 35, 38 12 Z"
              fill="#F4E8D1"
              className="drop-shadow-sm"
            />
            {/* Jib sail (Right sail dynamically styled with world accent) */}
            <path
              d="M48 24 C 52 42, 78 68, 44 76 C 42 62, 46 40, 48 24 Z"
              fill={activeLogoAccent}
              style={{
                filter: `drop-shadow(0 0 6px ${activeGlow})`,
                transition: "fill 400ms ease, filter 400ms ease",
              }}
            />
            {/* Bottom ocean wave hull */}
            <path
              d="M18 80 C 35 74, 55 86, 75 78 C 82 75, 86 78, 88 80 C 72 87, 45 78, 18 80 Z"
              fill="#F4E8D1"
            />
          </svg>
        </div>
      )}

      {/* Typographic Avinya Wordmark & Life Is A Voyage Tagline */}
      <div className="flex flex-col justify-center">
        <div className="relative inline-block leading-none">
          <span
            ref={logoTextRef}
            className={`font-serif text-lg font-bold tracking-[0.28em] uppercase sm:text-xl ${colorClass}`}
            style={{
              fontFamily:
                '"Cinzel", "Playfair Display", "Baskerville", "Georgia", serif',
            }}
          >
            AVINYA
          </span>

          {/* Signature Maritime Ocean Wave Underline adapting to world accent */}
          <svg
            viewBox="0 0 100 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-0.5 h-1.5 w-full transition-colors duration-500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 4 C 15 1, 25 7, 40 4 C 55 1, 65 7, 80 4 C 90 2, 95 5, 100 4"
              stroke={activeLogoAccent}
              strokeWidth="1.6"
              strokeLinecap="round"
              style={{
                filter: `drop-shadow(0 0 3px ${activeGlow})`,
                transition: "stroke 400ms ease",
              }}
            />
          </svg>
        </div>

        {showTagline && (
          <span
            ref={taglineRef}
            className="mt-0.5 text-[8.5px] font-bold tracking-[0.32em] uppercase transition-colors duration-400 sm:text-[9.5px]"
            style={{
              color: activeLogoAccent,
              fontFamily:
                '"Cinzel", "Playfair Display", "Baskerville", "Georgia", serif',
              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            Life is a Voyage
          </span>
        )}
      </div>
    </div>
  )
}
