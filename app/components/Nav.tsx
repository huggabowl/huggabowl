import { NavLink, Link } from "react-router";

const links = [
  { to: "/visit-us", label: "Visit us" },
  { to: "/stories", label: "Stories" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/catering", label: "Catering" },
];

export function Nav() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-extrabold text-orange-700">Huggabowl</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 transition-colors ${
                  isActive ? "bg-orange-50 text-orange-800" : "text-stone-700 hover:bg-stone-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            className="ml-2 rounded-md bg-orange-700 px-4 py-2 text-white shadow-sm transition-colors hover:bg-orange-800"
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
