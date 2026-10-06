"use client"

import React, { useState } from "react"
import Link from "next/link"
import { CompassRose, NauticalSail, NauticalAnchor, ShipWheel } from "@/components/navbar/nautical-icons"
import { VoyageFooter } from "@/components/footer/voyage-footer"

interface DetailedEvent {
  id: string
  title: string
  code: string
  world: "The Last Outpost" | "Pandemonium" | "The Carnival Island"
  category: "Technical" | "Cultural" | "Gaming" | "Flagship" | "Literary"
  date: string
  time: string
  venue: string
  bounty: string
  teamSize: string
  lead: string
  description: string
  rules: string[]
  status: "OPEN" | "FILLING FAST" | "WAITLIST"
}

const allEvents: DetailedEvent[] = [
  {
    id: "hack-odyssey",
    title: "CODE ODYSSEY // 24-HOUR HACKATHON",
    code: "EXP-01",
    world: "The Last Outpost",
    category: "Flagship",
    date: "OCT 30 – OCT 31",
    time: "11:00 AM START",
    venue: "Turing Computing Lab, IIIT Dharwad",
    bounty: "₹1,50,000",
    teamSize: "2 – 4 CADETS",
    lead: "Arya Sajjan (Tech Sec)",
    description: "The flagship hackathon of Avinya. 24 hours of endurance, problem-solving, and code crafting across AI Agents, Web3, Distributed Systems, and Open Innovation.",
    rules: [
      "All code must be written during the 24-hour hackathon window.",
      "Open-source libraries and APIs permitted with proper attribution.",
      "Final evaluations include live deployment demo & pitch to industry leaders.",
    ],
    status: "OPEN",
  },
  {
    id: "algo-storm",
    title: "ALGO-STORM // COMPETITIVE PROGRAMMING",
    code: "EXP-02",
    world: "The Last Outpost",
    category: "Technical",
    date: "OCTOBER 30",
    time: "02:30 PM – 05:30 PM",
    venue: "Computing Complex Alpha",
    bounty: "₹50,000",
    teamSize: "INDIVIDUAL",
    lead: "CodeCrafters Club",
    description: "High-speed algorithmic duel on ICPC-style problem sets. Test your mastery of graph algorithms, dynamic programming, combinatorics, and time complexity.",
    rules: [
      "Supported languages: C++, Java, Python3.",
      "Penalty time assessed for incorrect submissions.",
      "Plagiarism checks strictly enforced via automated AST comparison.",
    ],
    status: "OPEN",
  },
  {
    id: "cyber-ctf",
    title: "NAUTICAL CYPHER // CAPTURE THE FLAG",
    code: "EXP-03",
    world: "The Last Outpost",
    category: "Technical",
    date: "OCTOBER 30",
    time: "04:00 PM – 08:00 PM",
    venue: "Cyber Security Lab",
    bounty: "₹40,000",
    teamSize: "1 – 3 CADETS",
    lead: "NullPointer Infosec",
    description: "Jeopardy-style cybersecurity gauntlet. Crack cryptography challenges, reverse engineer binaries, audit web vulnerabilities, and decipher forensic memory dumps.",
    rules: [
      "Attacking competition infrastructure yields immediate disqualification.",
      "Dynamic scoring: flag points decrease as more teams solve them.",
      "Flag sharing strictly forbidden.",
    ],
    status: "OPEN",
  },
  {
    id: "robowars",
    title: "IRONCLAD ROBO-WARS // 15KG & 30KG",
    code: "EXP-04",
    world: "Pandemonium",
    category: "Technical",
    date: "OCTOBER 31",
    time: "10:00 AM – 04:00 PM",
    venue: "The Steel Arena",
    bounty: "₹1,00,000",
    teamSize: "2 – 5 CADETS",
    lead: "Robotics Society",
    description: "The arena of sparks and steel. Custom combat robots battle inside a polycarbonate-shielded cage. Drum spinners, wedge bots, and pneumatic flippers clash for dominance.",
    rules: [
      "Weight classes strictly inspected before pit entry (15kg & 30kg).",
      "No flammable liquids, nets, or jamming equipment permitted.",
      "Matches scored on aggression, damage, and control.",
    ],
    status: "FILLING FAST",
  },
  {
    id: "neon-drift",
    title: "NEON DRIFT // ESPORTS (VALORANT)",
    code: "EXP-05",
    world: "Pandemonium",
    category: "Gaming",
    date: "OCTOBER 31",
    time: "01:00 PM – 07:00 PM",
    venue: "LAN Gaming Center",
    bounty: "₹60,000",
    teamSize: "5 + 1 SUB",
    lead: "Respawn Gaming Guild",
    description: "5v5 tactical shooter tournament on 240Hz tournament rigs. Knockout bracket culminating in a Best-of-3 grand finals with live caster commentary.",
    rules: [
      "Tournament format: Single elimination BO1, Finals BO3.",
      "All players must register valid Riot IDs prior to tournament check-in.",
      "Tournament-provided peripherals available or bring your own.",
    ],
    status: "OPEN",
  },
  {
    id: "drone-gauntlet",
    title: "AERIAL GAUNTLET // FPV DRONE RACE",
    code: "EXP-06",
    world: "Pandemonium",
    category: "Technical",
    date: "OCTOBER 31",
    time: "03:00 PM – 06:00 PM",
    venue: "Main Ground Obstacle Ring",
    bounty: "₹45,000",
    teamSize: "1 – 2 PILOTS",
    lead: "AeroDrones Wing",
    description: "High-speed FPV quadcopter race through illuminated neon rings, sharp hairpin turns, and elevation chicanes. Time trial qualifying into head-to-head heats.",
    rules: [
      "Standard 5-inch 4S/6S FPV drones permitted.",
      "Failsafe cutoff verification mandatory during technical scrutineering.",
      "Pilots must hold clean video transmitter frequencies assigned by marshals.",
    ],
    status: "OPEN",
  },
  {
    id: "battle-bands",
    title: "BATTLE OF THE BANDS // SOUNDS OF SIKANDAR",
    code: "EXP-07",
    world: "The Carnival Island",
    category: "Cultural",
    date: "NOVEMBER 01",
    time: "02:30 PM – 06:30 PM",
    venue: "Main Open Air Theatre",
    bounty: "₹75,000",
    teamSize: "3 – 8 MUSICIANS",
    lead: "Sparsh Mittal (Cultural Sec)",
    description: "The grand showdown of rock, fusion, metal, and acoustic college bands from across India. Bring the arena to its feet with authentic compositions and covers.",
    rules: [
      "Performance time: 20 minutes including sound check and setup.",
      "At least 1 original composition required in the setlist.",
      "Judged on musicality, stage presence, crowd engagement, and arrangement.",
    ],
    status: "OPEN",
  },
  {
    id: "choreonite",
    title: "HIGH TIDE CHOREO-NIGHT // DANCE CREWS",
    code: "EXP-08",
    world: "The Carnival Island",
    category: "Cultural",
    date: "NOVEMBER 01",
    time: "05:00 PM – 08:00 PM",
    venue: "Main Festival Stage",
    bounty: "₹80,000",
    teamSize: "8 – 25 DANCERS",
    lead: "Rhythm & Beats Crew",
    description: "Mega group dance competition. Synchronized power, storytelling, acrobatic lifts, and seamless maritime thematic integration.",
    rules: [
      "Slot duration: 8 to 12 minutes.",
      "Props permitted but must be cleared within 60 seconds.",
      "Judging criteria: choreography, sync, costuming, energy, and expression.",
    ],
    status: "FILLING FAST",
  },
  {
    id: "street-theatre",
    title: "NUKKAD NATAK // STREET PLAY ODYSSEY",
    code: "EXP-09",
    world: "The Carnival Island",
    category: "Literary",
    date: "NOVEMBER 01",
    time: "11:00 AM – 02:00 PM",
    venue: "Central Campus Circle",
    bounty: "₹35,000",
    teamSize: "10 – 20 ACTORS",
    lead: "Dramatics Club",
    description: "Vibrant acoustic street theatre addressing powerful socio-cultural narratives, environmental horizons, and the voyage of human resilience.",
    rules: [
      "Time limit: 15 minutes strictly monitored with warning bell.",
      "Only acoustic instruments (Dholak, Djembe, Harmonium, etc.) allowed.",
      "Scripts must be original or appropriately adapted.",
    ],
    status: "OPEN",
  },
]

export default function Events() {
  const [selectedWorld, setSelectedWorld] = useState<string>("ALL")
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [activeModalEvent, setActiveModalEvent] = useState<DetailedEvent | null>(null)

  const filtered = allEvents.filter((evt) => {
    const matchesWorld = selectedWorld === "ALL" || evt.world === selectedWorld
    const matchesCategory = selectedCategory === "ALL" || evt.category === selectedCategory
    const matchesQuery =
      searchQuery === "" ||
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.world.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesWorld && matchesCategory && matchesQuery
  })

  return (
    <div className="flex min-h-screen flex-col bg-[#F4E8D1] text-[#062A3A] transition-colors duration-500 dark:bg-[#062A3A] dark:text-[#F4E8D1]">
      {/* Header Banner */}
      <section className="relative w-full overflow-hidden border-b border-[#062A3A]/15 bg-[#EFE3C8] pt-28 pb-16 transition-colors sm:pt-32 sm:pb-20 dark:border-[#F4E8D1]/15 dark:bg-[#041B26]">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2">
              <span className="rounded border border-[#C85A2B]/40 bg-[#C85A2B]/10 px-3 py-1 font-mono text-[10px] font-bold tracking-[0.22em] text-[#C85A2B] uppercase sm:text-xs">
                OFFICIAL EXPEDITION CATALOG
              </span>
              <span className="font-mono text-xs tracking-[0.18em] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
                OCT 30 – NOV 01, 2026
              </span>
            </div>

            <h1
              className="mt-3 text-4xl font-black tracking-tight text-[#062A3A] sm:text-5xl md:text-6xl dark:text-[#F4E8D1]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              EXPEDITION MANIFEST
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#062A3A]/80 sm:text-base dark:text-[#F4E8D1]/80">
              Discover all thirty technical, cultural, and competitive trials across the three
              archipelago worlds. Claim permits for your contingent and earn festival honors.
            </p>

            {/* Search Bar */}
            <div className="mt-8 w-full max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search challenges, keywords, or worlds..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border-2 border-[#062A3A]/20 bg-[#F4E8D1] px-4 py-3 pl-11 text-xs font-mono uppercase tracking-wider text-[#062A3A] placeholder:text-[#062A3A]/50 outline-none focus:border-[#C85A2B] dark:border-[#F4E8D1]/20 dark:bg-[#062A3A] dark:text-[#F4E8D1] dark:placeholder:text-[#F4E8D1]/50"
                />
                <CompassRose
                  size={18}
                  className="absolute top-1/2 left-3.5 -translate-y-1/2 text-[#C85A2B]"
                />
              </div>
            </div>

            {/* Filter Tabs by Destination */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {[
                { id: "ALL", label: "ALL DESTINATIONS" },
                { id: "The Last Outpost", label: "THE LAST OUTPOST (TECH)" },
                { id: "Pandemonium", label: "PANDEMONIUM (BATTLES & ESPORTS)" },
                { id: "The Carnival Island", label: "THE CARNIVAL ISLAND (CULTURE)" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedWorld(tab.id)}
                  className={`rounded-md border px-3.5 py-2 font-mono text-[10px] tracking-[0.16em] uppercase transition-all sm:text-[11px] ${
                    selectedWorld === tab.id
                      ? "border-[#C85A2B] bg-[#C85A2B] text-[#F4E8D1] font-bold shadow-sm"
                      : "border-[#062A3A]/15 bg-[#F4E8D1]/70 text-[#062A3A]/80 hover:border-[#062A3A]/30 dark:border-[#F4E8D1]/15 dark:bg-[#062A3A]/70 dark:text-[#F4E8D1]/80"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Events Grid */}
      <section className="relative mx-auto w-full max-w-7xl flex-1 px-6 py-16 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-6 flex items-center justify-between font-mono text-xs text-[#062A3A]/70 uppercase dark:text-[#F4E8D1]/70">
          <span>SHOWING {filtered.length} EXPEDITIONS</span>
          <span>SELECT PERMIT TO VIEW RULEBOOK</span>
        </div>

        {filtered.length === 0 ? (
          <div className="my-16 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#062A3A]/20 p-12 text-center dark:border-[#F4E8D1]/20">
            <ShipWheel size={36} className="text-[#C85A2B] animate-spin [animation-duration:12s]" />
            <h3
              className="mt-4 text-xl font-bold"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              NO EXPEDITIONS MATCHED YOUR SEARCH
            </h3>
            <p className="mt-2 text-xs font-mono text-[#062A3A]/70 dark:text-[#F4E8D1]/70">
              Try adjusting your destination filters or search query.
            </p>
            <button
              onClick={() => {
                setSelectedWorld("ALL")
                setSelectedCategory("ALL")
                setSearchQuery("")
              }}
              className="mt-4 rounded bg-[#062A3A] px-4 py-2 font-mono text-xs text-[#F4E8D1] uppercase dark:bg-[#F4E8D1] dark:text-[#062A3A]"
            >
              RESET ALL FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((event) => (
              <div
                key={event.id}
                id={event.id}
                className="group relative flex flex-col justify-between rounded-xl border-2 border-[#062A3A]/20 bg-[#F8EFE0] p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#C85A2B] hover:shadow-xl dark:border-[#F4E8D1]/20 dark:bg-[#041B26]"
              >
                {/* Header info */}
                <div>
                  <div className="flex items-center justify-between border-b border-dashed border-[#062A3A]/15 pb-3 dark:border-[#F4E8D1]/15">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-[#062A3A] px-2 py-0.5 font-mono text-[9px] font-bold text-[#F4E8D1] dark:bg-[#F4E8D1] dark:text-[#062A3A]">
                        {event.code}
                      </span>
                      <span className="font-mono text-[10px] font-semibold text-[#C85A2B] uppercase">
                        {event.category}
                      </span>
                    </div>

                    <span className="font-mono text-[9px] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
                      {event.date}
                    </span>
                  </div>

                  {/* Destination Tag */}
                  <div className="mt-3 flex items-center gap-1.5 font-mono text-[9px] tracking-wider text-[#062A3A]/70 uppercase dark:text-[#F4E8D1]/70">
                    <NauticalSail size={12} className="text-[#C85A2B]" />
                    <span>{event.world}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="mt-2 text-xl font-bold tracking-tight text-[#062A3A] dark:text-[#F4E8D1]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-xs leading-relaxed text-[#062A3A]/80 dark:text-[#F4E8D1]/80">
                    {event.description}
                  </p>
                </div>

                {/* Footer specs */}
                <div className="mt-6 border-t border-dashed border-[#062A3A]/15 pt-4 dark:border-[#F4E8D1]/15">
                  <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                    <div>
                      <span className="block text-[8px] tracking-wider text-[#062A3A]/50 uppercase dark:text-[#F4E8D1]/50">
                        BOUNTY POOL
                      </span>
                      <span className="font-bold text-[#C85A2B] text-xs">
                        {event.bounty}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[8px] tracking-wider text-[#062A3A]/50 uppercase dark:text-[#F4E8D1]/50">
                        CREW SIZE
                      </span>
                      <span className="font-semibold text-xs">
                        {event.teamSize}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalEvent(event)}
                      className="font-mono text-[10px] tracking-wider text-[#C85A2B] underline hover:text-[#a84920]"
                    >
                      VIEW RULEBOOK →
                    </button>

                    <button
                      onClick={() => setActiveModalEvent(event)}
                      className="rounded border border-[#062A3A] bg-[#062A3A] px-3 py-1 font-mono text-[9px] font-bold tracking-widest text-[#F4E8D1] uppercase transition-colors hover:bg-transparent hover:text-[#062A3A] dark:border-[#F4E8D1] dark:bg-[#F4E8D1] dark:text-[#062A3A] dark:hover:bg-transparent dark:hover:text-[#F4E8D1]"
                    >
                      REGISTER
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Rulebook & Registration Modal */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border-2 border-[#C85A2B] bg-[#F4E8D1] p-6 shadow-2xl sm:p-8 dark:bg-[#062A3A]">
            <button
              onClick={() => setActiveModalEvent(null)}
              className="absolute top-4 right-4 rounded-full border border-[#062A3A]/20 p-2 font-mono text-xs hover:bg-[#C85A2B] hover:text-[#F4E8D1]"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 border-b border-[#062A3A]/15 pb-3 dark:border-[#F4E8D1]/15">
              <span className="rounded bg-[#C85A2B] px-2 py-0.5 font-mono text-[9px] font-bold text-[#F4E8D1]">
                {activeModalEvent.code}
              </span>
              <span className="font-mono text-xs font-semibold text-[#062A3A] uppercase dark:text-[#F4E8D1]">
                {activeModalEvent.world}
              </span>
            </div>

            <h3
              className="mt-4 text-2xl font-bold tracking-tight text-[#062A3A] sm:text-3xl dark:text-[#F4E8D1]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {activeModalEvent.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#062A3A]/80 dark:text-[#F4E8D1]/80">
              {activeModalEvent.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 rounded-lg border border-[#062A3A]/15 bg-[#EFE3C8] p-4 font-mono text-xs dark:border-[#F4E8D1]/15 dark:bg-[#041B26]">
              <div>
                <span className="block text-[9px] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
                  DATE &amp; TIME
                </span>
                <span className="font-bold">{activeModalEvent.date} // {activeModalEvent.time}</span>
              </div>
              <div>
                <span className="block text-[9px] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
                  VENUE
                </span>
                <span className="font-bold">{activeModalEvent.venue}</span>
              </div>
              <div>
                <span className="block text-[9px] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
                  BOUNTY HONORS
                </span>
                <span className="font-bold text-[#C85A2B]">{activeModalEvent.bounty}</span>
              </div>
              <div>
                <span className="block text-[9px] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
                  COORDINATOR
                </span>
                <span className="font-bold">{activeModalEvent.lead}</span>
              </div>
            </div>

            {/* Official Rules */}
            <div className="mt-6">
              <span className="font-mono text-xs font-bold tracking-wider text-[#C85A2B] uppercase">
                EXPEDITION PROTOCOL &amp; RULES:
              </span>
              <ul className="mt-2 space-y-2 text-xs leading-relaxed text-[#062A3A]/85 dark:text-[#F4E8D1]/85">
                {activeModalEvent.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C85A2B] font-bold">⚓</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Register action */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:events@iiitdwd.ac.in?subject=Registration%20for%20"
                className="flex-1 rounded-lg border-2 border-[#062A3A] bg-[#062A3A] py-3 text-center font-mono text-xs font-bold tracking-widest text-[#F4E8D1] uppercase transition-colors hover:bg-[#C85A2B] hover:border-[#C85A2B] dark:border-[#F4E8D1] dark:bg-[#F4E8D1] dark:text-[#062A3A]"
              >
                DISPATCH REGISTRATION VIA EMAIL →
              </a>
              <button
                onClick={() => setActiveModalEvent(null)}
                className="rounded-lg border border-[#062A3A]/20 px-5 py-3 font-mono text-xs uppercase"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <VoyageFooter />
    </div>
  )
}
