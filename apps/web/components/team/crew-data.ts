export interface CrewMember {
  id: string
  code: string
  name: string
  role: string
  division: "Secretariat" | "Technical" | "Cultural" | "Operations" | "Advisory"
  station: string
  quote?: string
  avatarInitial: string
  github?: string
  linkedin?: string
}

export interface CrewDivisionTab {
  id: string
  label: string
}

export const CREW_DIVISIONS: CrewDivisionTab[] = [
  { id: "ALL", label: "ALL CREW & OFFICERS" },
  { id: "Secretariat", label: "SECRETARIAT" },
  { id: "Technical", label: "TECHNICAL & CODE" },
  { id: "Cultural", label: "CULTURAL FLEET" },
  { id: "Operations", label: "OPERATIONS & LOGISTICS" },
  { id: "Advisory", label: "ADVISORY" },
]

export const crewMembers: CrewMember[] = [
  {
    id: "sparsh-mittal",
    code: "SEC-01",
    name: "Sparsh Mittal",
    role: "Cultural Secretary // Lead Navigator",
    division: "Secretariat",
    station: "Cultural Flagship Bridge",
    quote: "Harmonizing rhythms, drama, and artistic souls into an unforgettable odyssey.",
    avatarInitial: "SM",
  },
  {
    id: "arya-sajjan",
    code: "SEC-02",
    name: "Arya Sajjan",
    role: "Technical Secretary // Lead Helmsman",
    division: "Secretariat",
    station: "Technical Innovation Bridge",
    quote: "Setting the coordinates for high-stakes coding, robotics, and cyber frontiers.",
    avatarInitial: "AS",
  },
  {
    id: "miku",
    code: "LEAD-03",
    name: "Miku",
    role: "Event Management Lead // Quartermaster",
    division: "Operations",
    station: "Festival Logistics & Execution",
    quote: "Ensuring every cadet, contingent, and voyager navigates smooth waters.",
    avatarInitial: "M",
  },
  {
    id: "shaurya-mittal",
    code: "TECH-01",
    name: "Shaurya Mittal",
    role: "Lead Web Architect // Chief Navigator",
    division: "Technical",
    station: "Digital Fleet & Web Platform",
    quote: "Building digital vessels that embody the elegance of modern engineering.",
    avatarInitial: "SM",
  },
  {
    id: "advisory-faculty",
    code: "ADM-01",
    name: "Dr. Faculty Patron",
    role: "Faculty Advisor // Fleet Commodore",
    division: "Advisory",
    station: "Deanery of Student Affairs",
    quote: "Guiding the youth of IIIT Dharwad toward new intellectual and cultural shores.",
    avatarInitial: "FP",
  },
  {
    id: "lead-curator",
    code: "CULT-02",
    name: "Aanya Sen",
    role: "Head of Music & Pro-Nites",
    division: "Cultural",
    station: "The Carnival Island Amphitheatre",
    quote: "Curating soundscapes that echo long after the anchors are dropped.",
    avatarInitial: "AS",
  },
  {
    id: "lead-robotics",
    code: "TECH-02",
    name: "Rohan Deshmukh",
    role: "Robotics Arena Marshall",
    division: "Technical",
    station: "Pandemonium Combat Arena",
    quote: "Precision mechanics and raw competitive steel in the ring.",
    avatarInitial: "RD",
  },
  {
    id: "lead-pr",
    code: "OPS-02",
    name: "Pooja Hegde",
    role: "Public Relations & Contingents",
    division: "Operations",
    station: "External Port Communications",
    quote: "Welcoming voyagers from over a hundred technical institutes across India.",
    avatarInitial: "PH",
  },
]
