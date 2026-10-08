"use client"

import Image from "next/image"
import Link from "next/link"
import { useScrollDirection } from "./use-scroll-direction"
import { NavPill, NavItem } from "./nav-pill"
import "./navbar.css"

const defaultLinks: NavItem[] = [
  { href: "/", label: "Home", voyageLabel: "Departure", code: "01" },
  { href: "/events", label: "Events", voyageLabel: "Expeditions", code: "02" },
  { href: "/team", label: "Crew", voyageLabel: "The Manifest", code: "03" },
]

export function Navbar() {
  const { scrollDirection } = useScrollDirection(24)

  const isNavbarVisible = scrollDirection !== "down"

  return (
    <>
      <header
        className={`fixed top-4 right-0 left-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] sm:top-6 ${isNavbarVisible ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-[calc(100%+2rem)] opacity-0"}`}
      >
        <div className="flex items-center justify-center px-4">
          <NavPill
            items={defaultLinks}
            leading={
              <Link
                href="/"
                aria-label="Avinya Home"
                className="mr-1 flex shrink-0 items-center rounded-full p-1 outline-none focus-visible:ring-1 focus-visible:ring-[var(--theme-accent,#C85A2B)]"
              >
                <Image
                  src="/favicon.ico"
                  alt="Avinya Home"
                  width={24}
                  height={24}
                  className="size-6"
                />
              </Link>
            }
          />
        </div>
      </header>
    </>
  )
}
