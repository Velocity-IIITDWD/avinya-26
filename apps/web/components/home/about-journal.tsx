"use client"

import React from "react"
import Image from "next/image"
import { CompassRose, NauticalSail } from "../navbar/nautical-icons"

export function AboutJournal() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#EFE3C8] py-20 text-[#062A3A] transition-colors duration-500 sm:py-28 dark:bg-[#041B26] dark:text-[#F4E8D1]"
    >
      {/* Subtle Top & Bottom Nautical Rope/Divider Borders */}
      <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#C85A2B]/40 to-transparent" />
      <div className="absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#C85A2B]/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Section Pre-heading */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#C85A2B]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.3em] text-[#C85A2B] uppercase sm:text-xs">
              EXPEDITION LOGBOOK // ARCHIVES
            </span>
            <span className="h-px w-8 bg-[#C85A2B]" />
          </div>

          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-[#062A3A] sm:text-4xl md:text-5xl dark:text-[#F4E8D1]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            THE VOYAGE DISPATCHES
          </h2>
          <p className="mt-2 font-mono text-xs tracking-[0.2em] text-[#062A3A]/70 uppercase dark:text-[#F4E8D1]/70">
            OFFICIAL CHRONICLES OF IIIT DHARWAD &amp; THE FESTIVAL
          </p>
        </div>

        {/* Vintage Open Journal Book Spread */}
        <div className="relative mx-auto max-w-6xl rounded-2xl border-2 border-[#062A3A]/20 bg-[#F4E8D1] p-6 shadow-[0_25px_60px_rgba(6,42,58,0.12)] sm:p-10 md:p-12 dark:border-[#F4E8D1]/20 dark:bg-[#062A3A] dark:shadow-[0_25px_60px_rgba(4,27,38,0.5)]">
          {/* Subtle Center Crease / Book Spine on md+ screens */}
          <div className="pointer-events-none absolute top-8 bottom-8 left-1/2 hidden w-px -translate-x-1/2 bg-[#062A3A]/15 md:block dark:bg-[#F4E8D1]/15" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            {/* Left Page: About IIIT Dharwad */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Folio Header */}
                <div className="flex items-center justify-between border-b border-[#062A3A]/15 pb-3 font-mono text-[10px] tracking-[0.22em] text-[#062A3A]/70 uppercase dark:border-[#F4E8D1]/15 dark:text-[#F4E8D1]/70">
                  <span>LOGBOOK ENTRY 01</span>
                  <span>EST. 2015 // GOI</span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#C85A2B] uppercase">
                      ABOUT
                    </span>
                    <h3
                      className="text-2xl font-bold tracking-wide text-[#062A3A] sm:text-3xl dark:text-[#F4E8D1]"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      IIIT DHARWAD
                    </h3>
                  </div>
                  <NauticalSail size={28} className="text-[#062A3A] dark:text-[#F4E8D1]" />
                </div>

                {/* Editorial Body Text */}
                <p className="mt-6 text-sm leading-relaxed text-[#062A3A]/85 sm:text-base sm:leading-loose dark:text-[#F4E8D1]/85">
                  <span className="float-left mr-3 font-serif text-4xl font-bold leading-none text-[#C85A2B]">
                    I
                  </span>
                  IIT Dharwad, established in 2015 under the Ministry of Education
                  (GoI), is a premier technical institute focused on high-end IT and
                  interdisciplinary learning.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#062A3A]/85 sm:text-base sm:leading-loose dark:text-[#F4E8D1]/85">
                  With its modern 60-acre campus, industry-aligned curriculum, and
                  growing national presence, IIIT Dharwad stands as a premier hub for
                  talent, discovery, and cutting-edge research in North Karnataka.
                </p>
              </div>

              {/* Campus Lithograph Illustration Frame */}
              <div className="mt-8 overflow-hidden rounded-lg border border-[#062A3A]/20 bg-[#EFE3C8] dark:border-[#F4E8D1]/20 dark:bg-[#041B26]">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/campus-lithograph.webp"
                    alt="IIIT Dharwad Campus Architecture Lithograph"
                    fill
                    className="object-cover object-bottom"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
                <div className="flex items-center justify-between border-t border-[#062A3A]/15 bg-[#F4E8D1]/80 px-3 py-1.5 font-mono text-[9px] tracking-[0.2em] text-[#062A3A]/70 uppercase dark:border-[#F4E8D1]/15 dark:bg-[#062A3A]/80 dark:text-[#F4E8D1]/70">
                  <span>CAMPUS LAT 15.4856° N</span>
                  <span>SANCTUARY OF CODE</span>
                </div>
              </div>
            </div>

            {/* Right Page: About The Fest */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Folio Header */}
                <div className="flex items-center justify-between border-b border-[#062A3A]/15 pb-3 font-mono text-[10px] tracking-[0.22em] text-[#062A3A]/70 uppercase dark:border-[#F4E8D1]/15 dark:text-[#F4E8D1]/70">
                  <span>LOGBOOK ENTRY 02</span>
                  <span>ANNUAL CONVERGENCE</span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#C85A2B] uppercase">
                      ABOUT
                    </span>
                    <h3
                      className="text-2xl font-bold tracking-wide text-[#062A3A] sm:text-3xl dark:text-[#F4E8D1]"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      THE FEST // AVINYA
                    </h3>
                  </div>
                  <CompassRose size={26} className="text-[#C85A2B]" />
                </div>

                {/* Editorial Body Text */}
                <p className="mt-6 text-sm leading-relaxed text-[#062A3A]/85 sm:text-base sm:leading-loose dark:text-[#F4E8D1]/85">
                  <span className="float-left mr-3 font-serif text-4xl font-bold leading-none text-[#C85A2B]">
                    A
                  </span>
                  vinya, the annual techno-cultural fest of IIIT Dharwad, is a celebration
                  of the cultural soul of the student community — dance, music, drama,
                  and art — as well as thriving as a vibrant crucible of student innovation
                  through coding, robotics, and AI showcases.
                </p>

                {/* The Signature Theme Quotation */}
                <blockquote className="my-6 rounded-r-lg border-l-4 border-[#C85A2B] bg-[#C85A2B]/10 p-4 italic text-[#062A3A] dark:text-[#F4E8D1]">
                  <p
                    className="text-base font-medium leading-relaxed sm:text-lg"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    &ldquo;It’s a journey across three unique worlds, three experiences
                    and one unforgettable voyage, bringing people together through
                    music, art, technology, culture, food and endless experiences.&rdquo;
                  </p>
                </blockquote>
              </div>

              {/* Bottom Feature Graphic from Brochure Page 3 */}
              <div className="mt-4 overflow-hidden rounded-lg border border-[#062A3A]/20 bg-[#EFE3C8] dark:border-[#F4E8D1]/20 dark:bg-[#041B26]">
                <div className="relative aspect-[16/7] w-full">
                  <Image
                    src="/images/brochure-page-3.webp"
                    alt="Avinya Techno-Cultural Celebration & Ocean Art"
                    fill
                    className="object-cover object-bottom"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
                <div className="flex items-center justify-between border-t border-[#062A3A]/15 bg-[#F4E8D1]/80 px-3 py-1.5 font-mono text-[9px] tracking-[0.2em] text-[#062A3A]/70 uppercase dark:border-[#F4E8D1]/15 dark:bg-[#062A3A]/80 dark:text-[#F4E8D1]/70">
                  <span>EXPEDITION MANIFEST</span>
                  <span>CULTURE × TECHNOLOGY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
