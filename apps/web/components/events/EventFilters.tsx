"use client"

import React from "react"
import Image from "next/image"
import { WorldFilterId, WorldTheme, worldThemes } from "@/lib/theme"

export type WorldFilterValue = WorldFilterId
export type CategoryFilterValue = "all" | "technical" | "cultural"

export interface WorldTabsProps {
  activeWorld?: WorldFilterValue
  activeFilter?: WorldFilterValue
  onSelectWorld?: (world: WorldFilterValue) => void
  onSelectFilter?: (filter: WorldFilterValue) => void
  worldCounts?: Record<WorldFilterValue, number>
  counts?: Record<WorldFilterValue, number>
}

export interface CategoryFiltersProps {
  activeCategory?: CategoryFilterValue
  onSelectCategory?: (category: CategoryFilterValue) => void
  categoryCounts?: Record<CategoryFilterValue, number>
}

export interface EventFiltersProps extends WorldTabsProps, CategoryFiltersProps {
  searchQuery?: string
  onSearchChange?: (query: string) => void
}

const WORLD_ITEMS: WorldTheme[] = [
  worldThemes.all,
  worldThemes.lastOutpost,
  worldThemes.pandemonium,
  worldThemes.carnivalIsland,
]

interface CategoryOption {
  id: CategoryFilterValue
  label: string
  tagline: string
  icon: "compass" | "technical" | "cultural"
}

const CATEGORY_ITEMS: CategoryOption[] = [
  {
    id: "all",
    label: "ALL",
    tagline: "All Expeditions",
    icon: "compass",
  },
  {
    id: "technical",
    label: "TECHNICAL",
    tagline: "Code, Bots & Flight",
    icon: "technical",
  },
  {
    id: "cultural",
    label: "CULTURAL",
    tagline: "Music, Choreo & Lights",
    icon: "cultural",
  },
]

export function WorldTabs({
  activeWorld: propActiveWorld,
  activeFilter,
  onSelectWorld,
  onSelectFilter,
  worldCounts,
  counts,
}: WorldTabsProps) {
  const currentWorld = propActiveWorld ?? activeFilter ?? "ALL"
  const handleWorldSelect = onSelectWorld ?? onSelectFilter ?? (() => {})
  const currentWorldCounts = worldCounts ?? counts ?? {
    ALL: 0,
    "The Last Outpost": 0,
    Pandemonium: 0,
    "The Carnival Island": 0,
  }

  return (
    <div
      role="tablist"
      aria-label="Event world destination selector"
      className="no-scrollbar flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1.5 pt-0.5 sm:gap-2.5 max-w-full"
    >
      {WORLD_ITEMS.map((item) => {
        const isActive = currentWorld === item.id
        const count = currentWorldCounts[item.id] ?? 0

        return (
          <button
            key={item.id}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => handleWorldSelect(item.id)}
            className={`group relative flex shrink-0 cursor-pointer items-center gap-2 rounded-xs border px-3.5 py-2 text-xs font-bold tracking-[0.14em] uppercase select-none transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent)] ${
              isActive
                ? "border-[var(--theme-accent)] bg-[var(--theme-card)] text-[var(--theme-primary)] shadow-md shadow-[var(--theme-glow)]"
                : "border-[var(--theme-border)] bg-[var(--theme-card)]/75 text-[var(--theme-primary)]/80 hover:border-[var(--theme-accent)]/50 hover:bg-[var(--theme-card)]"
            }`}
          >
            {/* World Icon or Active Indicator Dot */}
            {item.motifs.icon && item.id !== "ALL" ? (
              <div
                className={`relative h-4 w-4 shrink-0 overflow-hidden rounded-full border transition-all duration-300 ${
                  isActive
                    ? "border-[var(--theme-accent)] shadow-[0_0_8px_var(--theme-glow)]"
                    : "border-transparent opacity-85 group-hover:opacity-100"
                }`}
              >
                <Image
                  src={item.motifs.icon}
                  alt=""
                  fill
                  sizes="16px"
                  className="object-cover"
                />
              </div>
            ) : (
              <span
                className="h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-125"
                style={{
                  backgroundColor: isActive ? item.colors.accent : "var(--theme-border)",
                  boxShadow: isActive ? `0 0 8px ${item.colors.glow}` : "none",
                }}
                aria-hidden="true"
              />
            )}

            {/* Filter Label */}
            <span className="whitespace-nowrap transition-colors duration-200">
              {item.shortLabel}
            </span>

            {/* Count Badge */}
            <span
              className={`flex h-4 min-w-4 items-center justify-center rounded-full px-1.5 font-mono text-[9.5px] font-semibold transition-colors duration-200 ${
                isActive
                  ? "bg-[var(--theme-accent)] text-[#0B1015] font-bold"
                  : "bg-[var(--theme-border)] text-[var(--theme-primary)]"
              }`}
            >
              {count}
            </span>

            {/* Active Indicator Underline */}
            {isActive && (
              <span
                className="absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full transition-all duration-300"
                style={{
                  backgroundColor: item.colors.accent,
                  boxShadow: `0 0 10px ${item.colors.glow}`,
                }}
                aria-hidden="true"
              />
            )}
          </button>
        )
      })}
    </div>
  )
}

export function CategoryFilters({
  activeCategory = "all",
  onSelectCategory,
  categoryCounts,
}: CategoryFiltersProps) {
  return (
    <div className="flex flex-col items-center justify-center pt-2">
      {/* Subtle Archival Eyebrow Title */}
      <div className="mb-2.5 flex items-center gap-3 text-center">
        <div className="h-px w-8 bg-[var(--theme-border)]" />
        <span className="font-mono text-[10px] font-bold tracking-[0.26em] text-[var(--theme-muted-foreground)] uppercase">
          EXPLORE THE VOYAGE
        </span>
        <div className="h-px w-8 bg-[var(--theme-border)]" />
      </div>

      {/* Tactical Category Filter Bar */}
      <div
        role="tablist"
        aria-label="Expedition discipline category filter"
        className="inline-flex items-center rounded-xs border border-[var(--theme-border)] bg-[var(--theme-card)]/85 p-1 shadow-xs backdrop-blur-sm transition-colors duration-300"
      >
        {CATEGORY_ITEMS.map((cat) => {
          const isActive = activeCategory === cat.id
          const count = categoryCounts ? categoryCounts[cat.id] : undefined

          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => onSelectCategory?.(cat.id)}
              className={`group relative flex items-center gap-2 rounded-xs px-4 py-2 text-xs font-bold tracking-[0.14em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent)] cursor-pointer select-none ${
                isActive
                  ? "border border-[var(--theme-accent)] bg-[var(--theme-accent)] text-[#0B1015] font-bold shadow-xs"
                  : "border border-transparent text-[var(--theme-primary)]/80 hover:bg-[var(--theme-accent-soft)] hover:text-[var(--theme-primary)]"
              }`}
            >
              {/* Discipline Icon */}
              <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                {cat.icon === "compass" && (
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" opacity="0.3" />
                  </svg>
                )}

                {cat.icon === "technical" && (
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}

                {cat.icon === "cultural" && (
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                )}
              </span>

              {/* Label */}
              <span className="whitespace-nowrap">{cat.label}</span>

              {/* Optional Count */}
              {typeof count === "number" && (
                <span
                  className={`ml-1 flex h-4 min-w-4 items-center justify-center rounded-full px-1.5 font-mono text-[9px] font-semibold transition-colors duration-200 ${
                    isActive
                      ? "bg-[#0B1015] text-[var(--theme-accent)] font-bold"
                      : "bg-[var(--theme-border)] text-[var(--theme-primary)]"
                  }`}
                >
                  {count}
                </span>
              )}

              {/* Active Underline */}
              {isActive && (
                <span
                  className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: "var(--theme-accent)",
                    boxShadow: "0 0 8px var(--theme-glow)",
                  }}
                  aria-hidden="true"
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function EventFilters(props: EventFiltersProps) {
  return (
    <div className="w-full space-y-6">
      <div className="flex justify-center">
        <WorldTabs {...props} />
      </div>
      <CategoryFilters {...props} />
    </div>
  )
}
