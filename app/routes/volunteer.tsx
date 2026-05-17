import type { Route } from "./+types/volunteer";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Volunteer · Huggabowl" },
    {
      name: "description",
      content:
        "Cook, serve, drive, or help behind the scenes. Huggabowl is volunteer-powered — we need your hands.",
    },
  ];
}

export default function Volunteer() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl font-extrabold text-stone-900 md:text-5xl">Volunteer</h1>
      <p className="mt-4 text-lg text-stone-700">
        Huggabowl is volunteer-powered. Chefs turn rescued ingredients into soup; servers bring it
        to the plaza; drivers move food from donors to the kitchen. There&rsquo;s a role for almost
        anyone.
      </p>

      <ul className="mt-8 space-y-4">
        <Role
          title="Volunteer chefs"
          body="Help prep and cook in the kitchen. Food handler training is an asset but not required."
        />
        <Role
          title="Cart shifts"
          body="Serve bowls at Olympic Plaza, greet guests, hand out tokens. Friendly is the only requirement."
        />
        <Role
          title="Food rescue drivers"
          body="Pick up surplus food from partner restaurants and suppliers and bring it to the kitchen."
        />
      </ul>

      <div className="mt-10 rounded-lg border border-stone-200 bg-white p-6">
        <h2 className="font-serif text-2xl font-bold text-stone-900">Ready to sign up?</h2>
        <p className="mt-2 text-stone-700">
          Send a note to <span className="font-medium">volunteer@huggabowl.com</span> telling us a
          bit about yourself and how you&rsquo;d like to help, and we&rsquo;ll match you to a role.
        </p>
      </div>
    </div>
  );
}

function Role({ title, body }: { title: string; body: string }) {
  return (
    <li className="rounded-lg border border-stone-200 bg-white p-5">
      <p className="font-serif text-xl font-bold text-stone-900">{title}</p>
      <p className="mt-1 text-stone-700">{body}</p>
    </li>
  );
}
