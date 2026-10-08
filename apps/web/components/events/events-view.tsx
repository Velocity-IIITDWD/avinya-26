"use client"

import React from "react"
import { EventsSection } from "./EventsSection"
import { useWorldTheme } from "@/lib/theme"

export function EventsView() {
  const { cssVariables } = useWorldTheme()

  return (
    <div
      style={cssVariables as React.CSSProperties}
      className="min-h-screen bg-[var(--theme-background,#0B1724)] transition-colors duration-700"
    >
      <EventsSection />
    </div>
  )
}
