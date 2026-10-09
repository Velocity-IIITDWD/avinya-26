"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "@/components/expedition/gsap"
import { prefersReducedMotion } from "@/components/expedition/use-media-query"
import { EXPEDITION_ASSETS, ExplorerFigure } from "@/components/expedition"

const WAVE =
  "M0 30 Q60 10 120 30 T240 30 T360 30 T480 30 T600 30 T720 30 T840 30 T960 30 T1080 30 T1200 30 V60 H0Z"

/** Footer waterline: the expedition boat drifts toward the horizon as the visitor reaches the bottom. */
export function FooterVoyage() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const boatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const boat = boatRef.current
    if (!wrap || !boat || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.to(boat, {
        x: () => wrap.clientWidth * 0.42,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top bottom",
          end: "max",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      })
    }, wrap)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={wrapRef}
      className="relative h-40 w-full overflow-hidden sm:h-48"
      aria-hidden="true"
    >
      <Image
        src={EXPEDITION_ASSETS.island}
        alt=""
        width={1400}
        height={687}
        sizes="240px"
        className="absolute right-[4%] bottom-5 w-36 opacity-90 sm:w-56"
      />
      <div
        ref={boatRef}
        className="absolute bottom-6 left-[5%] z-10 w-20 sm:bottom-7 sm:w-28"
      >
        <div
          className="expedition-motion relative"
          style={{ animation: "expedition-bob 3.6s ease-in-out infinite" }}
        >
          <div className="-scale-x-100">
            <Image
              src={EXPEDITION_ASSETS.boat}
              alt=""
              width={900}
              height={832}
              sizes="112px"
              className="h-auto w-full"
            />
          </div>
          <ExplorerFigure className="absolute bottom-[14%] left-[30%] w-[13%]" />
        </div>
      </div>
      {[
        { fill: "#0B3A52", speed: "18s", bottom: "bottom-3", opacity: 0.9 },
        { fill: "#062A3A", speed: "11s", bottom: "-bottom-1", opacity: 1 },
      ].map((w, i) => (
        <svg
          key={i}
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className={`expedition-motion absolute left-0 h-10 w-[200%] ${w.bottom} ${i ? "z-20" : ""}`}
          style={{
            animation: `expedition-wave-x ${w.speed} linear infinite`,
            opacity: w.opacity,
          }}
        >
          <path d={WAVE} fill={w.fill} transform="scale(0.5 1)" />
          <path
            d={WAVE}
            fill={w.fill}
            transform="translate(600 0) scale(0.5 1)"
          />
        </svg>
      ))}
      <div className="absolute inset-x-0 bottom-0 z-20 h-3 bg-[#062A3A]" />
    </div>
  )
}

/** Two reserved, tall blue placeholder slots placed directly after the footer boat scene. */
export function FooterPlaceholders() {
  return (
    <div
      className="flex justify-center gap-6 bg-[#062A3A] py-8 sm:gap-10"
      aria-label="Reserved placeholder slots"
    >
      {[1, 2].map((n) => (
        <div
          key={n}
          role="img"
          aria-label={`Placeholder ${n}`}
          className="relative h-40 w-12 overflow-hidden rounded-full border border-sky-300/40 bg-gradient-to-b from-[#1E6FA8] via-[#134F7C] to-[#0B3352] shadow-[0_0_30px_rgba(56,152,220,0.25)] sm:h-52 sm:w-16"
        >
          <span className="absolute inset-1.5 rounded-full border border-sky-200/20" />
          <span
            className="expedition-motion absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-transparent via-sky-200/25 to-transparent"
            style={{
              animation: `expedition-shimmer 4s ease-in-out ${n * 1.3}s infinite`,
            }}
          />
          <span className="absolute inset-0 flex items-center justify-center font-mono text-[9px] tracking-[0.35em] text-sky-100/80 uppercase [writing-mode:vertical-rl]">
            Placeholder 0{n}
          </span>
        </div>
      ))}
    </div>
  )
}
