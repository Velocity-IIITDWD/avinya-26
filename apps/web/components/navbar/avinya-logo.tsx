"use client"

import React from "react"

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
  // Theme coloring:
  // "light" = navy text for cream/parchment background (#062A3A)
  // "dark" = cream text for navy/dark background (#F2E5C9)
  // "auto" = responsive to dark/light CSS classes
  const colorClass =
    theme === "light"
      ? "text-[#062A3A]"
      : theme === "dark"
        ? "text-[#F2E5C9]"
        : "text-[#062A3A] dark:text-[#F2E5C9]"

  const accentColor = "#C85A2B" // Burnt / Terracotta Orange

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Avinya Maritime Sail Emblem */}
      {showSail && (
        <div className="relative flex shrink-0 items-center justify-center">
          <svg
            width="34"
            height="34"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`h-8 w-8 transition-transform duration-500 hover:scale-105 sm:h-9 sm:w-9 ${colorClass}`}
            aria-hidden="true"
          >
            {/* Mainsail (Left wind-filled sail) */}
            <path
              d="M38 12 C 40 35, 62 62, 22 75 C 20 62, 28 35, 38 12 Z"
              fill="currentColor"
            />
            {/* Jib sail (Right sail with terracotta accent touch) */}
            <path
              d="M48 24 C 52 42, 78 68, 44 76 C 42 62, 46 40, 48 24 Z"
              fill={accentColor}
            />
            {/* Bottom ocean wave hull */}
            <path
              d="M18 80 C 35 74, 55 86, 75 78 C 82 75, 86 78, 88 80 C 72 87, 45 78, 18 80 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      )}

      {/* Typographic Avinya Wordmark & Life Is A Voyage Tagline */}
      <div className="flex flex-col justify-center">
        <div className="relative inline-block leading-none">
          <span
            className={`font-serif text-lg font-bold tracking-[0.28em] uppercase sm:text-xl ${colorClass}`}
            style={{
              fontFamily:
                '"Cinzel", "Playfair Display", "Baskerville", "Georgia", serif',
            }}
          >
            AVINYA
          </span>

          {/* Signature Maritime Ocean Wave Underline */}
          <svg
            viewBox="0 0 100 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-0.5 h-1.5 w-full text-[#C85A2B]"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 4 C 15 1, 25 7, 40 4 C 55 1, 65 7, 80 4 C 90 2, 95 5, 100 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {showTagline && (
          <span
            className="mt-0.5 text-[8px] font-medium tracking-[0.32em] text-[#C85A2B] uppercase opacity-90 sm:text-[9px]"
            style={{
              fontFamily:
                '"Cinzel", "Playfair Display", "Baskerville", "Georgia", serif',
            }}
          >
            Life is a Voyage
          </span>
        )}
      </div>
    </div>
  )
}
