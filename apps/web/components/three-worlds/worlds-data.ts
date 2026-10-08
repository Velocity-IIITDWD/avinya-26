export interface WorldData {
  id: string
  name: string
  subtitle: string
  day: string
  date: string
  coordinates: string
  tagline: string
  description: string
  image: string
  color: string
  accentBg: string
  events: string[]
  themeIcon: string
}

export const worldsData: WorldData[] = [
  {
    id: "outpost",
    name: "THE LAST OUTPOST",
    subtitle: "WORLD I // THE TECHNICAL FRONTIER",
    day: "DAY 01",
    date: "OCTOBER 30, 2026",
    coordinates: "15°28'40\"N  75°01'15\"E",
    tagline: "Endure the code storm at the jagged edge of technology",
    description:
      "A rugged volcanic sanctuary where coders, architects, and technical pioneers test their mettle against uncharted algorithmic horizons. Home to the flagship 24-hour hackathons, system defense tournaments, and cryptographic mysteries.",
    image: "/images/island-outpost.webp",
    color: "#C85A2B", // Terracotta
    accentBg: "rgba(200, 90, 43, 0.15)",
    events: ["Flagship 24H Hackathon", "Algo-Storm Competitive Coding", "Web3 Frontier Challenge", "Capture The Flag (CTF)"],
    themeIcon: "⛰️",
  },
  {
    id: "pandemonium",
    name: "PANDEMONIUM",
    subtitle: "WORLD II // HIGH-ENERGY BATTLEGROUND",
    day: "DAY 02",
    date: "OCTOBER 31, 2026",
    coordinates: "15°29'10\"N  75°01'45\"E",
    tagline: "Where mechanical sparks fly and competitive fervor takes over",
    description:
      "A lush, untamed archipelago transformed into a high-octane battle zone. Witness custom combat bots clash in ironclad arenas, aerial drone sprints, intense LAN gaming championships, and AI agent simulations.",
    image: "/images/island-pandemonium.webp",
    color: "#2E8B57", // Emerald Sea
    accentBg: "rgba(46, 139, 87, 0.15)",
    events: ["RoboWars Metal Clash", "Autonomous Drone Gauntlet", "Neon Drift Esports (Valorant)", "AI Battle Simulators"],
    themeIcon: "⚡",
  },
  {
    id: "carnival",
    name: "THE CARNIVAL ISLAND",
    subtitle: "WORLD III // CULTURAL SPECTACLE & CELEBRATION",
    day: "DAY 03",
    date: "NOVEMBER 01, 2026",
    coordinates: "15°29'55\"N  75°02'20\"E",
    tagline: "Shore leave for the soul — lights, melodies, and grand finale",
    description:
      "A radiant haven of celebration illuminated by carnival lanterns and moonlit tides. The grand finale of Avinya unites national musical headliners, fierce battle of the bands, vibrant dance crews, dramatic performances, and culinary delights.",
    image: "/images/island-carnival.webp",
    color: "#C5A059", // Brass Gold
    accentBg: "rgba(197, 160, 89, 0.15)",
    events: ["Star Celebrity Pro-Nite", "Battle of the Bands", "Choreo-Night Dance Showcase", "Runway Fashion Odyssey"],
    themeIcon: "🎪",
  },
]
