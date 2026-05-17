import { Link } from "react-router";
import type { Route } from "./+types/donate.success";

export function meta(_args: Route.MetaArgs) {
  return [{ title: "Thank you · Huggabowl" }];
}

export default function DonateSuccess() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <p className="text-sm font-semibold tracking-wide text-orange-700 uppercase">Thank you</p>
      <h1 className="mt-2 font-serif text-4xl font-extrabold text-stone-900 md:text-5xl">
        Your donation feeds a neighbour.
      </h1>
      <p className="mt-4 text-lg text-stone-700">
        We&rsquo;ll email you a Stripe receipt right away. A formal CRA charitable tax receipt will
        follow from Huggabowl directly.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="rounded-md bg-orange-700 px-6 py-3 font-semibold text-white hover:bg-orange-800"
        >
          Back to home
        </Link>
        <Link
          to="/stories"
          className="rounded-md border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-800 hover:bg-stone-50"
        >
          Read stories
        </Link>
      </div>
    </div>
  );
}
