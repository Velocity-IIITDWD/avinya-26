"use client"

import React, { useState, useMemo, useEffect, useRef } from "react"
import { eventsData, EventData } from "@/data/events"
import { useWorldTheme, FilterValue, getWorldTheme } from "@/lib/theme"
import { WorldTabs, CategoryFilters, CategoryFilterValue } from "./EventFilters"
import { EventGrid } from "./EventGrid"
import { EventModal } from "./EventModal"
import { WorldBackground } from "./WorldBackground"
import {
  AvinyaSailIcon,
  CompassRoseMini,
  WaveDividerLine,
} from "./NauticalDecorations"
import { useWorldTransition } from "@/hooks/useWorldTransition"
import { useScrollParallax } from "@/hooks/useScrollParallax"

export function EventsSection() {
  const { activeWorld, theme, setActiveWorld, cssVariables } = useWorldTheme()
  const [activeCategory, setActiveCategory] = useState<CategoryFilterValue>("all")
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null)

  // Structural & GSAP animation refs
  const sectionRef = useRef<HTMLElement>(null)
  const bgContainerRef = useRef<HTMLDivElement>(null)
  const heroContainerRef = useRef<HTMLDivElement>(null)
  const heroEyebrowRef = useRef<HTMLDivElement>(null)
  const heroTitleRef = useRef<HTMLHeadingElement>(null)
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null)
  const heroDividerRef = useRef<HTMLDivElement>(null)
  const floatingDecorationsRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)

  // 1. GSAP Scroll Parallax & Cinematic World-to-Event transition
  useScrollParallax({
    containerRef: sectionRef,
    bgRef: bgContainerRef,
    cardsContainerRef,
  })

  // 2. GSAP Cinematic World Transition Timeline
  const { executeTransition } = useWorldTransition({
    heroContainerRef,
    heroEyebrowRef,
    heroTitleRef,
    heroSubtitleRef,
    heroDividerRef,
    floatingDecorationsRef,
    cardsContainerRef,
    bgContainerRef,
  })

  // Handle direct navigation and URL parameters on mount
  useEffect(() => {
    if (typeof window === "undefined") return

    const params = new URLSearchParams(window.location.search)
    const worldParam = params.get("world")?.toLowerCase()
    const categoryParam = params.get("category")?.toLowerCase()
    const hash = window.location.hash.toLowerCase().replace("#", "")
    const target = worldParam || hash

    if (target) {
      if (target.includes("outpost")) {
        setActiveWorld("The Last Outpost")
      } else if (target.includes("pandemonium")) {
        setActiveWorld("Pandemonium")
      } else if (target.includes("carnival")) {
        setActiveWorld("The Carnival Island")
      } else if (target === "all") {
        setActiveWorld("ALL")
      }
    }

    if (categoryParam) {
      if (categoryParam === "technical") {
        setActiveCategory("technical")
      } else if (categoryParam === "cultural") {
        setActiveCategory("cultural")
      } else if (categoryParam === "all") {
        setActiveCategory("all")
      }
    }
  }, [setActiveWorld])

  // Sync active world and category to URL query parameters
  const updateUrlParams = (newWorld: FilterValue, newCat: CategoryFilterValue) => {
    if (typeof window === "undefined") return
    const url = new URL(window.location.href)

    if (newWorld === "ALL") {
      url.searchParams.delete("world")
    } else if (newWorld === "The Last Outpost") {
      url.searchParams.set("world", "outpost")
    } else if (newWorld === "Pandemonium") {
      url.searchParams.set("world", "pandemonium")
    } else if (newWorld === "The Carnival Island") {
      url.searchParams.set("world", "carnival")
    }

    if (newCat === "all") {
      url.searchParams.delete("category")
    } else {
      url.searchParams.set("category", newCat)
    }

    window.history.replaceState(null, "", url.toString())
  }

  const handleSelectWorld = (filter: FilterValue) => {
    if (filter === activeWorld) return

    const targetTheme = getWorldTheme(filter)
    executeTransition(theme, targetTheme, () => {
      setActiveWorld(filter)
      updateUrlParams(filter, activeCategory)
    })
  }

  const handleSelectCategory = (cat: CategoryFilterValue) => {
    setActiveCategory(cat)
    updateUrlParams(activeWorld, cat)
  }

  // Compute event counts per world (matching current category filter)
  const worldCounts = useMemo(() => {
    const map: Record<FilterValue, number> = {
      ALL: 0,
      "The Last Outpost": 0,
      Pandemonium: 0,
      "The Carnival Island": 0,
    }

    eventsData.forEach((ev) => {
      const matchesCategory =
        activeCategory === "all" || ev.category === activeCategory

      if (matchesCategory) {
        map.ALL++
        if (map[ev.world] !== undefined) {
          map[ev.world]++
        }
      }
    })

    return map
  }, [activeCategory])

  // Compute event counts per category (matching current world filter)
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryFilterValue, number> = {
      all: 0,
      technical: 0,
      cultural: 0,
    }

    eventsData.forEach((ev) => {
      const matchesWorld = activeWorld === "ALL" || ev.world === activeWorld
      if (matchesWorld) {
        counts.all++
        if (ev.category === "technical") counts.technical++
        if (ev.category === "cultural") counts.cultural++
      }
    })

    return counts
  }, [activeWorld])

  // Filtered events based on independent world and category filters
  const filteredEvents = useMemo(() => {
    return eventsData.filter((ev) => {
      const matchesWorld =
        activeWorld === "ALL" || ev.world === activeWorld

      const matchesCategory =
        activeCategory === "all" || ev.category === activeCategory

      return matchesWorld && matchesCategory
    })
  }, [activeWorld, activeCategory])

  return (
    <section
      id="events"
      ref={sectionRef}
      style={cssVariables as React.CSSProperties}
      className="relative w-full overflow-hidden bg-[var(--theme-background)] py-16 text-[var(--theme-primary)] transition-colors duration-500 sm:py-24"
    >
      {/* ─── DYNAMIC THEME-AWARE BACKGROUND LAYER (WITH GSAP WORLD-TO-EVENT SCROLL BLUR) ── */}
      <WorldBackground theme={theme} containerRef={bgContainerRef} />

      {/* ─── FLOATING DECORATIVE EXPEDITION ELEMENTS ─────────────────── */}
      <div
        ref={floatingDecorationsRef}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
        {/* Floating Celestial Sparkle (Hero Near Title) */}
        <div
          data-parallax="3"
          className="absolute top-20 right-1/4 hidden md:block text-sm text-[var(--theme-accent)] opacity-60 animate-star-twinkle"
        >
          ✦
        </div>

        {/* Floating Dotted Voyage Waypoint (Mid Left) */}
        <div
          data-parallax="3"
          className="hidden xl:flex absolute top-1/2 left-4 items-center gap-2 font-mono text-[8.5px] text-[var(--theme-muted-foreground)] tracking-widest uppercase animate-voyage-float-gentle"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--theme-accent)]" />
          <span>VOYAGE LOGBOOK // IIIT DHARWAD</span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* ─── WORLD-SELECTION TABS (TAB SWITCHING ABOVE ISLAND DESCRIPTION) ─── */}
        <div className="mb-10 flex justify-center">
          <WorldTabs
            activeWorld={activeWorld}
            onSelectWorld={handleSelectWorld}
            worldCounts={worldCounts}
          />
        </div>

        {/* ─── ISLAND DESCRIPTION (LARGE WORLD HERO SECTION) ───────────── */}
        <div ref={heroContainerRef} className="mb-12 text-center md:mb-16">
          {/* Dynamic Hero Main Title */}
          <div>
            <h2
              ref={heroTitleRef}
              className="font-serif text-3xl font-extrabold tracking-[0.04em] text-[var(--theme-primary)] uppercase sm:text-4xl lg:text-5xl transition-colors duration-300 will-change-transform drop-shadow-md"
            >
              {theme.heroTitle}
            </h2>

            {/* Editorial Subtitle Focused on World Identity (Island Description) */}
            <p
              ref={heroSubtitleRef}
              className="mx-auto mt-3 max-w-2xl font-serif text-base text-[var(--theme-muted-foreground)] italic sm:text-lg transition-colors duration-300 will-change-transform"
            >
              &ldquo;{theme.heroSubtitle}&rdquo;
            </p>
          </div>

          {/* Decorative Compass Divider */}
          <div
            ref={heroDividerRef}
            data-parallax="4"
            className="mt-5 flex items-center justify-center gap-3 text-[var(--theme-accent)] transition-colors duration-300 will-change-transform"
          >
            <WaveDividerLine width={90} className="text-[var(--theme-accent)]/80" />
            <CompassRoseMini size={22} className="text-[var(--theme-accent)]" />
            <WaveDividerLine width={90} className="text-[var(--theme-accent)]/80" />
          </div>
        </div>

        {/* ─── EXPEDITION CATEGORY SELECTOR ───────────────────────── */}
        <div className="mb-8">
          <CategoryFilters
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
            categoryCounts={categoryCounts}
          />
        </div>

        {/* ─── DYNAMIC CATEGORY HEADING & VOYAGE STATUS BAR ─────────── */}
        <div
          key={`cat-heading-${activeCategory}-${activeWorld}`}
          className="mb-7 flex flex-col justify-between gap-3 border-b border-[var(--theme-border)] pb-3.5 sm:flex-row sm:items-end animate-in fade-in slide-in-from-bottom-2 duration-400"
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-[var(--theme-accent)] uppercase">
                {activeCategory === "technical"
                  ? "DISCIPLINE 01 // TECHNICAL GAUNTLETS"
                  : activeCategory === "cultural"
                    ? "DISCIPLINE 02 // CULTURAL SPECTACLES"
                    : "ALL DISCIPLINES // FULL VOYAGE ARCHIPELAGO"}
              </span>
              <span className="text-[var(--theme-border)]">•</span>
              <span className="font-mono text-[9px] text-[var(--theme-muted-foreground)] uppercase">
                {theme.shortLabel}
              </span>
            </div>

            <h3 className="mt-1 font-serif text-xl font-extrabold tracking-[0.03em] text-[var(--theme-primary)] uppercase sm:text-2xl transition-colors duration-300">
              {activeCategory === "technical"
                ? "TECHNICAL EXPEDITIONS"
                : activeCategory === "cultural"
                  ? "CULTURAL EXPEDITIONS"
                  : "VOYAGE LOG"}
            </h3>

            <p className="mt-0.5 text-xs font-serif italic text-[var(--theme-muted-foreground)]">
              {activeCategory === "technical"
                ? "Engineering, technology & competition"
                : activeCategory === "cultural"
                  ? "Music, performance & celebration"
                  : "All destinations charted across the archipelago"}
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px] text-[var(--theme-muted-foreground)]">
            <span>
              STATUS:{" "}
              <strong className="text-[var(--theme-primary)]">
                {filteredEvents.length} DESTINATION
                {filteredEvents.length === 1 ? "" : "S"} CHARTED
              </strong>
            </span>
            <span className="hidden text-[var(--theme-muted-foreground)] md:inline">
              | {theme.motifs.coordinateGrid}
            </span>
          </div>
        </div>

        {/* ─── RESPONSIVE EVENT CARDS GRID WITH SCROLL REVEALS ────────── */}
        <div ref={cardsContainerRef} className="w-full">
          <EventGrid
            events={filteredEvents}
            categoryKey={`${activeWorld}-${activeCategory}`}
            onExploreEvent={(ev) => setSelectedEvent(ev)}
            onResetFilters={() => {
              handleSelectWorld("ALL")
              handleSelectCategory("all")
            }}
          />
        </div>

        {/* ─── VOYAGE LOG FOOTNOTE ─────────────────────────────────── */}
        <div className="mt-16 flex flex-col items-center justify-center border-t border-[var(--theme-border)] pt-8 text-center text-xs text-[var(--theme-muted-foreground)] transition-colors duration-400">
          <AvinyaSailIcon variant={activeWorld === "ALL" ? "navy" : "cream"} size={28} className="mb-2" alt="Avinya" />
          <p className="font-serif font-bold tracking-[0.2em] text-[var(--theme-primary)] uppercase">
            Avinya 2026 • Techno-Cultural Fest • IIIT Dharwad
          </p>
          <p className="mt-1 text-[11px] text-[var(--theme-muted-foreground)]/80">
            Every event is a port of call on the grand voyage. Check in at the Harbour Desk on event days for pass verification.
          </p>
        </div>
      </div>

      {/* ─── EXPEDITION DOSSIER MODAL ────────────────────────────── */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  )
}
