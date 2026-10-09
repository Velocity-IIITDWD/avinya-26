/**
 * Central, editable content for the homepage island expedition.
 * Sample events below are illustrative placeholders, NOT the confirmed
 * official schedule — replace them when the final programme is published.
 */

export type ExpeditionDayId = "outpost" | "pandemonium" | "carnival"

export interface ExpeditionEvent {
  id: string
  day: ExpeditionDayId
  title: string
  description: string
  image: string
  category: string
  time?: string
  venue?: string
  featured?: boolean
}

export interface ExpeditionDay {
  id: ExpeditionDayId
  index: number
  dayLabel: string
  date: string
  name: string
  tagline: string
  description: string
  background: string
  backgroundAlt: string
  accent: string
  events: ExpeditionEvent[]
}

export const EXPEDITION_ASSETS = {
  boat: "/images/expedition/boat.webp",
  island: "/images/expedition/sunset-island.webp",
  // No explorer/pirate character asset was supplied; ExplorerFigure renders an SVG fallback.
  explorer: null as string | null,
}

export const expeditionDays: ExpeditionDay[] = [
  {
    id: "outpost",
    index: 0,
    dayLabel: "DAY 01",
    date: "OCT 30, 2026",
    name: "THE LAST OUTPOST",
    tagline: "The edge of civilization",
    description:
      "Our expedition makes landfall at a sun-scorched frontier citadel. Day one opens the voyage with the technical frontier — code, systems and cipher-breaking at the edge of the known map.",
    background: "/images/expedition/outpost-bg.webp",
    backgroundAlt:
      "A lone explorer overlooking a desert citadel and bridges at dawn",
    accent: "#E07B39",
    events: [
      {
        id: "the-last-outpost",
        day: "outpost",
        title: "THE LAST OUTPOST",
        description:
          "The opening expedition of Avinya — landfall ceremony and the first call to the frontier.",
        image: "/images/worlds/last-outpost-ref.webp",
        category: "Flagship",
        time: "Day 01 · Morning",
        venue: "Main Arena",
        featured: true,
      },
      {
        id: "outpost-hackathon",
        day: "outpost",
        title: "CODE ODYSSEY",
        description:
          "Sample event — a long-format hackathon across the frontier night.",
        image: "/images/events/hackathon.webp",
        category: "Technical",
        time: "Sample time",
      },
      {
        id: "outpost-ctf",
        day: "outpost",
        title: "CIPHER LOCK",
        description:
          "Sample event — capture-the-flag puzzles hidden in the citadel archives.",
        image: "/images/events/ctf.webp",
        category: "Technical",
      },
      {
        id: "outpost-algo",
        day: "outpost",
        title: "ALGO STORM",
        description:
          "Sample event — competitive programming against the desert clock.",
        image: "/images/events/algostorm.webp",
        category: "Technical",
      },
      {
        id: "outpost-web3",
        day: "outpost",
        title: "FRONTIER LEDGER",
        description: "Sample event — build on the decentralised frontier.",
        image: "/images/events/web3.webp",
        category: "Technical",
      },
    ],
  },
  {
    id: "pandemonium",
    index: 1,
    dayLabel: "DAY 02",
    date: "OCT 31, 2026",
    name: "THE PANDEMONIUM",
    tagline: "Paradise was never meant to last",
    description:
      "Neon skylines rise over a tropical lagoon. Day two turns up the voltage — machines clash, drones race and arenas erupt under a blood-red sun.",
    background: "/images/expedition/pandemonium-bg.webp",
    backgroundAlt:
      "A neon-pink sunset over a futuristic tropical city with arched bridges",
    accent: "#FF3D7F",
    events: [
      {
        id: "pandemonium-robowars",
        day: "pandemonium",
        title: "IRONCLAD ROBOWARS",
        description: "Sample event — combat robots collide in the arena.",
        image: "/images/events/robowars.webp",
        category: "Technical",
      },
      {
        id: "pandemonium-drones",
        day: "pandemonium",
        title: "SKY GAUNTLET",
        description: "Sample event — drone racing through the neon spires.",
        image: "/images/events/drones.webp",
        category: "Technical",
      },
      {
        id: "pandemonium-esports",
        day: "pandemonium",
        title: "NEON DRIFT",
        description: "Sample event — esports showdown on the big screen.",
        image: "/images/events/esports-gaming.webp",
        category: "Gaming",
      },
      {
        id: "pandemonium-aero",
        day: "pandemonium",
        title: "AERO FLIGHT",
        description: "Sample event — design, build and fly.",
        image: "/images/events/aerodynamics-flight.webp",
        category: "Technical",
      },
    ],
  },
  {
    id: "carnival",
    index: 2,
    dayLabel: "DAY 03",
    date: "NOV 01, 2026",
    name: "THE CARNIVAL",
    tagline: "The final destination",
    description:
      "Lanterns, ferris wheels and moonlit tides. The voyage ends in celebration — music, dance and a grand finale on the waterfront.",
    background: "/images/expedition/carnival-bg.webp",
    backgroundAlt:
      "A tropical waterfront carnival at night with a glowing ferris wheel",
    accent: "#F5B942",
    events: [
      {
        id: "carnival-pronite",
        day: "carnival",
        title: "STAR PRO-NITE",
        description:
          "Sample event — the headline finale on the waterfront stage.",
        image: "/images/events/pronite.webp",
        category: "Cultural",
      },
      {
        id: "carnival-bands",
        day: "carnival",
        title: "BATTLE OF BANDS",
        description: "Sample event — bands go head to head under the lanterns.",
        image: "/images/events/bands.webp",
        category: "Cultural",
      },
      {
        id: "carnival-choreo",
        day: "carnival",
        title: "CHOREO NIGHT",
        description: "Sample event — dance crews light up the boardwalk.",
        image: "/images/events/choreo.webp",
        category: "Cultural",
      },
      {
        id: "carnival-music",
        day: "carnival",
        title: "MOONLIT MELODIES",
        description: "Sample event — an acoustic set by the water.",
        image: "/images/events/music-night.webp",
        category: "Cultural",
      },
    ],
  },
]

export interface Sponsor {
  name: string
  tier: "title" | "major" | "community"
}

// Placeholder slots only — no real sponsorship is implied. Replace with confirmed partners.
export const sponsorSlots: Sponsor[] = [
  { name: "Title Sponsor", tier: "title" },
  { name: "Major Partner 01", tier: "major" },
  { name: "Major Partner 02", tier: "major" },
  { name: "Major Partner 03", tier: "major" },
  { name: "Community Partner 01", tier: "community" },
  { name: "Community Partner 02", tier: "community" },
  { name: "Community Partner 03", tier: "community" },
  { name: "Community Partner 04", tier: "community" },
  { name: "Community Partner 05", tier: "community" },
  { name: "Community Partner 06", tier: "community" },
]

export const horizontalPhrases = [
  "THREE DAYS. ONE UNFORGETTABLE EXPEDITION.",
  "ENTER THE UNKNOWN.",
  "FOLLOW THE ROUTE.",
  "FIND YOUR ISLAND.",
  "AVINYA — BEYOND THE ORDINARY.",
]
