"use client"

import React from "react"
import { HeroVoyage } from "@/components/hero"
import { AboutJournal } from "@/components/about"
import {
  IslandJourney,
  HorizontalVoyageType,
  SponsorsHarbor,
} from "@/components/expedition"
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

      {/* 03. The Expedition // Boat route through the three festival islands */}
      <IslandJourney />

      {/* 04. The Patrons // Sponsors */}
      <SponsorsHarbor />

      {/* 05. The Call // Horizontal scroll typography */}
      <HorizontalVoyageType />

      {/* 06. The Itinerary // 3-Day Voyage Route */}
      <ScheduleVoyage />

      {/* 07. The Port // Contact & Telegraph Dispatch */}
      <ContactDispatch />

      {/* 08. The Anchor // Maritime Editorial Footer */}
      <VoyageFooter />
    </div>
  )
}
