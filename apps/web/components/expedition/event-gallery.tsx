"use client"

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import Image from "next/image"
import { gsap, Draggable } from "./gsap"
import { prefersReducedMotion } from "./use-media-query"
import type { ExpeditionDay } from "./expedition-data"

interface EventGalleryProps {
  day: ExpeditionDay
  /** Lets a parent scroll timeline drive the active card. */
  registerSetter?: (setter: (index: number) => void) => void
  cinematic?: boolean
}

export function EventGallery({
  day,
  registerSetter,
  cinematic = false,
}: EventGalleryProps) {
  const total = day.events.length
  const [active, setActive] = useState(0)
  const cardsRef = useRef<(HTMLElement | null)[]>([])
  const viewportRef = useRef<HTMLDivElement>(null)
  const proxyRef = useRef<HTMLDivElement>(null)
  const firstLayout = useRef(true)

  const go = useCallback(
    (index: number) => setActive(Math.max(0, Math.min(total - 1, index))),
    [total]
  )

  useEffect(() => {
    registerSetter?.((index) =>
      setActive(Math.max(0, Math.min(total - 1, index)))
    )
  }, [registerSetter, total])

  useLayoutEffect(() => {
    const instant = firstLayout.current || prefersReducedMotion()
    firstLayout.current = false
    cardsRef.current.forEach((card, i) => {
      if (!card) return
      const offset = i - active
      const dist = Math.abs(offset)
      gsap.to(card, {
        xPercent: offset * 58,
        scale: 1 - Math.min(dist, 3) * 0.13,
        rotationY: offset * -12,
        z: -dist * 60,
        opacity: dist > 2 ? 0 : 1 - dist * 0.3,
        zIndex: total - dist,
        duration: instant ? 0 : 0.65,
        ease: "power3.out",
        overwrite: true,
      })
    })
  }, [active, total])

  useEffect(() => {
    const viewport = viewportRef.current
    const proxy = proxyRef.current
    if (!viewport || !proxy) return
    const ctx = gsap.context(() => {
      Draggable.create(proxy, {
        type: "x",
        trigger: viewport,
        minimumMovement: 8,
        onRelease: function (this: Draggable) {
          const dx = this.x
          if (dx < -40) setActive((a) => Math.min(total - 1, a + 1))
          else if (dx > 40) setActive((a) => Math.max(0, a - 1))
          gsap.set(proxy, { x: 0 })
          this.update()
        },
      })
    })
    return () => ctx.revert()
  }, [total])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault()
      go(active + 1)
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      go(active - 1)
    }
  }

  const current = day.events[active]

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${day.name} events`}
      onKeyDown={onKeyDown}
    >
      <div
        ref={viewportRef}
        className={`relative cursor-grab touch-pan-y select-none [perspective:1200px] active:cursor-grabbing ${
          cinematic ? "h-[clamp(230px,33vh,340px)]" : "h-[340px] sm:h-[380px]"
        }`}
      >
        <div
          ref={proxyRef}
          className="pointer-events-none absolute h-px w-px opacity-0"
          aria-hidden="true"
        />
        {day.events.map((event, i) => (
          <article
            key={event.id}
            ref={(el) => {
              cardsRef.current[i] = el
            }}
            onClick={() => go(i)}
            aria-hidden={i !== active}
            className="group absolute top-0 left-1/2 -ml-[34%] flex h-full w-[68%] flex-col overflow-hidden rounded-xl border bg-[#041B26] shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-[border-color,box-shadow] duration-500 will-change-transform sm:-ml-[29%] sm:w-[58%]"
            style={{
              opacity: i === 0 ? 1 : 0,
              borderColor: i === active ? day.accent : "rgba(244,232,209,0.18)",
              boxShadow:
                i === active
                  ? `0 0 0 1px ${day.accent}55, 0 24px 60px rgba(0,0,0,0.5)`
                  : undefined,
            }}
          >
            <div className="relative min-h-0 flex-[1.4] overflow-hidden">
              <Image
                src={event.image}
                alt=""
                fill
                draggable={false}
                sizes="(min-width: 1024px) 320px, 70vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#041B26] to-transparent" />
              <span
                className="absolute top-3 left-3 rounded-full px-2.5 py-1 font-mono text-[9px] font-bold tracking-[0.2em] text-[#041B26] uppercase"
                style={{ background: day.accent }}
              >
                {event.featured ? "Featured" : event.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-1.5 p-3.5 sm:p-4">
              <h4 className="text-base leading-tight font-black tracking-tight text-[#F4E8D1] sm:text-lg">
                {event.title}
              </h4>
              <p className="line-clamp-2 text-xs leading-snug text-[#F4E8D1]/70">
                {event.description}
              </p>
              {(event.time || event.venue) && (
                <p className="mt-auto font-mono text-[9px] tracking-[0.18em] text-[#F4E8D1]/55 uppercase">
                  {[event.time, event.venue].filter(Boolean).join(" · ")}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <GalleryButton
            label="Previous event"
            disabled={active === 0}
            onClick={() => go(active - 1)}
            dir="prev"
          />
          <GalleryButton
            label="Next event"
            disabled={active === total - 1}
            onClick={() => go(active + 1)}
            dir="next"
          />
        </div>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {day.events.map((event, i) => (
            <span
              key={event.id}
              className="h-1.5 rounded-full transition-all duration-500"
              style={{
                width: i === active ? 22 : 6,
                background: i === active ? day.accent : "rgba(244,232,209,0.3)",
              }}
            />
          ))}
        </div>
        <span className="font-mono text-[10px] tracking-[0.2em] text-[#F4E8D1]/60">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>
      <p className="sr-only" aria-live="polite">
        {current ? `${current.title}, event ${active + 1} of ${total}` : ""}
      </p>
    </div>
  )
}

function GalleryButton({
  label,
  disabled,
  onClick,
  dir,
}: {
  label: string
  disabled: boolean
  onClick: () => void
  dir: "prev" | "next"
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F4E8D1]/30 bg-[#041B26]/60 text-[#F4E8D1] backdrop-blur transition-colors hover:border-[#C85A2B] hover:bg-[#C85A2B] focus-visible:ring-2 focus-visible:ring-[#C85A2B] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[#F4E8D1]/30 disabled:hover:bg-[#041B26]/60"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {dir === "prev" ? (
          <path d="M15 6l-6 6 6 6" />
        ) : (
          <path d="M9 6l6 6-6 6" />
        )}
      </svg>
    </button>
  )
}
