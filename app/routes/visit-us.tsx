import type { Route } from "./+types/visit-us";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Visit us · Huggabowl" },
    {
      name: "description",
      content:
        "Find the Huggabowl cart at Olympic Plaza in downtown Calgary. Stop by for a hot bowl and pay it forward.",
    },
  ];
}

export default function VisitUs() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl font-extrabold text-stone-900 md:text-5xl">Visit us</h1>
      <p className="mt-4 text-lg text-stone-700">
        You&rsquo;ll find our cart at Olympic Plaza in downtown Calgary. Come for the soup, stay for
        the conversation.
      </p>

      <div className="mt-10 grid gap-6 rounded-lg border border-stone-200 bg-white p-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-wide text-orange-700 uppercase">Location</p>
          <p className="mt-2 text-stone-800">
            Olympic Plaza
            <br />
            228 8 Ave SE
            <br />
            Calgary, Alberta
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-orange-700 uppercase">Hours</p>
          <p className="mt-2 text-stone-800">
            Hours vary by season and weather.
            <br />
            Follow us on social for the next pop-up.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-lg bg-orange-50 p-6">
        <h2 className="font-serif text-2xl font-bold text-stone-900">
          Can&rsquo;t make it in person?
        </h2>
        <p className="mt-2 text-stone-700">
          You can still pay it forward. Every dollar donated puts a Huggabowl in someone&rsquo;s
          hands.
        </p>
      </div>
    </div>
  );
}
