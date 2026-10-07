"use client"

import React from "react"
import Image from "next/image"
import { AvinyaWorld, WORLD_CONFIG } from "@/data/events"

export type FilterValue = "ALL" | AvinyaWorld

interface EventFiltersProps {
  activeFilter: FilterValue
  onSelectFilter: (filter: FilterValue) => void
  counts: Record<FilterValue, number>
  searchQuery: string
  onSearchChange: (query: string) => void
}

const FILTER_ITEMS: {
  id: FilterValue
  label: string
  shortLabel: string
  subtitle: string
  icon?: string
  accentColor: string
}[] = [
  {
    id: "ALL",
    label: "ALL DESTINATIONS",
    shortLabel: "ALL",
    subtitle: "Complete Voyage Log",
    accentColor: "#C85A2B",
  },
  {
    id: "The Last Outpost",
    label: "THE LAST OUTPOST",
    shortLabel: "LAST OUTPOST",
    subtitle: "Technical Frontier // Day 01",
    icon: "/images/worlds/outpost.webp",
    accentColor: WORLD_CONFIG["The Last Outpost"].color,
  },
  {
    id: "Pandemonium",
    label: "PANDEMONIUM",
    shortLabel: "PANDEMONIUM",
    subtitle: "Robotics & Tech // Day 02",
    icon: "/images/worlds/pandemonium.webp",
    accentColor: WORLD_CONFIG["Pandemonium"].color,
  },
  {
    id: "The Carnival Island",
    label: "THE CARNIVAL ISLAND",
    shortLabel: "CARNIVAL ISLAND",
    subtitle: "Cultural Spectacle // Day 03",
    icon: "/images/worlds/carnival.webp",
    accentColor: WORLD_CONFIG["The Carnival Island"].color,
  },
]

export function EventFilters({
  activeFilter,
  onSelectFilter,
  counts,
  searchQuery,
  onSearchChange,
}: EventFiltersProps) {
  return (
    <div className="w-full space-y-5">
      {/* Search & World Filter Bar Container */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* World Filter Buttons */}
        <div
          role="tablist"
          aria-label="Event destination filter"
          className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 sm:gap-3"
        >
          {FILTER_ITEMS.map((item) => {
            const isActive = activeFilter === item.id
            const count = counts[item.id] ?? 0

            return (
              <button
                key={item.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => onSelectFilter(item.id)}
                className={`group relative flex shrink-0 cursor-pointer items-center gap-2.5 rounded-xs border px-3.5 py-2.5 text-xs font-bold tracking-[0.12em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A2B] select-none ${
                  isActive
                    ? "border-[#082B3A] bg-[#082B3A] text-[#F4E8D1] shadow-md shadow-[#082B3A]/20"
                    : "border-[#D8C7A8] bg-[#F7EEDD]/80 text-[#082B3A] hover:border-[#C85A2B]/60 hover:bg-[#F2E5C9]"
                }`}
              >
                {/* World Icon or Dot */}
                {item.icon ? (
                  <div className="relative h-4 w-4 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={item.icon}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <span
                    className="h-2 w-2 rounded-full transition-transform duration-300 group-hover:scale-125"
                    style={{
                      backgroundColor: isActive ? "#C85A2B" : item.accentColor,
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Filter Label */}
                <span className="whitespace-nowrap">{item.shortLabel}</span>

                {/* Count Badge */}
                <span
                  className={`flex h-4 min-w-4 items-center justify-center rounded-full px-1 font-mono text-[10px] font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-[#F4E8D1] text-[#082B3A]"
                      : "bg-[#082B3A]/10 text-[#082B3A]"
                  }`}
                >
                  {count}
                </span>

                {/* Active Indicator Underline */}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-[2px]"
                    style={{ backgroundColor: item.accentColor }}
                    aria-hidden="true"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Quick Search Input */}
        <div className="relative w-full md:w-64">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-[#70583E]">
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search logbook..."
            aria-label="Search events"
            className="w-full rounded-xs border border-[#D8C7A8] bg-[#F7EEDD]/90 py-2 pr-3 pl-8 text-xs text-[#082B3A] placeholder-[#8C7355] transition-colors duration-200 focus:border-[#C85A2B] focus:bg-[#FFF9EE] focus:outline-none focus:ring-1 focus:ring-[#C85A2B]"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute inset-y-0 right-2.5 flex items-center text-xs text-[#70583E] hover:text-[#082B3A]"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
