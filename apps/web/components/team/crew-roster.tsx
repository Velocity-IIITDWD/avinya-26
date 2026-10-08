"use client"

import React from "react"
import { CrewMember } from "./crew-data"
import { CrewCard } from "./crew-card"

interface CrewRosterProps {
  members: CrewMember[]
}

export function CrewRoster({ members }: CrewRosterProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((member) => (
        <CrewCard key={member.id} member={member} />
      ))}
    </div>
  )
}
