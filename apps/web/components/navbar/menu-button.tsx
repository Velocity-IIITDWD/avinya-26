"use client"

import React from "react"

interface MenuButtonProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export function MenuButton({
  isOpen,
  onClick,
  className = "",
}: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close voyage map" : "Open voyage map"}
      aria-expanded={isOpen}
      aria-controls="navigation-overlay"
      className={`group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#062A3A]/20 bg-[#F4E8D1]/90 text-[#062A3A] shadow-[0_2px_12px_rgba(6,42,58,0.1)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#C85A2B] focus-visible:ring-1 focus-visible:ring-[#C85A2B] focus-visible:outline-none active:scale-95 dark:border-[#C85A2B]/40 dark:bg-[#062A3A]/90 dark:text-[#F2E5C9] dark:shadow-[0_4px_16px_rgba(4,27,38,0.4)] ${
        isOpen ? "border-[#C85A2B] bg-[#F2E5C9] dark:bg-[#041B26]" : ""
      } ${className}`}
    >
      {/* Outer subtle brass ring on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-full border border-dashed border-[#C85A2B]/0 transition-all duration-300 group-hover:rotate-45 group-hover:border-[#C85A2B]/50" />

      {/* Navigational Parallel Lines / X Morph */}
      <div className="relative flex h-3.5 w-4 flex-col items-center justify-between">
        {/* Top nautical line */}
        <span
          className={`h-[1.5px] w-full origin-center rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            isOpen
              ? "translate-y-[6px] rotate-45 text-[#C85A2B]"
              : "group-hover:translate-x-0.5"
          }`}
        />
        {/* Bottom nautical line */}
        <span
          className={`h-[1.5px] origin-center rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            isOpen
              ? "w-full -translate-y-[6px] -rotate-45 text-[#C85A2B]"
              : "w-3 self-start group-hover:w-full"
          }`}
        />
      </div>
    </button>
  )
}
