import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl font-extrabold text-orange-700">Huggabowl</p>
          <p className="mt-2 text-sm text-stone-600">
            Buy a meal, give a meal — made from rescued food, served with purpose.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-stone-900">Visit</p>
          <ul className="mt-2 space-y-1 text-sm text-stone-600">
            <li>Olympic Plaza</li>
            <li>Calgary, Alberta</li>
            <li>
              <Link to="/visit-us" className="underline hover:text-orange-700">
                Hours &amp; location details
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-stone-900">Get involved</p>
          <ul className="mt-2 space-y-1 text-sm text-stone-600">
            <li>
              <Link to="/donate" className="underline hover:text-orange-700">
                Donate
              </Link>
            </li>
            <li>
              <Link to="/volunteer" className="underline hover:text-orange-700">
                Volunteer
              </Link>
            </li>
            <li>
              <Link to="/catering" className="underline hover:text-orange-700">
                Catering
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-6 py-4 text-xs text-stone-500">
          Huggabowl is a registered Canadian charity. CRA #735654550RR0001 · &copy;{" "}
          {new Date().getFullYear()} Huggabowl
        </div>
      </div>
    </footer>
  );
}
