export interface ScheduleItem {
  time: string
  title: string
  venue: string
  category: "Technical" | "Cultural" | "Keynote" | "Ceremony"
  description: string
}

export interface DaySchedule {
  dayNumber: string
  date: string
  destination: string
  tagline: string
  coordinates: string
  items: ScheduleItem[]
}

export const scheduleData: DaySchedule[] = [
  {
    dayNumber: "DAY 01",
    date: "FRIDAY // OCTOBER 30, 2026",
    destination: "THE LAST OUTPOST",
    tagline: "Anchors Aweigh & The Technical Frontier",
    coordinates: "15°28'40\"N  75°01'15\"E",
    items: [
      {
        time: "09:00 AM",
        title: "ANCHORS AWEIGH // OPENING CEREMONY",
        venue: "Main Auditorium, IIIT Dharwad",
        category: "Ceremony",
        description: "Official inaugural address by Director, lighting of the lamps, and voyage theme unveiling.",
      },
      {
        time: "11:00 AM",
        title: "FLAGSHIP CODE ODYSSEY // 24-HOUR HACKATHON KICKOFF",
        venue: "Turing Computing Block",
        category: "Technical",
        description: "Over 100 teams begin 24 hours of non-stop development across AI, Web3, and Open Innovation tracks.",
      },
      {
        time: "02:30 PM",
        title: "ALGO-STORM // COMPETITIVE CODING ROUND 01",
        venue: "Lab Complex Alpha",
        category: "Technical",
        description: "Speed algorithm challenges and data structure optimization duels.",
      },
      {
        time: "06:30 PM",
        title: "SUNSET HARBOR // ACOUSTIC VOYAGE & TECH TALKS",
        venue: "Amphitheatre",
        category: "Cultural",
        description: "Unplugged musical performances under the evening sky coupled with guest keynote lectures.",
      },
    ],
  },
  {
    dayNumber: "DAY 02",
    date: "SATURDAY // OCTOBER 31, 2026",
    destination: "PANDEMONIUM",
    tagline: "Into the Storm — High Stakes & Mechanical Clashes",
    coordinates: "15°29'10\"N  75°01'45\"E",
    items: [
      {
        time: "10:00 AM",
        title: "ROBO-WARS // ARENA CLASH OF METALS",
        venue: "The Central Arena",
        category: "Technical",
        description: "Combat robots duel in high-impact survival matches with pneumatic flippers and spinning drums.",
      },
      {
        time: "11:30 AM",
        title: "HACKATHON JURY DEFENSE & DEMOS",
        venue: "Innovation Pavilion",
        category: "Technical",
        description: "Top 20 hackathon finalist teams pitch live working prototypes to industry evaluators.",
      },
      {
        time: "02:00 PM",
        title: "NEON DRIFT ESPORTS GRAND FINALS",
        venue: "E-Sports Theater",
        category: "Technical",
        description: "Valorant and BGMI five-vs-five collegiate showdowns broadcast on the central arena jumbotron.",
      },
      {
        time: "06:00 PM",
        title: "BATTLE OF THE BANDS // SOUNDS OF SIKANDAR",
        venue: "Main Open Air Theatre",
        category: "Cultural",
        description: "Collegiate rock, indie, and fusion bands battle it out for festival sound supremacy.",
      },
    ],
  },
  {
    dayNumber: "DAY 03",
    date: "SUNDAY // NOVEMBER 01, 2026",
    destination: "THE CARNIVAL ISLAND",
    tagline: "Shore Leave for the Soul — Grand Pro-Nite Finale",
    coordinates: "15°29'55\"N  75°02'20\"E",
    items: [
      {
        time: "11:00 AM",
        title: "THEATRE & STREET PLAY SHOWCASE // NAUKAD NATAK",
        venue: "Amphitheatre Courtyard",
        category: "Cultural",
        description: "Dramatic social and satirical street plays performed by visiting college troupes.",
      },
      {
        time: "02:30 PM",
        title: "HIGH TIDE CHOREO-NIGHT // DANCE ENSEMBLE",
        venue: "Main Auditorium",
        category: "Cultural",
        description: "High-octane Eastern and Western group dance routines judged by choreographers.",
      },
      {
        time: "05:30 PM",
        title: "VALEDICTORY & BOUNTY CEREMONY",
        venue: "Main Auditorium",
        category: "Ceremony",
        description: "Distribution of awards, trophies, and ₹5,00,000+ total festival bounty prizes.",
      },
      {
        time: "07:30 PM",
        title: "STAR PRO-NITE CONCERT // CELEBRITY HEADLINER",
        venue: "Open Air Stadium Grounds",
        category: "Cultural",
        description: "Massive musical concert featuring renowned national headlining musicians under the stars.",
      },
    ],
  },
]
