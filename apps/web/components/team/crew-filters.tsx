"use client"

import React from "react"
import { CREW_DIVISIONS, CrewDivisionTab } from "./crew-data"

interface CrewFiltersProps {
  activeFilter: string
  onSelectFilter: (filter: string) => void
  divisions?: CrewDivisionTab[]
}

export function CrewFilters({
  activeFilter,
  onSelectFilter,
  divisions = CREW_DIVISIONS,
}: CrewFiltersProps) {
  return (
    <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
      {divisions.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onSelectFilter(tab.id)}
          className={`rounded-md border px-4 py-2 font-mono text-xs tracking-wider uppercase transition-all ${
            activeFilter === tab.id
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
