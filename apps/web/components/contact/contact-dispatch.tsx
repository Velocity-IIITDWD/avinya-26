"use client"

import React from "react"
import { ContactInfo } from "./contact-info"

export function ContactDispatch() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#F4E8D1] py-24 text-[#062A3A] transition-colors duration-500 sm:py-32 dark:bg-[#062A3A] dark:text-[#F4E8D1]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#C85A2B]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.3em] text-[#C85A2B] uppercase sm:text-xs">
              PORT TRANSMISSIONS
            </span>
            <span className="h-px w-8 bg-[#C85A2B]" />
          </div>

          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-[#062A3A] sm:text-4xl md:text-5xl dark:text-[#F4E8D1]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            CONTACT &amp; DISPATCH
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#062A3A]/75 sm:text-base dark:text-[#F4E8D1]/75">
            Contact the port authorities and festival secretariat directly for
            contingent registrations, sponsorships, and queries.
          </p>
        </div>

        {/* Contact Container */}
        <div className="mx-auto mt-14 max-w-3xl">
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}
