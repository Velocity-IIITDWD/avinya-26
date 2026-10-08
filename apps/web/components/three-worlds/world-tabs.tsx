"use client"

import React from "react"
import { WorldData } from "./worlds-data"

interface WorldTabsProps {
  worlds: WorldData[]
  activeWorldId: string
  onSelectWorld: (id: string) => void
}

export function WorldTabs({
  worlds,
  activeWorldId,
  onSelectWorld,
}: WorldTabsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {worlds.map((w) => {
        const isSelected = w.id === activeWorldId
        return (
          <button
            key={w.id}
            type="button"
            onClick={() => onSelectWorld(w.id)}
            className={`group relative flex flex-col items-start rounded-xl border p-5 text-left transition-all duration-300 ${
              isSelected
                ? "border-opacity-100 shadow-xl"
                : "border-[#F4E8D1]/15 bg-[#041B26]/40 hover:border-[#F4E8D1]/30 hover:bg-[#041B26]/80"
            }`}
            style={{
              borderColor: isSelected ? w.color : undefined,
              backgroundColor: isSelected ? "rgba(4, 27, 38, 0.9)" : undefined,
            }}
          >
            {/* Top row: day number & icon */}
            <div className="flex w-full items-center justify-between">
              <span
                className="font-mono text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: isSelected ? w.color : "rgba(244, 232, 209, 0.6)" }}
              >
                {w.day}
              </span>
              <span className="text-xl" role="img" aria-label={w.name}>
                {w.themeIcon}
              </span>
            </div>

            {/* World Name */}
            <h3
              className="mt-3 text-lg font-bold tracking-wide text-[#F4E8D1] sm:text-xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {w.name}
            </h3>

            {/* Date */}
            <span className="mt-1 font-mono text-[10px] tracking-[0.18em] text-[#F4E8D1]/60 uppercase">
              {w.date}
            </span>

            {/* Active Indicator Bar */}
            <div
              className="mt-4 h-1 w-full rounded-full transition-all duration-300"
              style={{
                backgroundColor: isSelected ? w.color : "transparent",
              }}
            />
          </button>
        )
      })}
    </div>
  )
}
