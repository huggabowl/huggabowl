import type { Route } from "./+types/catering";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Catering · Huggabowl" },
    {
      name: "description",
      content:
        "Cater your next event with Huggabowl. Every bowl you serve also feeds someone in need.",
    },
  ];
}

export default function Catering() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl font-extrabold text-stone-900 md:text-5xl">Catering</h1>
      <p className="mt-4 text-lg text-stone-700">
        Hosting an event in Calgary? Let us bring the soup. Every Huggabowl we serve at your event
        funds another meal for someone facing food insecurity — so your catering bill doubles as
        community impact.
      </p>

      <div className="mt-10 space-y-6">
        <div className="rounded-lg border border-stone-200 bg-white p-6">
          <h2 className="font-serif text-2xl font-bold text-stone-900">What we serve</h2>
          <p className="mt-2 text-stone-700">
            Rotating menu of hearty soups made from rescued ingredients. We can usually accommodate
            vegan, vegetarian, and gluten-free guests with advance notice.
          </p>
        </div>
        <div className="rounded-lg border border-stone-200 bg-white p-6">
          <h2 className="font-serif text-2xl font-bold text-stone-900">Request a quote</h2>
          <p className="mt-2 text-stone-700">
            Email <span className="font-medium">catering@huggabowl.com</span> with your date,
            headcount, and venue. We&rsquo;ll come back with a menu and price.
          </p>
        </div>
      </div>
    </div>
  );
}
