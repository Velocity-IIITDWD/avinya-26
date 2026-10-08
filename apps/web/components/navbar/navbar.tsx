"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useScrollDirection } from "./use-scroll-direction"
import { NavPill, NavItem } from "./nav-pill"
import { MenuButton } from "./menu-button"
import { NavOverlay } from "./nav-overlay"
import { AvinyaLogo } from "./avinya-logo"
import { CompassRose } from "./nautical-icons"
import { useWorldTheme } from "@/lib/theme"
import "./navbar.css"

const defaultLinks: NavItem[] = [
  { href: "/", label: "Home", voyageLabel: "Departure", code: "01" },
  { href: "/events", label: "Events", voyageLabel: "Expeditions", code: "02" },
  { href: "/team", label: "Crew", voyageLabel: "The Manifest", code: "03" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isScrolled } = useScrollDirection(24)
  const pathname = usePathname()
  const { theme: worldTheme } = useWorldTheme()

  const isEventsPage = pathname?.startsWith("/events")

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Auto-close menu if viewport expands to desktop size (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Adaptive backdrop styling based on scroll state & events page
  const headerBackdropClass = isMenuOpen
    ? "border-b border-transparent bg-transparent py-5 sm:py-6"
    : isScrolled
      ? "border-b border-[var(--theme-border,rgba(255,255,255,0.18))] bg-[#070D14]/92 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.55)] backdrop-blur-md sm:py-3.5"
      : isEventsPage
        ? "border-b border-[var(--theme-border,rgba(255,255,255,0.12))] bg-[#080E16]/80 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-md sm:py-5"
        : "border-b border-transparent bg-transparent py-5 sm:py-7"

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${headerBackdropClass}`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16">
          {/* Brand Logo & Editorial Wordmark - Stable Vessel Anchor */}
          <div className="flex items-center">
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="Avinya Home - Life is a Voyage"
              className="rounded outline-none focus-visible:ring-1 focus-visible:ring-[var(--theme-accent,#C85A2B)]"
            >
              <AvinyaLogo showTagline={!isScrolled} />
            </Link>
          </div>

          {/* Center: Desktop Vintage Nautical Nav Pill (Hidden below lg) */}
          <nav
            aria-label="Expedition navigation"
            className={`hidden items-center transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] lg:flex ${
              isMenuOpen
                ? "pointer-events-none scale-95 opacity-0"
                : "scale-100 opacity-100"
            }`}
          >
            <NavPill items={defaultLinks} />
          </nav>

          {/* Right Controls: Coordinates Telemetry Badge & Mobile Menu Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Maritime Telemetry / Coordinates Badge (Desktop) */}
            <div
              className={`hidden items-center gap-2.5 rounded-full border border-[var(--theme-border,rgba(255,255,255,0.14))] bg-[#0A121A]/85 px-3.5 py-1.5 text-[9px] tracking-[0.22em] text-[#FAF4E8]/85 uppercase shadow-sm backdrop-blur-sm transition-all duration-300 xl:flex ${
                isMenuOpen ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            >
              <CompassRose
                size={14}
                className="compass-pulse shrink-0 text-[var(--theme-accent,#C85A2B)] transition-colors duration-400"
              />
              <span className="font-mono">{worldTheme?.coordinates || "15°29'N 75°01'E"}</span>
            </div>

            {/* Mobile Navigation Instrument Trigger (Appears below lg: 1024px) */}
            <MenuButton
              isOpen={isMenuOpen}
              onClick={toggleMenu}
              className="lg:hidden"
            />
          </div>
        </div>
      </header>

      {/* Fullscreen Vintage Voyage Map Overlay */}
      <NavOverlay
        isOpen={isMenuOpen}
        onClose={closeMenu}
        items={defaultLinks}
      />
    </>
  )
}
