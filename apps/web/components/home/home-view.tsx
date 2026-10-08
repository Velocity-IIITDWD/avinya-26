"use client"

import React from "react"
import { HeroVoyage } from "@/components/hero"
import { AboutJournal } from "@/components/about"
import { ThreeWorlds } from "@/components/three-worlds"
import { EventsPreview } from "@/components/events-preview"
import { ScheduleVoyage } from "@/components/schedule"
import { ContactDispatch } from "@/components/contact"
import { VoyageFooter } from "@/components/footer"

export function HomeView() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4E8D1] text-[#062A3A] transition-colors duration-500 dark:bg-[#d9c698] dark:text-[#F4E8D1]">
      {/* 01. The Departure // Hero Section */}
      <HeroVoyage />

      {/* 02. The Logbook // About IIIT Dharwad & The Fest */}
      <AboutJournal />

      {/* 03. The Chart // The Three Worlds Archipelago */}
      <ThreeWorlds />

      {/* 04. The Permits // Featured Expeditions Preview */}
      <EventsPreview />

      {/* 05. The Itinerary // 3-Day Voyage Route */}
      <ScheduleVoyage />

      {/* 06. The Port // Contact & Telegraph Dispatch */}
      <ContactDispatch />

      {/* 07. The Anchor // Maritime Editorial Footer */}
      <VoyageFooter />
    </div>
  )
}
