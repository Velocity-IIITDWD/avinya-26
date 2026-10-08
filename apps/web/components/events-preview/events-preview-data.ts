export interface EventItem {
  id: string
  title: string
  code: string
  world: "The Last Outpost" | "Pandemonium" | "The Carnival Island"
  category: "Technical" | "Cultural" | "Gaming" | "Flagship"
  date: string
  bounty: string
  teamSize: string
  description: string
  status: "REGISTRATION OPEN" | "LIMITED BERTHS" | "HIGH DEMAND"
}

export const sampleEvents: EventItem[] = [
  {
    id: "hack-odyssey",
    title: "CODE ODYSSEY // 24H HACKATHON",
    code: "EXP-01",
    world: "The Last Outpost",
    category: "Flagship",
    date: "OCTOBER 30",
    bounty: "₹1,50,000",
    teamSize: "2 - 4 CADETS",
    description: "Anchor in the digital tempest. Build cutting-edge AI, Web3, or systems software solutions before the morning tide breaks.",
    status: "REGISTRATION OPEN",
  },
  {
    id: "robowars",
    title: "IRONCLAD ROBO-WARS",
    code: "EXP-02",
    world: "Pandemonium",
    category: "Technical",
    date: "OCTOBER 31",
    bounty: "₹1,00,000",
    teamSize: "1 - 5 CADETS",
    description: "Heavy metal carnage in our reinforced nautical arena. Wired and wireless bots duel to the finish with spinners and flippers.",
    status: "HIGH DEMAND",
  },
  {
    id: "battle-bands",
    title: "BATTLE OF THE BANDS // SOUNDS OF SIKANDAR",
    code: "EXP-03",
    world: "The Carnival Island",
    category: "Cultural",
    date: "NOVEMBER 01",
    bounty: "₹75,000",
    teamSize: "3 - 8 ARTISTS",
    description: "Rock the open seas. Premier collegiate musical acts clash with guitar solos, thunderous drums, and original compositions.",
    status: "REGISTRATION OPEN",
  },
  {
    id: "algo-storm",
    title: "ALGO-STORM // SPEED PROGRAMMING",
    code: "EXP-04",
    world: "The Last Outpost",
    category: "Technical",
    date: "OCTOBER 30",
    bounty: "₹50,000",
    teamSize: "SOLO VOYAGER",
    description: "Test algorithmic endurance through grueling rounds of dynamic programming, graph traversal, and mathematical optimization.",
    status: "LIMITED BERTHS",
  },
  {
    id: "neon-drift",
    title: "NEON DRIFT // ESPORTS CHAMPIONSHIP",
    code: "EXP-05",
    world: "Pandemonium",
    category: "Gaming",
    date: "OCTOBER 31",
    bounty: "₹60,000",
    teamSize: "5 CADETS",
    description: "Tactical FPS warfare on high-refresh rigs. Compete in Valorant and BGMI bracket play for regional glory.",
    status: "REGISTRATION OPEN",
  },
  {
    id: "choreonite",
    title: "HIGH TIDE CHOREO-NIGHT",
    code: "EXP-06",
    world: "The Carnival Island",
    category: "Cultural",
    date: "NOVEMBER 01",
    bounty: "₹80,000",
    teamSize: "8 - 25 DANCERS",
    description: "Electrifying synchronized group dance competition featuring thematic Western, Eastern, and Contemporary maritime choreographies.",
    status: "HIGH DEMAND",
  },
]
