import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-bone">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-ink uppercase">Huggabowl</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink">
            Buy a meal, give a meal. Hot soup from a volunteer-run cart in downtown Calgary that
            turns paid lunches into free meals for neighbours.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-widest text-fog uppercase">Visit</p>
          <ul className="mt-4 space-y-2 text-sm text-ink">
            <li>Olympic Plaza, Calgary</li>
            <li>
              <Link to="/visit-us" className="marker-underline">
                Hours &amp; directions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-widest text-fog uppercase">Get involved</p>
          <ul className="mt-4 space-y-2 text-sm text-ink">
            <li>
              <Link to="/donate" className="marker-underline">
                Donate
              </Link>
            </li>
            <li>
              <Link to="/volunteer" className="marker-underline">
                Volunteer
              </Link>
            </li>
            <li>
              <Link to="/catering" className="marker-underline">
                Catering
              </Link>
            </li>
            <li>
              <Link to="/stories" className="marker-underline">
                Press &amp; stories
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/15">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs tracking-wide text-fog">
          Huggabowl is a registered Canadian charity. CRA #735654550RR0001 &middot; &copy;{" "}
          {new Date().getFullYear()} Huggabowl
        </div>
      </div>
    </footer>
  );
}
