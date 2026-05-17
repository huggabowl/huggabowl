import type { Route } from "./+types/donate";
import { DonateForm } from "~/components/DonateForm";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Donate · Huggabowl" },
    {
      name: "description",
      content:
        "Donate to Huggabowl. Every dollar puts a hot meal in the hands of someone who needs it.",
    },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const { createDonationCheckout } = await import("~/lib/stripe.server");
  return createDonationCheckout(request);
}

export default function Donate() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-serif text-4xl font-extrabold text-stone-900 md:text-5xl">
        Donate to Huggabowl
      </h1>
      <p className="mt-4 text-lg text-stone-700">
        Every $5 puts a hot Huggabowl in someone&rsquo;s hands. Donations of any size are
        tax-receiptable in Canada (CRA #735654550RR0001).
      </p>
      <div className="mt-10">
        <DonateForm />
      </div>
    </div>
  );
}
