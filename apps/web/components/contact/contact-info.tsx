"use client"

import React from "react"
import { CompassRose } from "@/components/icons"

const SECRETARIATS = [
  {
    role: "CULTURAL SECRETARY",
    name: "Sparsh Mittal",
    contact: "+91 98765 43210",
  },
  {
    role: "TECHNICAL SECRETARY",
    name: "Arya Sajjan",
    contact: "+91 98765 43211",
  },
  {
    role: "EVENT MANAGEMENT LEAD",
    name: "Miku",
    contact: "+91 98765 43212",
  },
  {
    role: "LEAD WEB ARCHITECT",
    name: "Shaurya Mittal",
    contact: "+91 98765 43213",
  },
]

export function ContactInfo() {
  return (
    <div className="flex flex-col justify-between rounded-2xl border-2 border-[#062A3A]/20 bg-[#F8EFE0] p-8 shadow-lg dark:border-[#F4E8D1]/20 dark:bg-[#041B26]">
      <div>
        <div className="flex items-center justify-between border-b border-[#062A3A]/15 pb-4 dark:border-[#F4E8D1]/15">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#C85A2B] uppercase">
            HEADQUARTERS // IIIT DHARWAD
          </span>
          <span className="font-mono text-[10px] tracking-[0.16em] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
            LAT 15°29&apos;N
          </span>
        </div>

        {/* Official Email Dispatch */}
        <div className="mt-8 rounded-lg border border-[#C85A2B]/30 bg-[#C85A2B]/10 p-5">
          <span className="block font-mono text-[10px] font-bold tracking-[0.25em] text-[#C85A2B] uppercase">
            OFFICIAL FESTIVAL EMAIL
          </span>
          <a
            href="mailto:events@iiitdwd.ac.in"
            className="mt-1 block font-mono text-lg font-bold text-[#062A3A] transition-colors hover:text-[#C85A2B] sm:text-xl dark:text-[#F4E8D1]"
          >
            events@iiitdwd.ac.in
          </a>
          <span className="mt-1 block text-xs text-[#062A3A]/70 dark:text-[#F4E8D1]/70">
            For formal college participation, queries, press, and brand sponsorships.
          </span>
        </div>

        {/* Core Student Secretariats */}
        <div className="mt-8">
          <span className="block font-mono text-xs font-bold tracking-[0.2em] text-[#062A3A] uppercase dark:text-[#F4E8D1]">
            OFFICIAL FESTIVAL SECRETARIAT
          </span>

          <div className="mt-4 space-y-4">
            {SECRETARIATS.map((sec) => (
              <div
                key={sec.role}
                className="flex items-center justify-between border-b border-dashed border-[#062A3A]/15 pb-3 font-mono text-xs dark:border-[#F4E8D1]/15"
              >
                <div>
                  <span className="block text-[10px] text-[#C85A2B] font-bold tracking-wider uppercase">
                    {sec.role}
                  </span>
                  <span className="font-bold text-[#062A3A] dark:text-[#F4E8D1]">
                    {sec.name}
                  </span>
                </div>
                <a
                  href={`tel:${sec.contact.replace(/\s+/g, "")}`}
                  className="rounded border border-[#062A3A]/20 bg-[#EFE3C8] px-2.5 py-1 text-[11px] font-semibold text-[#062A3A] transition-colors hover:border-[#C85A2B] hover:text-[#C85A2B] dark:border-[#F4E8D1]/20 dark:bg-[#062A3A] dark:text-[#F4E8D1]"
                >
                  {sec.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Port Coordinates Note */}
      <div className="mt-8 flex items-center gap-2 border-t border-[#062A3A]/15 pt-4 font-mono text-[10px] tracking-[0.16em] text-[#062A3A]/60 uppercase dark:border-[#F4E8D1]/15 dark:text-[#F4E8D1]/60">
        <CompassRose size={14} className="text-[#C85A2B]" />
        <span>CAMPUS: ITIGATTI ROAD, NEAR SATTUR COLONY, DHARWAD — 580009</span>
      </div>
    </div>
  )
}
