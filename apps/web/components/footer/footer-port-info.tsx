"use client"

import React from "react"

export function FooterPortInfo() {
  return (
    <div className="md:col-span-4">
      <span className="block font-mono text-xs font-bold tracking-[0.25em] text-[#C85A2B] uppercase">
        PORT OF HOSTING
      </span>
      <div className="mt-4 space-y-2 text-xs leading-relaxed text-[#F4E8D1]/80">
        <p className="font-semibold text-[#F4E8D1]">
          Indian Institute of Information Technology Dharwad
        </p>
        <p className="text-[#F4E8D1]/70">
          Established 2015 by Ministry of Education, Government of India.
        </p>
        <p className="text-[#F4E8D1]/70">
          Itigatti Road, Near Sattur Colony, Dharwad, Karnataka — 580009
        </p>
        <div className="pt-2 font-mono text-xs text-[#C85A2B]">
          <a href="mailto:events@iiitdwd.ac.in" className="hover:underline">
            events@iiitdwd.ac.in
          </a>
        </div>
      </div>
    </div>
  )
}
