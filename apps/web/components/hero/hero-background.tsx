"use client"

import React from "react"

export function HeroBackground() {
  return (
    <>
      {/* Decorative Vintage Bathymetry / Nautical Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, #062A3A 1px, transparent 1px),
            linear-gradient(to right, #062A3A 1px, transparent 1px),
            linear-gradient(to bottom, #062A3A 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px, 120px 120px, 120px 120px",
        }}
        aria-hidden="true"
      />

      {/* Subtle Circular Compass Route Arcs */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[600px] w-[600px] rounded-full border border-[#C85A2B]/10 sm:h-[800px] sm:w-[800px] md:h-[1000px] md:w-[1000px]" />
        <div className="absolute inset-8 rounded-full border border-dashed border-[#062A3A]/10 dark:border-[#F4E8D1]/10" />
        <div className="absolute inset-24 rounded-full border border-[#C85A2B]/15" />
      </div>
    </>
  )
}
