"use client"

import React from "react"

export function VolunteerCta() {
  return (
    <div className="mt-20 rounded-2xl border-2 border-[#062A3A]/20 bg-[#EFE3C8] p-8 text-center sm:p-12 dark:border-[#F4E8D1]/20 dark:bg-[#041B26]">
      <h3
        className="text-2xl font-bold tracking-tight text-[#062A3A] sm:text-3xl dark:text-[#F4E8D1]"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        JOIN THE VOYAGE VOLUNTEER FLEET
      </h3>
      <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-[#062A3A]/75 sm:text-sm dark:text-[#F4E8D1]/75">
        Student volunteers, event coordinators, and backstage navigators keep
        Avinya running day and night. Register your interest with the secretariat.
      </p>
      <a
        href="mailto:events@iiitdwd.ac.in?subject=Volunteer%20Enlistment"
        className="mt-6 inline-block rounded-lg border-2 border-[#062A3A] bg-[#062A3A] px-6 py-3 font-mono text-xs font-bold tracking-widest text-[#F4E8D1] uppercase transition-colors hover:bg-[#C85A2B] hover:border-[#C85A2B] dark:border-[#F4E8D1] dark:bg-[#F4E8D1] dark:text-[#062A3A]"
      >
        ENLIST AS VOLUNTEER →
      </a>
    </div>
  )
}
