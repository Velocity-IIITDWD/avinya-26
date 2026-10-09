"use client"

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { gsap, ScrollTrigger } from "./gsap"
import { CINEMATIC_QUERY, useMediaQuery } from "./use-media-query"
import {
  EXPEDITION_ASSETS,
  expeditionDays,
  type ExpeditionDay,
} from "./expedition-data"
import { EventGallery } from "./event-gallery"
import { ExplorerFigure } from "./explorer-figure"

type Point = { x: number; y: number }

/** Index of each island marker within the route's point list. */
const MARKER_POINT_INDEX = [1, 3, 5] as const

function buildRoute(w: number, h: number) {
  const pts: Point[] = [
    { x: 0.03 * w, y: 0.72 * h },
    { x: 0.2 * w, y: 0.42 * h },
    { x: 0.35 * w, y: 0.74 * h },
    { x: 0.5 * w, y: 0.4 * h },
    { x: 0.66 * w, y: 0.74 * h },
    { x: 0.82 * w, y: 0.42 * h },
    { x: 0.97 * w, y: 0.66 * h },
  ]
  // Catmull-Rom -> cubic bezier segments
  const segs: string[] = []
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i]!
    const p1 = pts[i]!
    const p2 = pts[i + 1]!
    const p3 = pts[i + 2] ?? p2
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 }
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 }
    segs.push(
      `C${c1.x.toFixed(1)},${c1.y.toFixed(1)} ${c2.x.toFixed(1)},${c2.y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`
    )
  }
  const start = `M${pts[0]!.x.toFixed(1)},${pts[0]!.y.toFixed(1)}`
  return {
    d: `${start} ${segs.join(" ")}`,
    prefix: (pointIndex: number) =>
      `${start} ${segs.slice(0, pointIndex).join(" ")}`,
    markers: MARKER_POINT_INDEX.map((i) => pts[i]!),
  }
}

const DUST = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${20 + ((i * 53) % 70)}%`,
  delay: `${(i * 0.7) % 6}s`,
  duration: `${6 + (i % 5)}s`,
}))

export function IslandJourney() {
  const cinematic = useMediaQuery(CINEMATIC_QUERY)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [activeDay, setActiveDay] = useState(0)

  const stageRef = useRef<HTMLDivElement>(null)
  const routeWrapRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const travelRef = useRef<SVGPathElement>(null)
  const measureRef = useRef<SVGPathElement>(null)
  const boatRef = useRef<HTMLDivElement>(null)
  const markersRef = useRef<(HTMLDivElement | null)[]>([])
  const panelsRef = useRef<(HTMLDivElement | null)[]>([])
  const parallaxRef = useRef<(HTMLDivElement | null)[]>([])
  const bgRef = useRef<(HTMLDivElement | null)[]>([])
  const contentRef = useRef<(HTMLDivElement | null)[]>([])
  const settersRef = useRef<((i: number) => void)[]>([])

  const registerSetters = useMemo(
    () =>
      expeditionDays.map(
        (_, d) => (fn: (i: number) => void) => (settersRef.current[d] = fn)
      ),
    []
  )

  const route = useMemo(
    () => (size.w ? buildRoute(size.w, size.h) : null),
    [size]
  )

  // Measure the route band; ignore small height jitter (mobile URL bar).
  useEffect(() => {
    const el = routeWrapRef.current
    if (!cinematic || !el) return
    let t: ReturnType<typeof setTimeout> | undefined
    const ro = new ResizeObserver(([entry]) => {
      if (!entry) return
      clearTimeout(t)
      t = setTimeout(() => {
        const w = Math.round(entry.contentRect.width)
        const h = Math.round(entry.contentRect.height)
        setSize((s) =>
          Math.abs(s.w - w) > 1 || Math.abs(s.h - h) > 24 ? { w, h } : s
        )
      }, 120)
    })
    ro.observe(el)
    return () => {
      clearTimeout(t)
      ro.disconnect()
    }
  }, [cinematic])

  const scrollToDay = useCallback((d: number) => {
    const st = ScrollTrigger.getById("island-journey")
    if (!st) return
    const anchors = [0.14, 0.52, 0.86]
    window.scrollTo({
      top: st.start + (st.end - st.start) * anchors[d]!,
      behavior: "smooth",
    })
  }, [])

  useEffect(() => {
    if (!cinematic || !route || !stageRef.current) return
    const stage = stageRef.current

    const ctx = gsap.context(() => {
      const path = pathRef.current!
      const travel = travelRef.current!
      const measure = measureRef.current!
      const total = path.getTotalLength()
      const fractions = MARKER_POINT_INDEX.map((i) => {
        measure.setAttribute("d", route.prefix(i))
        return measure.getTotalLength() / total
      })

      gsap.set(travel, { strokeDasharray: total, strokeDashoffset: total })
      const boatTween = gsap.to(boatRef.current, {
        motionPath: {
          path,
          align: path,
          alignOrigin: [0.5, 0.86],
          autoRotate: true,
        },
        duration: 1,
        ease: "none",
        paused: true,
        onUpdate() {
          gsap.set(travel, {
            strokeDashoffset: total * (1 - boatTween.progress()),
          })
        },
      })
      boatTween.progress(0.0001)

      const panels = panelsRef.current
      const bgs = bgRef.current
      const contents = contentRef.current
      const markers = markersRef.current

      gsap.set(panels[0]!, { clipPath: "inset(0% 0% 0% 0%)" })
      gsap.set(panels.slice(1), { clipPath: "inset(0% 100% 0% 0%)" })
      gsap.set(bgs.slice(1), { scale: 1.18 })
      gsap.set(contents.slice(1), { autoAlpha: 0, y: 40 })
      gsap.set(markers, { opacity: 0.45, scale: 0.85 })

      const HOLD = 2
      const TRAVEL = 1.5
      const holdStarts: number[] = []
      const lastIndex = expeditionDays.map(() => -1)

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          id: "island-journey",
          trigger: stage,
          start: "top top",
          end: () => `+=${window.innerHeight * 6}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 2,
          onUpdate: () => {
            const t = tl.time()
            const d =
              t >= (holdStarts[2] ?? Infinity) - TRAVEL / 2
                ? 2
                : t >= (holdStarts[1] ?? Infinity) - TRAVEL / 2
                  ? 1
                  : 0
            setActiveDay((cur) => (cur === d ? cur : d))
          },
        },
      })

      const arrive = (d: number, at: number) => {
        tl.to(
          markers[d]!,
          { opacity: 1, scale: 1.25, duration: 0.25, ease: "power2.out" },
          at
        )
        tl.to(markers[d]!, { scale: 1, duration: 0.25 }, at + 0.25)
      }

      let t = 0
      tl.to(boatTween, { progress: fractions[0]!, duration: 0.6 }, t)
      t += 0.6
      expeditionDays.forEach((day, d) => {
        if (d > 0) {
          tl.to(contents[d - 1]!, { autoAlpha: 0, y: -30, duration: 0.5 }, t)
          tl.to(boatTween, { progress: fractions[d]!, duration: TRAVEL }, t)
          tl.to(
            panels[d]!,
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: TRAVEL * 0.85,
              ease: "power1.inOut",
            },
            t + 0.15
          )
          tl.to(bgs[d - 1]!, { scale: 1.08, duration: TRAVEL }, t + 0.15)
          tl.to(bgs[d]!, { scale: 1, duration: TRAVEL }, t + 0.15)
          tl.to(
            contents[d]!,
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
            t + TRAVEL - 0.4
          )
          t += TRAVEL
        }
        arrive(d, t)
        holdStarts[d] = t
        const g = { p: 0 }
        const count = day.events.length
        tl.to(
          g,
          {
            p: 1,
            duration: HOLD,
            onUpdate: () => {
              const i = Math.round(g.p * (count - 1))
              if (i !== lastIndex[d]) {
                lastIndex[d] = i
                settersRef.current[d]?.(i)
              }
            },
          },
          t
        )
        t += HOLD
      })
      tl.to(boatTween, { progress: 1, duration: 0.6 }, t)

      // Cursor parallax on the scene backgrounds.
      const movers = parallaxRef.current.map((el) => ({
        x: gsap.quickTo(el, "x", { duration: 1.2, ease: "power3.out" }),
        y: gsap.quickTo(el, "y", { duration: 1.2, ease: "power3.out" }),
      }))
      const onMove = (e: PointerEvent) => {
        const nx = e.clientX / window.innerWidth - 0.5
        const ny = e.clientY / window.innerHeight - 0.5
        movers.forEach((m) => {
          m.x(nx * -24)
          m.y(ny * -14)
        })
      }
      stage.addEventListener("pointermove", onMove)

      ScrollTrigger.sort()
      ScrollTrigger.refresh()
      return () => stage.removeEventListener("pointermove", onMove)
    }, stage)

    return () => ctx.revert()
  }, [cinematic, route])

  return (
    <section
      id="destinations"
      className="relative w-full overflow-x-clip bg-[#041B26] text-[#F4E8D1]"
    >
      <h2 className="sr-only">The three islands of Avinya</h2>
      <div
        ref={stageRef}
        className={
          cinematic ? "relative h-screen w-full overflow-hidden" : "relative"
        }
      >
        {expeditionDays.map((day, d) => (
          <React.Fragment key={day.id}>
            {!cinematic && d > 0 && (
              <MobileConnector from={expeditionDays[d - 1]!} to={day} />
            )}
            {cinematic ? (
              <CinematicPanel
                day={day}
                panelRef={(el) => (panelsRef.current[d] = el)}
                parallaxRef={(el) => (parallaxRef.current[d] = el)}
                bgRef={(el) => (bgRef.current[d] = el)}
                contentRef={(el) => (contentRef.current[d] = el)}
                registerSetter={registerSetters[d]!}
              />
            ) : (
              <StackedPanel day={day} />
            )}
          </React.Fragment>
        ))}

        {cinematic && (
          <>
            {/* floating dust */}
            <div
              className="pointer-events-none absolute inset-0 z-10"
              aria-hidden="true"
            >
              {DUST.map((p, i) => (
                <span
                  key={i}
                  className="expedition-motion absolute h-1 w-1 rounded-full bg-[#F7C98B]/70"
                  style={{
                    left: p.left,
                    top: p.top,
                    animation: `expedition-dust ${p.duration} ${p.delay} linear infinite`,
                  }}
                />
              ))}
            </div>

            {/* day indicator */}
            <nav
              aria-label="Festival days"
              className="absolute top-1/2 left-4 z-30 flex -translate-y-1/2 flex-col gap-4 rounded-full border border-[#F4E8D1]/15 bg-[#041B26]/55 px-3 py-4 backdrop-blur-sm xl:left-6"
            >
              {expeditionDays.map((day, d) => (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => scrollToDay(d)}
                  aria-current={activeDay === d ? "step" : undefined}
                  className="group flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase"
                >
                  <span
                    className="block h-2.5 w-2.5 rounded-full border transition-all duration-500"
                    style={{
                      borderColor: day.accent,
                      background: activeDay === d ? day.accent : "transparent",
                      boxShadow:
                        activeDay === d ? `0 0 12px ${day.accent}` : "none",
                    }}
                  />
                  <span
                    className={`transition-opacity duration-500 ${activeDay === d ? "opacity-100" : "opacity-40 group-hover:opacity-80"}`}
                  >
                    {day.dayLabel}
                  </span>
                </button>
              ))}
            </nav>

            {/* route band: dotted path, island markers, boat */}
            <div
              ref={routeWrapRef}
              className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[24%]"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#041B26]/80 via-[#041B26]/35 to-transparent" />
              {route && (
                <>
                  <svg
                    className="absolute inset-0 h-full w-full overflow-visible"
                    viewBox={`0 0 ${size.w} ${size.h}`}
                    preserveAspectRatio="none"
                  >
                    <path
                      d={route.d}
                      fill="none"
                      stroke="#C85A2B"
                      strokeOpacity="0.35"
                      strokeWidth="8"
                      strokeLinecap="round"
                      className="blur-[3px]"
                    />
                    <path
                      ref={pathRef}
                      d={route.d}
                      fill="none"
                      stroke="#FF8A3D"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="1 11"
                      className="expedition-motion"
                      style={{
                        animation: "expedition-dash 6s linear infinite",
                      }}
                    />
                    <path
                      ref={travelRef}
                      d={route.d}
                      fill="none"
                      stroke="#FFB070"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path ref={measureRef} fill="none" stroke="none" />
                  </svg>
                  {route.markers.map((m, d) => {
                    const day = expeditionDays[d]!
                    return (
                      <div
                        key={day.id}
                        ref={(el) => {
                          markersRef.current[d] = el
                        }}
                        className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                        style={{ left: m.x, top: m.y }}
                      >
                        <span className="relative flex h-5 w-5 items-center justify-center">
                          <span
                            className="absolute inset-0 animate-ping rounded-full opacity-40"
                            style={{ background: day.accent }}
                          />
                          <span
                            className="h-3 w-3 rounded-full border-2 border-[#F4E8D1]"
                            style={{ background: day.accent }}
                          />
                        </span>
                        <span className="absolute top-full mt-2 font-mono text-[9px] tracking-[0.25em] whitespace-nowrap text-[#F4E8D1] uppercase drop-shadow">
                          {day.dayLabel} · {day.name}
                        </span>
                      </div>
                    )
                  })}
                  <div
                    ref={boatRef}
                    className="absolute top-0 left-0 w-[clamp(72px,7vw,120px)]"
                  >
                    <BoatWithExplorer />
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

function BoatWithExplorer() {
  return (
    <div
      className="expedition-motion relative"
      style={{ animation: "expedition-bob 3.2s ease-in-out infinite" }}
    >
      <div className="relative -scale-x-100">
        <Image
          src={EXPEDITION_ASSETS.boat}
          alt=""
          width={900}
          height={832}
          sizes="120px"
          className="h-auto w-full drop-shadow-[0_8px_10px_rgba(0,0,0,0.45)]"
        />
      </div>
      <ExplorerFigure className="absolute bottom-[14%] left-[30%] w-[13%]" />
      <span
        className="expedition-motion absolute -bottom-1 left-[8%] h-2 w-[84%] rounded-[50%] bg-[#BFE6F2]/60 blur-[2px]"
        style={{ animation: "expedition-ripple 2.4s ease-in-out infinite" }}
      />
    </div>
  )
}

interface CinematicPanelProps {
  day: ExpeditionDay
  panelRef: (el: HTMLDivElement | null) => void
  parallaxRef: (el: HTMLDivElement | null) => void
  bgRef: (el: HTMLDivElement | null) => void
  contentRef: (el: HTMLDivElement | null) => void
  registerSetter: (fn: (i: number) => void) => void
}

function CinematicPanel({
  day,
  panelRef,
  parallaxRef,
  bgRef,
  contentRef,
  registerSetter,
}: CinematicPanelProps) {
  return (
    <div
      ref={panelRef}
      className="absolute inset-0 overflow-hidden"
      style={{ zIndex: day.index + 1 }}
    >
      <div ref={parallaxRef} className="absolute -inset-[3%]">
        <div ref={bgRef} className="absolute inset-0 will-change-transform">
          <Image
            src={day.background}
            alt={day.backgroundAlt}
            fill
            sizes="106vw"
            loading="eager"
            className="object-cover object-[30%_50%]"
          />
        </div>
      </div>
      {/* readability scrim on the content side only — the scene on the left stays clear */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_36%,rgba(4,27,38,0.5)_56%,rgba(4,27,38,0.86)_100%)]" />

      <div className="absolute top-[18%] left-[7%] max-w-[30%]">
        <span
          className="block text-[clamp(5rem,11vw,10rem)] leading-none font-black text-transparent [-webkit-text-stroke:1.5px_rgba(244,232,209,0.55)]"
          aria-hidden="true"
        >
          {String(day.index + 1).padStart(2, "0")}
        </span>
        <span className="mt-2 inline-block rounded-full border border-[#F4E8D1]/30 bg-[#041B26]/50 px-3 py-1 font-mono text-[10px] tracking-[0.25em] text-[#F4E8D1] uppercase backdrop-blur">
          {day.tagline}
        </span>
      </div>

      <div
        ref={contentRef}
        className="absolute top-[max(6.5rem,12vh)] right-[4%] w-[min(44%,600px)]"
      >
        <p
          className="font-mono text-[11px] font-semibold tracking-[0.3em] uppercase"
          style={{ color: day.accent }}
        >
          {day.dayLabel} — {day.date}
        </p>
        <h3 className="mt-2 text-[clamp(2.2rem,4.4vw,4.4rem)] leading-[0.95] font-black tracking-tight text-[#F4E8D1]">
          {day.name}
        </h3>
        <p className="mt-3 line-clamp-2 max-w-lg text-sm leading-relaxed text-[#F4E8D1]/80">
          {day.description}
        </p>
        <div className="mt-5">
          <EventGallery day={day} registerSetter={registerSetter} cinematic />
        </div>
      </div>
    </div>
  )
}

function StackedPanel({ day }: { day: ExpeditionDay }) {
  return (
    <div className="relative">
      <div className="relative h-[52vh] min-h-[300px] w-full overflow-hidden md:h-[60vh]">
        <Image
          src={day.background}
          alt={day.backgroundAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#041B26] to-transparent" />
        <div className="absolute right-5 bottom-5 left-5 sm:left-8">
          <p
            className="font-mono text-[11px] font-semibold tracking-[0.3em] uppercase"
            style={{ color: day.accent }}
          >
            {day.dayLabel} — {day.date}
          </p>
          <h3 className="mt-1 text-4xl leading-none font-black tracking-tight sm:text-5xl">
            {day.name}
          </h3>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-5 pt-4 pb-14 sm:px-8">
        <p className="text-sm leading-relaxed text-[#F4E8D1]/80">
          {day.description}
        </p>
        <div className="mt-6 overflow-hidden px-1 py-2">
          <EventGallery day={day} />
        </div>
      </div>
    </div>
  )
}

function MobileConnector({
  from,
  to,
}: {
  from: ExpeditionDay
  to: ExpeditionDay
}) {
  return (
    <div
      className="relative flex flex-col items-center py-6"
      aria-hidden="true"
    >
      <div className="h-16 border-l-2 border-dashed border-[#FF8A3D]" />
      <div className="w-16 -scale-x-100">
        <div
          className="expedition-motion"
          style={{ animation: "expedition-bob 3.2s ease-in-out infinite" }}
        >
          <Image
            src={EXPEDITION_ASSETS.boat}
            alt=""
            width={900}
            height={832}
            sizes="64px"
            className="h-auto w-full"
          />
        </div>
      </div>
      <div className="h-16 border-l-2 border-dashed border-[#FF8A3D]" />
      <p className="mt-2 font-mono text-[10px] tracking-[0.25em] text-[#F4E8D1]/60 uppercase">
        {from.dayLabel} → {to.dayLabel}
      </p>
    </div>
  )
}
