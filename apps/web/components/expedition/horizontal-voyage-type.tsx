"use client"

import React, { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "./gsap"
import { CINEMATIC_QUERY, useMediaQuery } from "./use-media-query"
import { horizontalPhrases } from "./expedition-data"

export function HorizontalVoyageType() {
  const cinematic = useMediaQuery(CINEMATIC_QUERY)
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".hv-word", section)
      if (!cinematic) {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
          return
        words.forEach((w) =>
          gsap.from(w, {
            yPercent: 100,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: w, start: "top 92%", once: true },
          })
        )
        return
      }

      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth)
      const scroller = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance() * 0.6}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      })

      words.forEach((w, i) =>
        gsap.from(w, {
          yPercent: 110,
          rotate: i % 2 ? -7 : 7,
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: w,
            containerAnimation: scroller,
            start: "left 95%",
            end: "left 70%",
            scrub: true,
          },
        })
      )
      ScrollTrigger.sort()
      ScrollTrigger.refresh()
    }, section)

    return () => ctx.revert()
  }, [cinematic])

  return (
    <section
      ref={sectionRef}
      aria-label={horizontalPhrases.join(" ")}
      className={`relative w-full overflow-hidden bg-[#F4E8D1] text-[#062A3A] ${
        cinematic ? "flex h-screen items-center" : "py-20"
      }`}
    >
      {cinematic && (
        <svg
          className="pointer-events-none absolute inset-x-0 top-[74%] h-10 w-full"
          viewBox="0 0 1000 40"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 20 Q125 0 250 20 T500 20 T750 20 T1000 20"
            fill="none"
            stroke="#C85A2B"
            strokeWidth="2"
            strokeDasharray="2 10"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}
      <div
        ref={trackRef}
        aria-hidden="true"
        className={
          cinematic
            ? "flex items-center gap-[10vw] pr-[12vw] pl-[8vw] whitespace-nowrap will-change-transform"
            : "flex flex-col gap-8 px-5 sm:px-8"
        }
      >
        {horizontalPhrases.map((phrase, p) => (
          <p
            key={phrase}
            className={`leading-[0.9] font-black tracking-tight ${
              cinematic
                ? "text-[clamp(4rem,9vw,9rem)]"
                : "text-[12vw] sm:text-[9vw]"
            } ${p % 2 ? "text-[#C85A2B]" : ""}`}
          >
            {phrase.split(" ").map((word, i) => (
              <span
                key={i}
                className="mr-[0.25em] inline-block overflow-hidden pb-[0.08em] align-bottom"
              >
                <span className="hv-word inline-block">{word}</span>
              </span>
            ))}
          </p>
        ))}
      </div>
    </section>
  )
}
