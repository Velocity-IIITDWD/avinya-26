"use client"

import React, { useState } from "react"
import { NauticalSail } from "@/components/icons"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col justify-between rounded-2xl border-2 border-[#062A3A]/20 bg-[#F8EFE0] p-8 shadow-lg lg:col-span-6 dark:border-[#F4E8D1]/20 dark:bg-[#041B26]">
      <div>
        <div className="flex items-center justify-between border-b border-[#062A3A]/15 pb-4 dark:border-[#F4E8D1]/15">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#C85A2B] uppercase">
            TELEGRAPH DISPATCH // TRANSMIT
          </span>
          <span className="font-mono text-[10px] tracking-[0.16em] text-[#062A3A]/60 uppercase dark:text-[#F4E8D1]/60">
            SECURE ROUTE
          </span>
        </div>

        {submitted ? (
          <div className="my-12 rounded-xl border-2 border-[#2E8B57] bg-[#2E8B57]/10 p-8 text-center">
            <NauticalSail size={36} className="mx-auto text-[#2E8B57]" />
            <h4
              className="mt-4 text-2xl font-bold text-[#062A3A] dark:text-[#F4E8D1]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              DISPATCH TRANSMITTED
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-[#062A3A]/80 dark:text-[#F4E8D1]/80">
              Your signal has been received at the Avinya bridge. Our communications
              officer will contact your vessel shortly.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false)
                setFormData({ name: "", college: "", email: "", message: "" })
              }}
              className="mt-6 inline-block rounded border border-[#062A3A] bg-[#062A3A] px-4 py-2 font-mono text-xs font-bold text-[#F4E8D1] uppercase transition-colors hover:bg-[#C85A2B] hover:border-[#C85A2B] dark:border-[#F4E8D1] dark:bg-[#F4E8D1] dark:text-[#062A3A]"
            >
              TRANSMIT ANOTHER SIGNAL
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="dispatch-name"
                className="block font-mono text-[10px] font-bold tracking-[0.2em] text-[#062A3A] uppercase dark:text-[#F4E8D1]"
              >
                CADET / COMMODORE NAME
              </label>
              <input
                id="dispatch-name"
                required
                type="text"
                placeholder="Capt. Alexander"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1.5 w-full rounded-md border border-[#062A3A]/25 bg-[#F4E8D1]/80 px-3.5 py-2.5 font-mono text-xs text-[#062A3A] placeholder-[#062A3A]/40 outline-none transition-colors focus:border-[#C85A2B] dark:border-[#F4E8D1]/25 dark:bg-[#062A3A]/80 dark:text-[#F4E8D1] dark:placeholder-[#F4E8D1]/40"
              />
            </div>

            <div>
              <label
                htmlFor="dispatch-college"
                className="block font-mono text-[10px] font-bold tracking-[0.2em] text-[#062A3A] uppercase dark:text-[#F4E8D1]"
              >
                HOME HARBOR // COLLEGE OR INSTITUTE
              </label>
              <input
                id="dispatch-college"
                required
                type="text"
                placeholder="Indian Institute of Information Technology..."
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                className="mt-1.5 w-full rounded-md border border-[#062A3A]/25 bg-[#F4E8D1]/80 px-3.5 py-2.5 font-mono text-xs text-[#062A3A] placeholder-[#062A3A]/40 outline-none transition-colors focus:border-[#C85A2B] dark:border-[#F4E8D1]/25 dark:bg-[#062A3A]/80 dark:text-[#F4E8D1] dark:placeholder-[#F4E8D1]/40"
              />
            </div>

            <div>
              <label
                htmlFor="dispatch-email"
                className="block font-mono text-[10px] font-bold tracking-[0.2em] text-[#062A3A] uppercase dark:text-[#F4E8D1]"
              >
                TELEGRAPH RETURN ADDRESS // EMAIL
              </label>
              <input
                id="dispatch-email"
                required
                type="email"
                placeholder="cadet@institute.ac.in"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1.5 w-full rounded-md border border-[#062A3A]/25 bg-[#F4E8D1]/80 px-3.5 py-2.5 font-mono text-xs text-[#062A3A] placeholder-[#062A3A]/40 outline-none transition-colors focus:border-[#C85A2B] dark:border-[#F4E8D1]/25 dark:bg-[#062A3A]/80 dark:text-[#F4E8D1] dark:placeholder-[#F4E8D1]/40"
              />
            </div>

            <div>
              <label
                htmlFor="dispatch-message"
                className="block font-mono text-[10px] font-bold tracking-[0.2em] text-[#062A3A] uppercase dark:text-[#F4E8D1]"
              >
                SIGNAL MESSAGE // INQUIRY OR CONTINGENT DETAILS
              </label>
              <textarea
                id="dispatch-message"
                required
                rows={4}
                placeholder="Detail your inquiry, contingent size, or sponsorship interest..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-1.5 w-full rounded-md border border-[#062A3A]/25 bg-[#F4E8D1]/80 px-3.5 py-2.5 font-mono text-xs text-[#062A3A] placeholder-[#062A3A]/40 outline-none transition-colors focus:border-[#C85A2B] dark:border-[#F4E8D1]/25 dark:bg-[#062A3A]/80 dark:text-[#F4E8D1] dark:placeholder-[#F4E8D1]/40"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-md border-2 border-[#062A3A] bg-[#062A3A] py-3 font-mono text-xs font-bold tracking-[0.2em] text-[#F4E8D1] uppercase transition-colors hover:border-[#C85A2B] hover:bg-[#C85A2B] dark:border-[#F4E8D1] dark:bg-[#F4E8D1] dark:text-[#062A3A]"
            >
              TRANSMIT DISPATCH →
            </button>
          </form>
        )}
      </div>

      <div className="mt-8 border-t border-[#062A3A]/15 pt-4 text-center font-mono text-[9px] text-[#062A3A]/60 uppercase dark:border-[#F4E8D1]/15 dark:text-[#F4E8D1]/60">
        STANDARD VOYAGE DISPATCH PROTOCOL // 24H AVERAGE RESPONSE TIME
      </div>
    </div>
  )
}
