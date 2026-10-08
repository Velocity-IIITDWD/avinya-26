"use client"

import React from "react"

const WORLDS = [
  { id: "ALL", label: "ALL DESTINATIONS (6 FEATURED)" },
  { id: "The Last Outpost", label: "THE LAST OUTPOST (DAY 1)" },
  { id: "Pandemonium", label: "PANDEMONIUM (DAY 2)" },
  { id: "The Carnival Island", label: "CARNIVAL ISLAND (DAY 3)" },
]

interface EventsPreviewFiltersProps {
  selectedWorld: string
  onSelectWorld: (world: string) => void
}

export function EventsPreviewFilters({
  selectedWorld,
  onSelectWorld,
}: EventsPreviewFiltersProps) {
  return (
    <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
      {WORLDS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onSelectWorld(tab.id)}
          className={`rounded-md border px-4 py-2 font-mono text-xs tracking-wider uppercase transition-all ${
            selectedWorld === tab.id
              ? "border-[#C85A2B] bg-[#C85A2B] text-[#F4E8D1] font-bold shadow-sm"
              : "border-[#062A3A]/15 bg-[#EFE3C8]/60 text-[#062A3A]/80 hover:border-[#062A3A]/30 dark:border-[#F4E8D1]/15 dark:bg-[#041B26]/60 dark:text-[#F4E8D1]/80"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
