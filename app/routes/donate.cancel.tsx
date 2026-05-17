import { Link } from "react-router";
import type { Route } from "./+types/donate.cancel";

export function meta(_args: Route.MetaArgs) {
  return [{ title: "Donation cancelled · Huggabowl" }];
}

export default function DonateCancel() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-serif text-4xl font-extrabold text-stone-900 md:text-5xl">
        No charge was made.
      </h1>
      <p className="mt-4 text-lg text-stone-700">
        Your donation was cancelled before it completed. If something went wrong, please email us at{" "}
        <span className="font-medium">hello@huggabowl.com</span>.
      </p>
      <div className="mt-8">
        <Link
          to="/donate"
          className="rounded-md bg-orange-700 px-6 py-3 font-semibold text-white hover:bg-orange-800"
        >
          Try again
        </Link>
      </div>
    </div>
  );
}
