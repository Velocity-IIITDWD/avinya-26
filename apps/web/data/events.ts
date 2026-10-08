import { worldThemes } from "@/lib/theme/world-themes"

export type AvinyaWorld =
  | "The Last Outpost"
  | "Pandemonium"
  | "The Carnival Island"

export type EventCategory = "technical" | "cultural"

export interface EventData {
  id: string
  title: string
  subtitle?: string
  category: EventCategory
  displayCategory: string
  world: AvinyaWorld
  day: string
  date: string
  time: string
  venue: string
  coordinates: string
  logNumber: string
  description: string
  fullDescription?: string
  image: string
  icon?: string
  accent?: string
  prizePool?: string
  teamSize?: string
  featured?: boolean
  rules?: string[]
  tags?: string[]
}

export const WORLD_CONFIG: Record<
  AvinyaWorld,
  {
    name: string
    day: string
    date: string
    color: string
    accentBg: string
    tagline: string
    icon: string
    coordinates: string
  }
> = {
  "The Last Outpost": {
    name: worldThemes.lastOutpost.name,
    day: worldThemes.lastOutpost.day,
    date: worldThemes.lastOutpost.date,
    color: worldThemes.lastOutpost.colors.accent,
    accentBg: worldThemes.lastOutpost.colors.accentSoft,
    tagline: worldThemes.lastOutpost.tagline,
    icon: worldThemes.lastOutpost.motifs.icon,
    coordinates: worldThemes.lastOutpost.coordinates,
  },
  Pandemonium: {
    name: worldThemes.pandemonium.name,
    day: worldThemes.pandemonium.day,
    date: worldThemes.pandemonium.date,
    color: worldThemes.pandemonium.colors.accent,
    accentBg: worldThemes.pandemonium.colors.accentSoft,
    tagline: worldThemes.pandemonium.tagline,
    icon: worldThemes.pandemonium.motifs.icon,
    coordinates: worldThemes.pandemonium.coordinates,
  },
  "The Carnival Island": {
    name: worldThemes.carnivalIsland.name,
    day: worldThemes.carnivalIsland.day,
    date: worldThemes.carnivalIsland.date,
    color: worldThemes.carnivalIsland.colors.accent,
    accentBg: worldThemes.carnivalIsland.colors.accentSoft,
    tagline: worldThemes.carnivalIsland.tagline,
    icon: worldThemes.carnivalIsland.motifs.icon,
    coordinates: worldThemes.carnivalIsland.coordinates,
  },
}

export const eventsData: EventData[] = [
  // ─── WORLD I: THE LAST OUTPOST ─────────────────────────
  {
    id: "flagship-hackathon",
    title: "Voyage of the Code",
    subtitle: "24-Hour Flagship Hackathon",
    category: "technical",
    displayCategory: "Hackathon & Software",
    world: "The Last Outpost",
    day: "Day 01",
    date: "Oct 30, 2026",
    time: "10:00 AM - 10:00 AM (24H)",
    venue: "Main Innovation Bay (Turing Hall)",
    coordinates: "15°28'40\"N 75°01'15\"E",
    logNumber: "LOG Nº 01",
    description:
      "An endurance coding odyssey across uncharted software frontiers. Architect solutions for autonomous maritime systems, edge intelligence, and resilient infrastructure.",
    fullDescription:
      "Voyage of the Code is Avinya's premier 24-hour hackathon. Teams will drop anchor in the Innovation Bay and race against time through night and dawn. Mentors from premier tech firms will navigate alongside you as you build functional prototypes across AI, Web3, Systems, and Open Innovation tracks.",
    image: "/images/events/voyage-code-hackathon.webp",
    accent: "#C85A2B",
    prizePool: "₹1,50,000",
    teamSize: "2 - 4 Explorers",
    featured: true,
    tags: ["24H Hackathon", "AI & Systems", "Flagship"],
    rules: [
      "All code must be written within the 24-hour window.",
      "Open to all undergraduate and postgraduate students.",
      "Projects will be judged on originality, technical depth, and presentation.",
    ],
  },
  {
    id: "algo-storm",
    title: "Algo-Storm",
    subtitle: "Competitive Programming Regatta",
    category: "technical",
    displayCategory: "Competitive Coding",
    world: "The Last Outpost",
    day: "Day 01",
    date: "Oct 30, 2026",
    time: "02:30 PM - 05:30 PM",
    venue: "Silicon Terminal Lab 03",
    coordinates: "15°28'42\"N 75°01'20\"E",
    logNumber: "LOG Nº 02",
    description:
      "Navigate through algorithmic tempests and mathematical reefs. Speed, memory limits, and optimal complexity decide who claims the Grand Mariner trophy.",
    fullDescription:
      "Algo-Storm is an ACM-ICPC style individual algorithmic contest. Face increasingly ferocious problem statements spanning graph theory, dynamic programming, number theory, and computational geometry under ticking clocks and penalty minutes.",
    image: "/images/events/algostorm-regatta.webp",
    accent: "#C85A2B",
    prizePool: "₹50,000",
    teamSize: "Solo Navigator",
    tags: ["Data Structures", "Speed", "ICPC Format"],
    rules: [
      "Standard competitive programming rules apply (C++, Java, Python, Rust).",
      "Live leaderboard freezes in the final 30 minutes.",
      "Plagiarism checks applied strictly post-contest.",
    ],
  },
  {
    id: "cipher-lock-ctf",
    title: "Cipher Lock",
    subtitle: "Maritime Capture The Flag",
    category: "technical",
    displayCategory: "Cybersecurity & Cryptography",
    world: "The Last Outpost",
    day: "Day 01",
    date: "Oct 30, 2026",
    time: "06:00 PM - 11:00 PM",
    venue: "Cyber Ops Sandbox",
    coordinates: "15°28'45\"N 75°01'30\"E",
    logNumber: "LOG Nº 03",
    description:
      "Decrypt classified ship logs, exploit vulnerable nautical communication links, and unravel binary forensics in this high-intensity security expedition.",
    fullDescription:
      "Designed by top security researchers, Cipher Lock plunges participants into a realistic maritime security scenario. Uncover cryptographic clues hidden within audio signals, reverse engineer firmware, exploit memory corruptions, and capture flags.",
    image: "/images/events/cipher-lock-ctf.webp",
    accent: "#C85A2B",
    prizePool: "₹60,000",
    teamSize: "1 - 3 Hackers",
    tags: ["Binary Exploitation", "Cryptography", "Forensics"],
    rules: [
      "Attacking the contest infrastructure is strictly prohibited.",
      "Flag sharing results in immediate team disqualification.",
      "Dynamic scoring system in effect.",
    ],
  },

  // ─── WORLD II: PANDEMONIUM ─────────────────────────────
  {
    id: "robowars-iron-tides",
    title: "Iron Tides Arena",
    subtitle: "Full-Contact Combat Robotics",
    category: "technical",
    displayCategory: "Robotics & Hardware",
    world: "Pandemonium",
    day: "Day 02",
    date: "Oct 31, 2026",
    time: "11:00 AM - 04:00 PM",
    venue: "The Central Amphitheatre Arena",
    coordinates: "15°29'10\"N 75°01'45\"E",
    logNumber: "LOG Nº 04",
    description:
      "Custom 15kg & 30kg combat bots clash within reinforced steel barricades. Spinning blades, pneumatic flippers, and armor plates collide in thunderous glory.",
    fullDescription:
      "Iron Tides is Pandemonium's most adrenaline-fueled battleground. Experience brutal metal-on-metal combat featuring high-kinetic energy vertical spinners, wedge flippers, and drum crushers. Engineered for destruction, tested for resilience.",
    image: "/images/events/robotics-hardware.webp",
    accent: "#2E8B57",
    prizePool: "₹1,00,000",
    teamSize: "3 - 5 Engineers",
    featured: true,
    tags: ["RoboWars", "Combat Tech", "High Energy"],
    rules: [
      "Bots must pass safety inspection and weigh-in checks prior to combat.",
      "3-minute match duration with arena hazards activated.",
      "Radio fail-safes are strictly mandatory.",
    ],
  },
  {
    id: "aero-navis-drones",
    title: "Aero-Navis Gauntlet",
    subtitle: "High-Speed Drone Racing & Autonomy",
    category: "technical",
    displayCategory: "Aerodynamics & Flight",
    world: "Pandemonium",
    day: "Day 02",
    date: "Oct 31, 2026",
    time: "02:00 PM - 06:00 PM",
    venue: "North Flight Corridor",
    coordinates: "15°29'15\"N 75°01'50\"E",
    logNumber: "LOG Nº 05",
    description:
      "FPV quadcopters slice through neon gates, smoke rings, and aerial dive gates at staggering speeds. Piloting reflexes and aerodynamic tuning are put to the ultimate test.",
    fullDescription:
      "The Aero-Navis Gauntlet features dual categories: High-speed FPV pilot racing and Computer Vision Autonomous navigation. Watch multi-rotor crafts maneuver sharp chicanes and high-altitude hairpin curves.",
    image: "/images/events/aerodynamics-flight.webp",
    accent: "#2E8B57",
    prizePool: "₹75,000",
    teamSize: "2 - 4 Pilots",
    tags: ["FPV Racing", "Autonomous Flight", "Aero Tech"],
    rules: [
      "5-inch custom builds and spec classes supported.",
      "Time trial qualifiers followed by 4-drone knockouts.",
      "Emergency propeller disarm test required.",
    ],
  },
  {
    id: "neon-drift-esports",
    title: "Neon Tides Esports",
    subtitle: "Valorant & BGMI Championship",
    category: "technical",
    displayCategory: "Esports & Gaming",
    world: "Pandemonium",
    day: "Day 02",
    date: "Oct 31, 2026",
    time: "05:00 PM - 11:30 PM",
    venue: "Odyssey Gaming Arena",
    coordinates: "15°29'20\"N 75°01'55\"E",
    logNumber: "LOG Nº 06",
    description:
      "Top collegiate squads battle in high-stakes LAN encounters on 240Hz tournament rigs. Tactical precision, clutch callouts, and split-second aim rule the arena.",
    fullDescription:
      "Experience stadium-level collegiate esports production with live caster commentary, instant replay analysis, and roaring crowds. Teams will battle through upper and lower brackets until one champion hoists the Pandemonium Cup.",
    image: "/images/events/esports-gaming.webp",
    accent: "#2E8B57",
    prizePool: "₹70,000",
    teamSize: "5 Players + 1 Sub",
    tags: ["Valorant", "BGMI", "LAN Tournament"],
    rules: [
      "Official tournament ruleset and tournament server clients used.",
      "Standard anti-cheat and hardware verification protocols.",
      "Matches played in Double Elimination BO3 format (BO5 Grand Finals).",
    ],
  },

  // ─── WORLD III: THE CARNIVAL ISLAND ────────────────────
  {
    id: "battle-of-the-bands",
    title: "Symphony of the Seas",
    subtitle: "National Battle of the Bands",
    category: "cultural",
    displayCategory: "Music & Band Showcase",
    world: "The Carnival Island",
    day: "Day 03",
    date: "Nov 01, 2026",
    time: "03:00 PM - 07:00 PM",
    venue: "Central Open-Air Amphitheatre",
    coordinates: "15°29'50\"N 75°02'15\"E",
    logNumber: "LOG Nº 07",
    description:
      "Heavy guitar riffs, brass sections, and electrifying vocal melodies resonate across the festival grounds as student and independent bands compete for the crown.",
    fullDescription:
      "A grand sonic faceoff featuring rock, indie, classical fusion, and western contemporary bands. Judged by distinguished studio musicians and industry producers on composition, tightness, stage presence, and originality.",
    image: "/images/events/music-night.webp",
    accent: "#C5A059",
    prizePool: "₹80,000",
    teamSize: "4 - 8 Musicians",
    tags: ["Live Bands", "Rock & Fusion", "Amphitheatre"],
    rules: [
      "15 minutes stage time including line check.",
      "At least one original composition mandatory.",
      "Full backline (drums, amps, DI) provided on-site.",
    ],
  },
  {
    id: "tidal-wave-choreo",
    title: "Tidal Wave Dance",
    subtitle: "Inter-Collegiate Choreo Showcase",
    category: "cultural",
    displayCategory: "Dance & Performing Arts",
    world: "The Carnival Island",
    day: "Day 03",
    date: "Nov 01, 2026",
    time: "06:00 PM - 09:30 PM",
    venue: "Grand Auditorium Stage",
    coordinates: "15°29'55\"N 75°02'20\"E",
    logNumber: "LOG Nº 08",
    description:
      "Dynamic group formations, cinematic storytelling, and heart-pumping hip-hop and semi-classical choreography set the grand stage ablaze.",
    fullDescription:
      "Dance troupes from across the nation showcase months of intense rehearsal. From breathtaking thematic theatrical dances to lightning-fast hip-hop isolations, Tidal Wave is an unforgettable visual spectacle.",
    image: "/images/events/dance-showcase.webp",
    accent: "#C5A059",
    prizePool: "₹75,000",
    teamSize: "8 - 20 Dancers",
    tags: ["Choreography", "Hip-Hop", "Theatrical"],
    rules: [
      "Time limit: 8-10 minutes per team.",
      "Props allowed upon prior technical clearance.",
      "Scoring based on synchronization, theme interpretation, and technique.",
    ],
  },
  {
    id: "star-pro-nite",
    title: "Star Pro-Nite Finale",
    subtitle: "Celebrity Concert & Grand Voyage Finale",
    category: "cultural",
    displayCategory: "Concert & Grand Finale",
    world: "The Carnival Island",
    day: "Day 03",
    date: "Nov 01, 2026",
    time: "08:30 PM Onwards",
    venue: "Main Fest Grounds",
    coordinates: "15°30'00\"N 75°02'30\"E",
    logNumber: "LOG Nº 09",
    description:
      "The climactic culmination of Avinya. Join thousands of voyagers under the starlit sky for a headline performance by national artists, lasers, and maritime celebration.",
    fullDescription:
      "The ultimate port of call. Avinya concludes with an awe-inspiring headline musical concert, state-of-the-art stage visual mapping, laser show, and collective festival euphoria. Every traveler celebrates the unforgettable journey.",
    image: "/images/events/star-pronite-finale.webp",
    accent: "#C5A059",
    prizePool: "Celebrity Star Night",
    teamSize: "Open to All Voyagers",
    featured: true,
    tags: ["Celebrity Headliner", "Concert", "Grand Finale"],
    rules: [
      "Valid fest delegate wristband required for entry.",
      "Gates close 30 minutes before artist lineup commences.",
      "Photography rules governed by artist management.",
    ],
  },
]
