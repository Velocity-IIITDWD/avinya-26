"use client"

import React, { useState } from "react"
import TeamHero from "@/components/team/team-hero"
import { CrewCard, CrewMember } from "@/components/team/crew-card"
import { VoyageFooter } from "@/components/footer/voyage-footer"

const crewMembers: CrewMember[] = [
  {
    id: "sparsh-mittal",
    code: "SEC-01",
    name: "Sparsh Mittal",
    role: "Cultural Secretary // Lead Navigator",
    division: "Secretariat",
    station: "Cultural Flagship Bridge",
    quote: "Harmonizing rhythms, drama, and artistic souls into an unforgettable odyssey.",
    avatarInitial: "SM",
  },
  {
    id: "arya-sajjan",
    code: "SEC-02",
    name: "Arya Sajjan",
    role: "Technical Secretary // Lead Helmsman",
    division: "Secretariat",
    station: "Technical Innovation Bridge",
    quote: "Setting the coordinates for high-stakes coding, robotics, and cyber frontiers.",
    avatarInitial: "AS",
  },
  {
    id: "miku",
    code: "LEAD-03",
    name: "Miku",
    role: "Event Management Lead // Quartermaster",
    division: "Operations",
    station: "Festival Logistics & Execution",
    quote: "Ensuring every cadet, contingent, and voyager navigates smooth waters.",
    avatarInitial: "M",
  },
  {
    id: "shaurya-mittal",
    code: "TECH-01",
    name: "Shaurya Mittal",
    role: "Lead Web Architect // Chief Navigator",
    division: "Technical",
    station: "Digital Fleet & Web Platform",
    quote: "Building digital vessels that embody the elegance of modern engineering.",
    avatarInitial: "SM",
  },
  {
    id: "advisory-faculty",
    code: "ADM-01",
    name: "Dr. Faculty Patron",
    role: "Faculty Advisor // Fleet Commodore",
    division: "Advisory",
    station: "Deanery of Student Affairs",
    quote: "Guiding the youth of IIIT Dharwad toward new intellectual and cultural shores.",
    avatarInitial: "FP",
  },
  {
    id: "lead-curator",
    code: "CULT-02",
    name: "Aanya Sen",
    role: "Head of Music & Pro-Nites",
    division: "Cultural",
    station: "The Carnival Island Amphitheatre",
    quote: "Curating soundscapes that echo long after the anchors are dropped.",
    avatarInitial: "AS",
  },
  {
    id: "lead-robotics",
    code: "TECH-02",
    name: "Rohan Deshmukh",
    role: "Robotics Arena Marshall",
    division: "Technical",
    station: "Pandemonium Combat Arena",
    quote: "Precision mechanics and raw competitive steel in the ring.",
    avatarInitial: "RD",
  },
  {
    id: "lead-pr",
    code: "OPS-02",
    name: "Pooja Hegde",
    role: "Public Relations & Contingents",
    division: "Operations",
    station: "External Port Communications",
    quote: "Welcoming voyagers from over a hundred technical institutes across India.",
    avatarInitial: "PH",
  },
]

export default function Team() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL")

  const filteredMembers =
    activeFilter === "ALL"
      ? crewMembers
      : crewMembers.filter((m) => m.division === activeFilter)

  return (
    <div className="flex min-h-screen flex-col bg-[#F4E8D1] text-[#062A3A] transition-colors duration-500 dark:bg-[#062A3A] dark:text-[#F4E8D1]">
      <TeamHero />

      {/* Main Manifest Section */}
      <main className="relative mx-auto w-full max-w-7xl flex-1 px-6 py-16 sm:px-8 md:px-12 lg:px-16">
        {/* Filter Navigation */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: "ALL", label: "ALL CREW & OFFICERS" },
            { id: "Secretariat", label: "SECRETARIAT" },
            { id: "Technical", label: "TECHNICAL & CODE" },
            { id: "Cultural", label: "CULTURAL FLEET" },
            { id: "Operations", label: "OPERATIONS & LOGISTICS" },
            { id: "Advisory", label: "ADVISORY" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`rounded-md border px-4 py-2 font-mono text-xs tracking-wider uppercase transition-all ${
                activeFilter === tab.id
                  ? "border-[#C85A2B] bg-[#C85A2B] text-[#F4E8D1] font-bold shadow-sm"
                  : "border-[#062A3A]/15 bg-[#EFE3C8]/60 text-[#062A3A]/80 hover:border-[#062A3A]/30 dark:border-[#F4E8D1]/15 dark:bg-[#041B26]/60 dark:text-[#F4E8D1]/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Crew Roster Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredMembers.map((member) => (
            <CrewCard key={member.id} member={member} />
          ))}
        </div>

        {/* Call to join the contingent or volunteer */}
        <div className="mt-20 rounded-2xl border-2 border-[#062A3A]/20 bg-[#EFE3C8] p-8 text-center sm:p-12 dark:border-[#F4E8D1]/20 dark:bg-[#041B26]">
          <h3
            className="text-2xl font-bold tracking-tight text-[#062A3A] sm:text-3xl dark:text-[#F4E8D1]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            JOIN THE VOYAGE VOLUNTEER FLEET
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-[#062A3A]/75 sm:text-sm dark:text-[#F4E8D1]/75">
            Student volunteers, event coordinators, and backstage navigators keep
            Avinya running day and night. Register your interest with the secretariat.
          </p>
          <a
            href="mailto:events@iiitdwd.ac.in?subject=Volunteer%20Enlistment"
            className="mt-6 inline-block rounded-lg border-2 border-[#062A3A] bg-[#062A3A] px-6 py-3 font-mono text-xs font-bold tracking-widest text-[#F4E8D1] uppercase transition-colors hover:bg-[#C85A2B] hover:border-[#C85A2B] dark:border-[#F4E8D1] dark:bg-[#F4E8D1] dark:text-[#062A3A]"
          >
            ENLIST AS VOLUNTEER →
          </a>
        </div>
      </main>

      <VoyageFooter />
    </div>
  )
}
