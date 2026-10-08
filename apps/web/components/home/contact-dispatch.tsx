"use client"

import React, { useState } from "react"
import Image from "next/image"
import { CompassRose, NauticalSail } from "../navbar/nautical-icons"

export function ContactDispatch() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

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
            Send dispatches to the bridge or contact the port authorities directly for
            contingent registrations, sponsorships, and queries.
          </p>
        </div>

        {/* Contact Split Container */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left: Official Bridge Leads & Telegraph Directory */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-[#062A3A]/20 bg-[#F8EFE0] p-8 shadow-lg lg:col-span-6 dark:border-[#F4E8D1]/20 dark:bg-[#041B26]">
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

              {/* Core Student Secretariats (From brochure page 5) */}
              <div className="mt-8 space-y-4">
                <span className="block font-mono text-[10px] font-bold tracking-[0.22em] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
                  KEY FESTIVAL OFFICERS &amp; LEADS:
                </span>

                {/* Sparsh Mittal */}
                <div className="flex items-center justify-between rounded-lg border border-[#062A3A]/10 bg-[#F4E8D1]/80 p-4 dark:border-[#F4E8D1]/10 dark:bg-[#062A3A]/80">
                  <div>
                    <h4
                      className="text-base font-bold text-[#062A3A] dark:text-[#F4E8D1]"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      Sparsh Mittal
                    </h4>
                    <span className="font-mono text-xs text-[#C85A2B] font-medium">
                      Cultural Secretary // Lead Navigator
                    </span>
                  </div>
                  <span className="rounded border border-[#062A3A]/20 px-2 py-1 font-mono text-[9px] uppercase tracking-wider">
                    CULTURAL
                  </span>
                </div>

                {/* Arya Sajjan */}
                <div className="flex items-center justify-between rounded-lg border border-[#062A3A]/10 bg-[#F4E8D1]/80 p-4 dark:border-[#F4E8D1]/10 dark:bg-[#062A3A]/80">
                  <div>
                    <h4
                      className="text-base font-bold text-[#062A3A] dark:text-[#F4E8D1]"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      Arya Sajjan
                    </h4>
                    <span className="font-mono text-xs text-[#C85A2B] font-medium">
                      Technical Secretary // Lead Helmsman
                    </span>
                  </div>
                  <span className="rounded border border-[#062A3A]/20 px-2 py-1 font-mono text-[9px] uppercase tracking-wider">
                    TECHNICAL
                  </span>
                </div>

                {/* Miku */}
                <div className="flex items-center justify-between rounded-lg border border-[#062A3A]/10 bg-[#F4E8D1]/80 p-4 dark:border-[#F4E8D1]/10 dark:bg-[#062A3A]/80">
                  <div>
                    <h4
                      className="text-base font-bold text-[#062A3A] dark:text-[#F4E8D1]"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      Miku
                    </h4>
                    <span className="font-mono text-xs text-[#C85A2B] font-medium">
                      Event Management Lead // Quartermaster
                    </span>
                  </div>
                  <span className="rounded border border-[#062A3A]/20 px-2 py-1 font-mono text-[9px] uppercase tracking-wider">
                    OPERATIONS
                  </span>
                </div>
              </div>
            </div>

            {/* Brass Spyglass Graphics from Page 5 */}
            <div className="mt-8 flex items-center gap-4 border-t border-[#062A3A]/15 pt-4 dark:border-[#F4E8D1]/15">
              <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded">
                <Image
                  src="/images/spyglass-telescope.png"
                  alt="Nautical Brass Spyglass"
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
              <div>
                <span className="block font-mono text-[10px] font-bold tracking-[0.2em] text-[#062A3A] uppercase dark:text-[#F4E8D1]">
                  COMMUNICATION FREQUENCY
                </span>
                <span className="block text-xs text-[#062A3A]/70 dark:text-[#F4E8D1]/70">
                  Transmissions logged daily 09:00 – 21:00 IST.
                </span>
              </div>
            </div>
          </div>

          {/* Right: Dispatch Transmission Form */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-[#062A3A]/20 bg-[#F8EFE0] p-8 shadow-lg lg:col-span-6 dark:border-[#F4E8D1]/20 dark:bg-[#041B26]">
            <div>
              <div className="flex items-center justify-between border-b border-[#062A3A]/15 pb-4 dark:border-[#F4E8D1]/15">
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#C85A2B] uppercase">
                  TRANSMIT A DISPATCH
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
                  TELEGRAPH RELAY
                </span>
              </div>

              {submitted ? (
                <div className="my-12 flex flex-col items-center rounded-xl border border-[#C85A2B] bg-[#C85A2B]/10 p-8 text-center">
                  <CompassRose size={36} className="text-[#C85A2B] animate-spin [animation-duration:10s]" />
                  <h4
                    className="mt-4 text-2xl font-bold text-[#062A3A] dark:text-[#F4E8D1]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    DISPATCH TRANSMITTED!
                  </h4>
                  <p className="mt-2 text-sm text-[#062A3A]/80 dark:text-[#F4E8D1]/80">
                    Your transmission has been logged into the Avinya port log. Our bridge
                    officers will reply via electronic mail shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded border border-[#062A3A] bg-[#062A3A] px-4 py-2 font-mono text-xs font-bold tracking-widest text-[#F4E8D1] uppercase dark:border-[#F4E8D1] dark:bg-[#F4E8D1] dark:text-[#062A3A]"
                  >
                    SEND ANOTHER DISPATCH
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block font-mono text-[10px] font-bold tracking-[0.2em] text-[#062A3A]/70 uppercase dark:text-[#F4E8D1]/70">
                      VOYAGER NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Captain A. Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 w-full rounded-md border border-[#062A3A]/20 bg-[#F4E8D1] px-4 py-3 text-sm text-[#062A3A] outline-none transition-all focus:border-[#C85A2B] focus:ring-1 focus:ring-[#C85A2B] dark:border-[#F4E8D1]/20 dark:bg-[#062A3A] dark:text-[#F4E8D1]"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block font-mono text-[10px] font-bold tracking-[0.2em] text-[#062A3A]/70 uppercase dark:text-[#F4E8D1]/70">
                        INSTITUTION / COLLEGE *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. IIIT Dharwad / NIT / IIT"
                        value={formData.college}
                        onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                        className="mt-1 w-full rounded-md border border-[#062A3A]/20 bg-[#F4E8D1] px-4 py-3 text-sm text-[#062A3A] outline-none transition-all focus:border-[#C85A2B] focus:ring-1 focus:ring-[#C85A2B] dark:border-[#F4E8D1]/20 dark:bg-[#062A3A] dark:text-[#F4E8D1]"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] font-bold tracking-[0.2em] text-[#062A3A]/70 uppercase dark:text-[#F4E8D1]/70">
                        ELECTRONIC MAIL *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="cadet@domain.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1 w-full rounded-md border border-[#062A3A]/20 bg-[#F4E8D1] px-4 py-3 text-sm text-[#062A3A] outline-none transition-all focus:border-[#C85A2B] focus:ring-1 focus:ring-[#C85A2B] dark:border-[#F4E8D1]/20 dark:bg-[#062A3A] dark:text-[#F4E8D1]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] font-bold tracking-[0.2em] text-[#062A3A]/70 uppercase dark:text-[#F4E8D1]/70">
                      DISPATCH MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Inquire regarding team contingent registration, rulebook clarifications, or festival queries..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1 w-full rounded-md border border-[#062A3A]/20 bg-[#F4E8D1] px-4 py-3 text-sm text-[#062A3A] outline-none transition-all focus:border-[#C85A2B] focus:ring-1 focus:ring-[#C85A2B] dark:border-[#F4E8D1]/20 dark:bg-[#062A3A] dark:text-[#F4E8D1]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg border-2 border-[#062A3A] bg-[#062A3A] py-3.5 font-mono text-xs font-bold tracking-[0.22em] text-[#F4E8D1] uppercase shadow-md transition-all duration-300 hover:bg-[#C85A2B] hover:border-[#C85A2B] dark:border-[#F4E8D1] dark:bg-[#F4E8D1] dark:text-[#062A3A] dark:hover:bg-[#C85A2B] dark:hover:text-[#F4E8D1] dark:hover:border-[#C85A2B]"
                  >
                    SEND TRANSMISSION TO BRIDGE →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
