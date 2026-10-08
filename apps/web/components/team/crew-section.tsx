"use client"

import React, { useState } from "react"
import { crewMembers } from "./crew-data"
import { CrewFilters } from "./crew-filters"
import { CrewRoster } from "./crew-roster"
import { VolunteerCta } from "./volunteer-cta"

export function CrewSection() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL")

  const filteredMembers =
    activeFilter === "ALL"
      ? crewMembers
      : crewMembers.filter((m) => m.division === activeFilter)

  return (
    <main className="relative mx-auto w-full max-w-7xl flex-1 px-6 py-16 sm:px-8 md:px-12 lg:px-16">
      {/* Filter Navigation */}
      <CrewFilters
        activeFilter={activeFilter}
        onSelectFilter={setActiveFilter}
      />

      {/* Crew Roster Grid */}
      <CrewRoster members={filteredMembers} />

      {/* Call to join the contingent or volunteer */}
      <VolunteerCta />
    </main>
  )
}
