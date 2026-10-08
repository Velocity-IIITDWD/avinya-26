"use client"

import React, { useState } from "react"
import { worldsData, WorldData } from "./worlds-data"
import { WorldTabs } from "./world-tabs"
import { WorldCard } from "./world-card"

export function ThreeWorlds() {
  const [activeWorldId, setActiveWorldId] = useState<string>("outpost")

  const activeWorld: WorldData =
    worldsData.find((w) => w.id === activeWorldId) ?? worldsData[0]!

  return (
    <section
      id="destinations"
      className="relative w-full overflow-hidden bg-[#062A3A] py-24 text-[#F4E8D1] transition-colors duration-500 sm:py-32"
    >
      {/* Bathymetry Oceanic Background Contours */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 75% 30%, rgba(200, 90, 43, 0.4) 0%, transparent 60%),
            radial-gradient(circle at 20% 70%, rgba(46, 139, 87, 0.3) 0%, transparent 50%),
            linear-gradient(to right, rgba(244, 232, 209, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(244, 232, 209, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "auto, auto, 80px 80px, 80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#C85A2B]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.3em] text-[#C85A2B] uppercase sm:text-xs">
              THE NAUTICAL ARCHIPELAGO
            </span>
            <span className="h-px w-8 bg-[#C85A2B]" />
          </div>

          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-[#F4E8D1] sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            THREE UNCHARTED WORLDS
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#F4E8D1]/75 sm:text-base">
            Every day of Avinya charts a course to a completely new realm of competition,
            artistry, and atmosphere. Explore each world to plan your voyage.
          </p>
        </div>

        {/* Tab Selection */}
        <WorldTabs
          worlds={worldsData}
          activeWorldId={activeWorldId}
          onSelectWorld={setActiveWorldId}
        />

        {/* Dynamic World Showcase Card */}
        <WorldCard world={activeWorld} />
      </div>
    </section>
  )
}
