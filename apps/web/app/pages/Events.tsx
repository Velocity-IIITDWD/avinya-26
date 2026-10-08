"use client"

import React from "react"
import { EventsSection } from "@/components/events"
import { useWorldTheme } from "@/lib/theme"

export default function Events() {
  const { cssVariables } = useWorldTheme()

  return (
    <div
      style={cssVariables as React.CSSProperties}
      className="min-h-screen bg-[var(--theme-background,#FAF3E3)] transition-colors duration-500"
    >
      <EventsSection />
    </div>
  )
}
