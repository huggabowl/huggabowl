import { NavLink, Link } from "react-router";

const links = [
  { to: "/visit-us", label: "Visit us" },
  { to: "/stories", label: "Stories" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/catering", label: "Catering" },
];

export function Nav() {
  return (
    <header className="border-b-2 border-ink bg-bone">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-3 px-6 py-5">
        <Link to="/" className="inline-flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-ink uppercase sm:text-3xl">
            Huggabowl
          </span>
          <span aria-hidden className="block size-1.5 bg-neon" />
        </Link>
        <nav className="flex flex-wrap items-center gap-x-1 gap-y-2 text-xs font-semibold tracking-wider uppercase sm:gap-x-3 sm:text-sm">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className="marker-underline px-2 py-1.5 text-ink">
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            className="ml-1 inline-flex items-center border-2 border-ink bg-neon px-3 py-2 text-ink transition-colors hover:bg-neon-deep sm:px-4"
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
