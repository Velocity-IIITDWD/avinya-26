"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "./gsap"
import { sponsorSlots, type Sponsor } from "./expedition-data"
import { prefersReducedMotion } from "./use-media-query"

export function SponsorsHarbor() {
  const sectionRef = useRef<HTMLElement>(null)
  const title = sponsorSlots.filter((s) => s.tier === "title")
  const major = sponsorSlots.filter((s) => s.tier === "major")
  const community = sponsorSlots.filter((s) => s.tier === "community")

  useEffect(() => {
    const section = sectionRef.current
    if (!section || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.from(".sponsor-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: section, start: "top 75%", once: true },
      })
      gsap.utils
        .toArray<HTMLElement>(".sponsor-row", section)
        .forEach((row, i) => {
          gsap.fromTo(
            row,
            { xPercent: i % 2 ? -4 : 4 },
            {
              xPercent: i % 2 ? 4 : -4,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          )
        })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="sponsors"
      className="relative w-full overflow-hidden bg-[#041B26] py-24 text-[#F4E8D1] sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, #C85A2B 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 md:px-12">
        <p className="sponsor-reveal font-mono text-[11px] font-semibold tracking-[0.35em] text-[#C85A2B] uppercase">
          Patrons of the voyage
        </p>
        <h2 className="sponsor-reveal mt-3 text-4xl font-black tracking-tight sm:text-6xl">
          SPONSORS
        </h2>
        <p className="sponsor-reveal mt-4 max-w-xl text-sm leading-relaxed text-[#F4E8D1]/70">
          Sponsor slots for Avinya 2026 are open. The names below are
          placeholders — no partnerships are confirmed yet.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {title.map((s) => (
            <SponsorCard
              key={s.name}
              sponsor={s}
              className="md:col-span-3 md:h-48"
            />
          ))}
          {major.map((s) => (
            <SponsorCard key={s.name} sponsor={s} className="h-36" />
          ))}
        </div>
      </div>

      <div
        className="relative mt-14 space-y-4"
        aria-label="Community partner placeholders"
      >
        {[community, [...community].reverse()].map((row, r) => (
          <div key={r} className="sponsor-row">
            <div
              className="expedition-motion flex w-max gap-4 hover:[animation-play-state:paused]"
              style={{
                animation: `expedition-marquee ${36 + r * 8}s linear infinite ${r ? "reverse" : ""}`,
              }}
            >
              {[...row, ...row].map((s, i) => (
                <span
                  key={`${s.name}-${i}`}
                  aria-hidden={i >= row.length}
                  className="flex h-16 min-w-56 items-center justify-center rounded-full border border-dashed border-[#F4E8D1]/25 px-8 font-mono text-[11px] tracking-[0.25em] text-[#F4E8D1]/60 uppercase transition-colors hover:border-[#C85A2B] hover:text-[#F4E8D1]"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mx-auto mt-14 max-w-7xl px-5 sm:px-8 md:px-12">
        <a
          href="#contact"
          className="sponsor-reveal inline-flex items-center gap-3 rounded-md border-2 border-[#C85A2B] px-6 py-3.5 font-mono text-xs font-bold tracking-[0.2em] text-[#F4E8D1] uppercase transition-colors hover:bg-[#C85A2B]"
        >
          Partner with Avinya →
        </a>
      </div>
    </section>
  )
}

function SponsorCard({
  sponsor,
  className = "",
}: {
  sponsor: Sponsor
  className?: string
}) {
  const isTitle = sponsor.tier === "title"
  return (
    <div
      className={`sponsor-reveal group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#F4E8D1]/15 bg-[#062A3A]/60 transition-[border-color,box-shadow] duration-500 hover:border-[#C85A2B] hover:shadow-[0_0_40px_rgba(200,90,43,0.35)] ${className}`}
    >
      <span className="absolute top-3 left-4 font-mono text-[9px] tracking-[0.3em] text-[#C85A2B] uppercase">
        {isTitle ? "Title tier" : "Major tier"}
      </span>
      <span
        className={`font-black tracking-tight text-[#F4E8D1]/85 ${isTitle ? "text-3xl sm:text-5xl" : "text-xl"}`}
      >
        {sponsor.name}
      </span>
      <span className="mt-2 font-mono text-[10px] tracking-[0.25em] text-[#F4E8D1]/45 uppercase">
        Slot available
      </span>
    </div>
  )
}
