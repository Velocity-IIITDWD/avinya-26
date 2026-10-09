"use client"

import React, { useEffect, useRef } from "react"

interface Wave {
  base: number
  amp: number
  len1: number
  len2: number
  speed1: number
  speed2: number
  phase: number
}

const TAU = Math.PI * 2

const RIPPLE_LINES: Wave[] = [0, 1, 2, 3, 4].map((i) => ({
  base: 0.3 + i * 0.045,
  amp: 0.012 + i * 0.002,
  len1: 620 - i * 40,
  len2: 260 + i * 18,
  speed1: 0.35 + i * 0.05,
  speed2: 0.22 + i * 0.04,
  phase: i * 1.3,
}))

const BACK_WATER: Wave = {
  base: 0.46,
  amp: 0.03,
  len1: 560,
  len2: 240,
  speed1: 0.5,
  speed2: 0.3,
  phase: 0.6,
}
const MID_WATER: Wave = {
  base: 0.62,
  amp: 0.045,
  len1: 680,
  len2: 300,
  speed1: 0.7,
  speed2: 0.45,
  phase: 2.1,
}
const FRONT_WATER: Wave = {
  base: 0.76,
  amp: 0.05,
  len1: 520,
  len2: 210,
  speed1: 0.95,
  speed2: 0.6,
  phase: 4.2,
}

function rgba(hex: string, alpha: number) {
  const h = hex.trim().replace("#", "")
  const n = parseInt(h.length === 3 ? h.replace(/./g, "$&$&") : h, 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`
}

export function HeroRiver() {
  const containerRef = useRef<HTMLDivElement>(null)
  const backRef = useRef<HTMLCanvasElement>(null)
  const frontRef = useRef<HTMLCanvasElement>(null)
  const boatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const backCanvas = backRef.current
    const frontCanvas = frontRef.current
    const boat = boatRef.current
    if (!container || !backCanvas || !frontCanvas || !boat) return
    const back = backCanvas.getContext("2d")
    const front = frontCanvas.getContext("2d")
    if (!back || !front) return

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    let width = 0
    let height = 0
    let boatWidth = 0
    let colors = {
      ink: "#062A3A",
      deep: "#062A3A",
      foam: "#F4E8D1",
      sun: "#C85A2B",
      sand: "#F4E8D1",
    }

    const readColors = () => {
      const style = getComputedStyle(container)
      const get = (name: string, fallback: string) =>
        style.getPropertyValue(name).trim() || fallback
      colors = {
        ink: get("--river-ink", colors.ink),
        deep: get("--river-deep", colors.deep),
        foam: get("--river-foam", colors.foam),
        sun: get("--river-sun", colors.sun),
        sand: get("--river-sand", colors.sand),
      }
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = container.clientWidth
      height = container.clientHeight
      boatWidth = boat.offsetWidth
      for (const [canvas, ctx] of [
        [backCanvas, back],
        [frontCanvas, front],
      ] as const) {
        canvas.width = Math.round(width * dpr)
        canvas.height = Math.round(height * dpr)
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      }
    }

    // Cursor-driven swell, inspired by the interactive "waves" effects on Awwwards
    const pointer = { x: -9999, lastX: -9999, energy: 0 }
    const handlePointer = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const nearRiver = e.clientY > rect.top - 160 && e.clientY < rect.bottom
      if (pointer.lastX > -9999 && nearRiver) {
        pointer.energy = Math.min(
          1,
          pointer.energy + Math.abs(x - pointer.lastX) / 260
        )
      }
      pointer.x = x
      pointer.lastX = x
    }

    const swell = (x: number) => {
      if (pointer.energy < 0.001) return 0
      const dx = x - pointer.x
      return pointer.energy * 1.8 * Math.exp(-(dx * dx) / (2 * 170 * 170))
    }

    const surface = (w: Wave, x: number, t: number) =>
      w.base * height +
      w.amp *
        height *
        (1 + swell(x)) *
        (0.62 * Math.sin((x / w.len1) * TAU + t * w.speed1 + w.phase) +
          0.38 * Math.sin((x / w.len2) * TAU - t * w.speed2 + w.phase * 1.7))

    const tracePath = (
      ctx: CanvasRenderingContext2D,
      w: Wave,
      t: number,
      offset = 0
    ) => {
      ctx.beginPath()
      for (let x = -10; x <= width + 10; x += 8) {
        const y = surface(w, x, t) + offset
        if (x === -10) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
    }

    const fillWave = (
      ctx: CanvasRenderingContext2D,
      w: Wave,
      t: number,
      fill: string | CanvasGradient
    ) => {
      tracePath(ctx, w, t)
      ctx.lineTo(width + 10, height)
      ctx.lineTo(-10, height)
      ctx.closePath()
      ctx.fillStyle = fill
      ctx.fill()
    }

    const strokeWave = (
      ctx: CanvasRenderingContext2D,
      w: Wave,
      t: number,
      color: string,
      lineWidth: number,
      offset = 0
    ) => {
      tracePath(ctx, w, t, offset)
      ctx.strokeStyle = color
      ctx.lineWidth = lineWidth
      ctx.stroke()
    }

    const drawWake = (
      ctx: CanvasRenderingContext2D,
      sternX: number,
      t: number
    ) => {
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        for (let d = 0; d <= 140; d += 6) {
          const x = sternX - d
          const spread = (d / 140) * (6 + i * 7)
          const y =
            surface(MID_WATER, x, t) +
            4 +
            spread +
            Math.sin(d * 0.12 - t * 4 + i) * 1.2
          if (d === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = rgba(colors.foam, 0.55 - i * 0.15)
        ctx.lineWidth = 1.4
        ctx.stroke()
      }
    }

    let travel = width * 0.25
    let lastScroll = window.scrollY

    const render = (t: number) => {
      const cycle = width + boatWidth * 2
      const boatX = (((travel % cycle) + cycle) % cycle) - boatWidth
      const centerX = boatX + boatWidth / 2
      const waterline = surface(MID_WATER, centerX, t)
      const slope =
        (surface(MID_WATER, centerX + 24, t) -
          surface(MID_WATER, centerX - 24, t)) /
        48
      const tilt = Math.max(
        -12,
        Math.min(12, (Math.atan(slope) * 180) / Math.PI)
      )

      back.clearRect(0, 0, width, height)

      // Low dune sun resting on the horizon
      const sunR = Math.min(height * 0.17, 54)
      back.beginPath()
      back.arc(
        width * 0.8,
        BACK_WATER.base * height - sunR * 0.15,
        sunR,
        0,
        TAU
      )
      back.fillStyle = rgba(colors.sun, 0.85)
      back.fill()

      RIPPLE_LINES.forEach((w, i) =>
        strokeWave(back, w, t, rgba(colors.ink, 0.1 + i * 0.04), 1)
      )

      fillWave(back, BACK_WATER, t, colors.sand)
      fillWave(back, BACK_WATER, t, rgba(colors.ink, 0.12))
      strokeWave(back, BACK_WATER, t, rgba(colors.ink, 0.28), 1.2)

      const mid = back.createLinearGradient(
        0,
        MID_WATER.base * height - 20,
        0,
        height
      )
      mid.addColorStop(0, rgba(colors.ink, 0.26))
      mid.addColorStop(1, rgba(colors.ink, 0.5))
      fillWave(back, MID_WATER, t, mid)
      strokeWave(back, MID_WATER, t, rgba(colors.ink, 0.5), 1.4)
      drawWake(back, boatX + boatWidth * 0.12, t)

      front.clearRect(0, 0, width, height)
      const deep = front.createLinearGradient(
        0,
        FRONT_WATER.base * height - 20,
        0,
        height
      )
      deep.addColorStop(0, rgba(colors.deep, 0.92))
      deep.addColorStop(1, rgba(colors.deep, 1))
      fillWave(front, FRONT_WATER, t, deep)
      strokeWave(front, FRONT_WATER, t, rgba(colors.foam, 0.7), 1.6)
      ;[10, 22, 38].forEach((offset, i) =>
        strokeWave(
          front,
          { ...FRONT_WATER, phase: FRONT_WATER.phase + (i + 1) * 0.5 },
          t,
          rgba(colors.foam, 0.28 - i * 0.07),
          1,
          offset
        )
      )

      boat.style.transform = `translate3d(${boatX}px, ${waterline - boatWidth * 0.84}px, 0) rotate(${tilt}deg)`
    }

    readColors()
    resize()
    travel = width * 0.25

    let rafId: number | null = null
    let visible = true
    let last = performance.now()
    let elapsed = 0
    let colorTimer = 0

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      elapsed += dt
      colorTimer += dt
      if (colorTimer > 0.5) {
        readColors()
        colorTimer = 0
      }

      const scroll = window.scrollY
      travel +=
        dt * Math.max(40, width / 36) + Math.max(0, scroll - lastScroll) * 0.6
      lastScroll = scroll
      pointer.energy *= 0.965

      render(elapsed)
      rafId = visible ? requestAnimationFrame(loop) : null
    }

    const start = () => {
      if (reducedMotion || rafId !== null) return
      last = performance.now()
      rafId = requestAnimationFrame(loop)
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = !!entry?.isIntersecting
      if (visible) start()
    })
    observer.observe(container)

    const handleResize = () => {
      resize()
      render(elapsed)
    }

    render(0)
    start()
    window.addEventListener("resize", handleResize)
    if (!reducedMotion)
      window.addEventListener("pointermove", handlePointer, { passive: true })

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      observer.disconnect()
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("pointermove", handlePointer)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] [--river-deep:#062A3A] [--river-foam:#F4E8D1] [--river-ink:#062A3A] [--river-sand:#F4E8D1] [--river-sun:#C85A2B] sm:h-[260px] dark:[--river-deep:#041B26] dark:[--river-ink:#F4E8D1] dark:[--river-sand:#062A3A]"
      aria-hidden="true"
    >
      <canvas ref={backRef} className="absolute inset-0 h-full w-full" />

      <div
        ref={boatRef}
        className="absolute top-0 left-0 w-[84px] origin-[50%_84%] will-change-transform sm:w-[110px]"
      >
        <SailBoat />
      </div>

      <canvas
        ref={frontRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
    </div>
  )
}

function SailBoat() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-auto w-full text-[#062A3A] drop-shadow-[0_6px_8px_rgba(6,42,58,0.25)] dark:text-[#F4E8D1]"
    >
      {/* Pennant */}
      <path d="M60 4 L76 8 L60 12 Z" fill="#C85A2B" />
      {/* Mast */}
      <line
        x1="60"
        y1="4"
        x2="60"
        y2="94"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Mainsail */}
      <path
        d="M57 14 C 40 34, 26 58, 18 86 L57 86 Z"
        fill="#F4E8D1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M52 30 C 42 46, 34 64, 28 80"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1.4"
      />
      <path
        d="M20 74 C 32 68, 44 70, 57 76"
        fill="none"
        stroke="#C85A2B"
        strokeWidth="2.2"
      />
      {/* Jib */}
      <path
        d="M63 20 C 80 40, 94 62, 102 86 L63 86 Z"
        fill="#C85A2B"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M67 34 C 78 50, 88 66, 94 82"
        fill="none"
        stroke="#F4E8D1"
        strokeOpacity="0.5"
        strokeWidth="1.4"
      />
      {/* Hull */}
      <path
        d="M6 90 H116 L106 104 C 102 110, 96 112, 88 112 H28 C 18 112, 11 104, 6 90 Z"
        fill="currentColor"
      />
      <path d="M12 96 H110" stroke="#C85A2B" strokeWidth="2" />
      <circle cx="40" cy="103" r="2" fill="#F4E8D1" />
      <circle cx="58" cy="103" r="2" fill="#F4E8D1" />
      <circle cx="76" cy="103" r="2" fill="#F4E8D1" />
    </svg>
  )
}
