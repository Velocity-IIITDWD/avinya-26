"use client"

import React, { useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { NavItem } from "./nav-pill"
import { AvinyaLogo } from "./avinya-logo"
import { CompassRose, WaveDivider, NauticalMarker } from "./nautical-icons"

interface NavOverlayProps {
  isOpen: boolean
  onClose: () => void
  items: NavItem[]
}

export function NavOverlay({ isOpen, onClose, items }: NavOverlayProps) {
  const pathname = usePathname()
  const overlayRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([])
  const bannerRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const compassWatermarkRef = useRef<HTMLDivElement>(null)

  // Prevent background scrolling when open and restore when closed
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
    } else {
      const scrollY = document.body.style.top
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1)
      }
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  // GSAP animation sequencing
  useEffect(() => {
    const overlay = overlayRef.current
    if (!overlay) return

    const validItems = itemsRef.current.filter(Boolean) as HTMLElement[]
    const banner = bannerRef.current
    const footer = footerRef.current
    const compass = compassWatermarkRef.current

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (isOpen) {
      gsap.killTweensOf([overlay, validItems, banner, footer, compass])

      if (prefersReducedMotion) {
        gsap.to(overlay, {
          opacity: 1,
          duration: 0.2,
          ease: "none",
          onStart: () => {
            overlay.style.pointerEvents = "auto"
          },
        })
        gsap.set([validItems, banner, footer], { opacity: 1, y: 0 })
      } else {
        const tl = gsap.timeline()
        overlay.style.pointerEvents = "auto"

        tl.fromTo(
          overlay,
          { opacity: 0 },
          { opacity: 1, duration: 0.45, ease: "power2.out" }
        )

        if (compass) {
          tl.fromTo(
            compass,
            { opacity: 0, rotate: -25, scale: 0.9 },
            {
              opacity: 0.12,
              rotate: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.4"
          )
        }

        if (banner) {
          tl.fromTo(
            banner,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            "-=0.5"
          )
        }

        if (validItems.length > 0) {
          tl.fromTo(
            validItems,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.3"
          )
        }

        if (footer) {
          tl.fromTo(
            footer,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
            "-=0.25"
          )
        }
      }
    } else {
      gsap.killTweensOf([overlay, validItems, banner, footer, compass])

      if (prefersReducedMotion) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.15,
          ease: "none",
          onComplete: () => {
            overlay.style.pointerEvents = "none"
          },
        })
      } else {
        const tl = gsap.timeline({
          onComplete: () => {
            overlay.style.pointerEvents = "none"
          },
        })

        if (validItems.length > 0) {
          tl.to(
            validItems,
            {
              opacity: 0,
              y: -10,
              duration: 0.2,
              stagger: 0.03,
              ease: "power2.in",
            },
            0
          )
        }

        if (footer) {
          tl.to(
            footer,
            { opacity: 0, y: -6, duration: 0.18, ease: "power2.in" },
            0
          )
        }

        tl.to(
          overlay,
          {
            opacity: 0,
            duration: 0.25,
            ease: "power2.inOut",
          },
          0.1
        )
      }
    }
  }, [isOpen])

  return (
    <div
      ref={overlayRef}
      id="navigation-overlay"
      aria-hidden={!isOpen}
      className="pointer-events-none fixed inset-0 z-40 flex h-[100dvh] w-screen flex-col justify-between overflow-hidden bg-[#F4E8D1] text-[#062A3A] opacity-0 transition-all duration-300 select-none lg:hidden dark:bg-[#062A3A] dark:text-[#F2E5C9]"
    >
      {/* Antique Nautical Map Watermark: Compass Rose & Dashed Exploration Route */}
      <div
        ref={compassWatermarkRef}
        className="pointer-events-none absolute -top-16 -right-16 opacity-10 sm:top-12 sm:right-8"
        aria-hidden="true"
      >
        <CompassRose
          size={360}
          className="text-[#062A3A] dark:text-[#F2E5C9]"
        />
      </div>

      {/* Decorative dashed expedition trail */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-15"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-50 150 Q 200 80, 250 350 T 400 650"
          fill="none"
          stroke="#C85A2B"
          strokeWidth="1.5"
          strokeDasharray="4 6"
        />
        <circle cx="250" cy="350" r="4" fill="#C85A2B" />
        <circle cx="400" cy="650" r="4" fill="#C85A2B" />
      </svg>

      {/* Top Banner & Header Clearance */}
      <div
        ref={bannerRef}
        className="relative z-10 w-full px-6 pt-24 sm:px-8 sm:pt-28"
      >
        <div className="flex items-center justify-between border-b border-[#062A3A]/15 pb-4 dark:border-[#F2E5C9]/15">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#C85A2B]" />
            <span
              className="text-[10px] font-semibold tracking-[0.3em] text-[#C85A2B] uppercase"
              style={{
                fontFamily:
                  '"Cinzel", "Playfair Display", "Baskerville", "Georgia", serif',
              }}
            >
              Expedition Log // 2026
            </span>
          </div>

          <span className="font-mono text-[9px] tracking-[0.25em] text-[#062A3A]/60 uppercase dark:text-[#F2E5C9]/60">
            IIIT Dharwad
          </span>
        </div>
      </div>

      {/* Main Navigation Destinations */}
      <div className="relative z-10 flex w-full flex-1 flex-col justify-center px-6 sm:px-8">
        <nav
          aria-label="Expedition Destinations"
          className="flex flex-col items-start gap-5 sm:gap-7"
        >
          {items.map((item, index) => {
            const isActive = pathname === item.href
            const indexCode = item.code || String(index + 1).padStart(2, "0")

            return (
              <div key={item.href} className="w-full overflow-hidden">
                <Link
                  ref={(el) => {
                    itemsRef.current[index] = el
                  }}
                  href={item.href}
                  onClick={onClose}
                  aria-current={isActive ? "page" : undefined}
                  className={`group flex items-center justify-between border-b border-[#062A3A]/10 py-2.5 transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-[#C85A2B] dark:border-[#F2E5C9]/10 ${
                    isActive
                      ? "text-[#C85A2B]"
                      : "text-[#062A3A]/85 hover:text-[#C85A2B] dark:text-[#F2E5C9]/90 dark:hover:text-[#C85A2B]"
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    {/* Destination Number */}
                    <span className="font-mono text-xs tracking-[0.25em] text-[#C85A2B]">
                      {indexCode}
                    </span>

                    {/* Destination Title */}
                    <span
                      className="text-2xl font-bold tracking-[0.2em] uppercase transition-all duration-300 group-hover:translate-x-1.5 sm:text-4xl"
                      style={{
                        fontFamily:
                          '"Cinzel", "Playfair Display", "Baskerville", "Georgia", serif',
                      }}
                    >
                      {item.label}
                    </span>
                  </div>

                  {/* Voyage Subtitle & Nautical Marker */}
                  <div className="flex items-center gap-2">
                    {item.voyageLabel && (
                      <span className="hidden font-mono text-[10px] tracking-[0.2em] text-[#062A3A]/50 uppercase sm:inline dark:text-[#F2E5C9]/50">
                        {item.voyageLabel}
                      </span>
                    )}
                    <NauticalMarker
                      className={`text-[#C85A2B] transition-transform duration-300 ${
                        isActive
                          ? "scale-125"
                          : "opacity-40 group-hover:scale-125 group-hover:opacity-100"
                      }`}
                    />
                  </div>
                </Link>
              </div>
            )
          })}
        </nav>
      </div>

      {/* Bottom Editorial Voyage Journal Footer */}
      <div
        ref={footerRef}
        className="relative z-10 w-full px-6 pb-8 sm:px-8 sm:pb-10"
      >
        <div className="flex flex-col gap-4 border-t border-[#062A3A]/15 pt-5 dark:border-[#F2E5C9]/15">
          {/* Tagline Banner */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div
                className="text-sm font-bold tracking-[0.3em] text-[#C85A2B] uppercase sm:text-base"
                style={{
                  fontFamily:
                    '"Cinzel", "Playfair Display", "Baskerville", "Georgia", serif',
                }}
              >
                Life is a Voyage
              </div>
              <div className="text-[10px] tracking-[0.2em] text-[#062A3A]/60 uppercase dark:text-[#F2E5C9]/60">
                Techno-Cultural Fest // 30th Oct – 1st Nov
              </div>
            </div>

            {/* Coordinates Badge */}
            <div className="font-mono text-[9px] tracking-[0.2em] text-[#062A3A]/60 dark:text-[#F2E5C9]/60">
              15°29&apos;N 75°01&apos;E // DHARWAD
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
