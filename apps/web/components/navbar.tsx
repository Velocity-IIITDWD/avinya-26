import Link from "next/link"

const links = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/events", label: "Events" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4"
      >
        <Link className="font-semibold" href="/">
          Avinya
        </Link>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              className="transition-colors hover:text-foreground"
              href={href}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
