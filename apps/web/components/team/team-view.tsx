"use client"

import React from "react"
import { TeamHero } from "./team-hero"
import { CrewSection } from "./crew-section"
import { VoyageFooter } from "@/components/footer"

export function TeamView() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F4E8D1] text-[#062A3A] transition-colors duration-500 dark:bg-[#062A3A] dark:text-[#F4E8D1]">
      <TeamHero />
      <CrewSection />
      <VoyageFooter />
    </div>
  )
}
