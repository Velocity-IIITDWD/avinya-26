"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useScrollDirection } from "./use-scroll-direction"
import { NavPill, NavItem } from "./nav-pill"
import { MenuButton } from "./menu-button"
import { NavOverlay } from "./nav-overlay"
import { AvinyaLogo } from "./avinya-logo"
import { CompassRose } from "./nautical-icons"
import "./navbar.css"

const defaultLinks: NavItem[] = [
  { href: "/", label: "Home", voyageLabel: "Departure", code: "01" },
  { href: "/#about", label: "About", voyageLabel: "The Logbook", code: "02" },
  { href: "/#destinations", label: "Worlds", voyageLabel: "Archipelago", code: "03" },
  { href: "/events", label: "Events", voyageLabel: "Expeditions", code: "04" },
  { href: "/#schedule", label: "Schedule", voyageLabel: "Itinerary", code: "05" },
  { href: "/team", label: "Crew", voyageLabel: "The Manifest", code: "06" },
  { href: "/#contact", label: "Contact", voyageLabel: "Port", code: "07" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isScrolled } = useScrollDirection(24)

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

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isMenuOpen
            ? "border-b border-transparent bg-transparent py-5 sm:py-6"
            : isScrolled
              ? "border-b border-[#062A3A]/15 bg-[#F4E8D1]/92 py-3 shadow-[0_4px_24px_rgba(6,42,58,0.12)] backdrop-blur-md sm:py-3.5 dark:border-[#C85A2B]/25 dark:bg-[#062A3A]/92 dark:shadow-[0_8px_32px_rgba(4,27,38,0.55)]"
              : "border-b border-transparent bg-transparent py-5 sm:py-7"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16">
          {/* Brand Logo & Editorial Wordmark */}
          <div className="flex items-center">
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="Avinya Home - Life is a Voyage"
              className="rounded outline-none focus-visible:ring-1 focus-visible:ring-[#C85A2B]"
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
              className={`hidden items-center gap-2.5 rounded-full border border-[#062A3A]/15 bg-[#F4E8D1]/85 px-3.5 py-1.5 text-[9px] tracking-[0.22em] text-[#062A3A]/75 uppercase backdrop-blur-sm transition-opacity duration-300 xl:flex dark:border-[#C85A2B]/30 dark:bg-[#062A3A]/85 dark:text-[#F2E5C9]/75 ${
                isMenuOpen ? "pointer-events-none opacity-0" : "opacity-100"
              }`}
            >
              <CompassRose
                size={14}
                className="compass-pulse shrink-0 text-[#C85A2B]"
              />
              <span className="font-mono">15°29&apos;N 75°01&apos;E</span>
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
