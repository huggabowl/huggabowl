import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Huggabowl — Buy a meal, give a meal" },
    {
      name: "description",
      content:
        "Huggabowl serves hot, nourishing meals from a food cart at Olympic Plaza in Calgary. Buy a meal, give a meal — made from rescued food, served with purpose.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-orange-50 to-stone-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold tracking-wide text-orange-700 uppercase">
            Olympic Plaza · Calgary
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-tight font-extrabold text-stone-900 md:text-6xl">
            Buy a meal, give a meal — made from rescued food, served with purpose.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone-700">
            Huggabowls are hot, nourishing meals served from our food cart. When you buy a $5 token,
            we pass that same meal on to someone facing food insecurity — no questions asked.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/donate"
              className="rounded-md bg-orange-700 px-6 py-3 font-semibold text-white shadow-sm hover:bg-orange-800"
            >
              Donate a meal
            </Link>
            <Link
              to="/visit-us"
              className="rounded-md border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-800 hover:bg-stone-50"
            >
              Visit the cart
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <Pillar
            title="Rescued food, real meals"
            body="We purchase surplus food from local businesses and turn it into fresh, delicious meals instead of letting it go to waste."
          />
          <Pillar
            title="Served with dignity"
            body="Everyone deserves a nourishing meal — our Huggabowls are served with dignity, whether you're buying lunch or using a token."
          />
          <Pillar
            title="Volunteer-powered"
            body="Volunteer chefs transform donated ingredients into high-quality soup and meals shared from our cart at Olympic Plaza."
          />
        </div>
      </section>

      <section className="bg-orange-700 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">One meal feeds two.</h2>
            <p className="mt-2 max-w-xl text-orange-100">
              Your $5 buys lunch for you and a meal for someone who needs it. That&rsquo;s the whole
              model.
            </p>
          </div>
          <Link
            to="/donate"
            className="rounded-md bg-white px-6 py-3 font-semibold text-orange-800 shadow-sm hover:bg-orange-50"
          >
            Donate now
          </Link>
        </div>
      </section>
    </>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-serif text-xl font-bold text-stone-900">{title}</h3>
      <p className="mt-2 text-stone-700">{body}</p>
    </div>
  );
}
