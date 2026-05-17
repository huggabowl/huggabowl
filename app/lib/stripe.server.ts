import Stripe from "stripe";
import { redirect } from "react-router";

let cachedClient: Stripe | null = null;

function getStripe(): Stripe {
  if (cachedClient) return cachedClient;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      "STRIPE_SECRET_KEY is not set. Copy .env.example to .env and add Stripe test keys.",
    );
  }
  cachedClient = new Stripe(key);
  return cachedClient;
}

function getBaseUrl(request: Request): string {
  if (process.env.BASE_URL) return process.env.BASE_URL;
  const url = new URL(request.url);
  return `${url.protocol}//${url.host}`;
}

const MIN_DONATION_CENTS = 100; // $1
const MAX_DONATION_CENTS = 1_000_000; // $10,000 cap to avoid mistakes

export async function createDonationCheckout(request: Request) {
  const formData = await request.formData();
  const rawAmount = formData.get("amount");
  const amountDollars = Number(rawAmount);

  if (!Number.isFinite(amountDollars) || amountDollars <= 0) {
    throw new Response("Please choose a valid donation amount.", {
      status: 400,
    });
  }

  const amountCents = Math.round(amountDollars * 100);
  if (amountCents < MIN_DONATION_CENTS) {
    throw new Response("Minimum donation is $1.", { status: 400 });
  }
  if (amountCents > MAX_DONATION_CENTS) {
    throw new Response("For donations over $10,000, please contact us.", {
      status: 400,
    });
  }

  const baseUrl = getBaseUrl(request);
  const session = await getStripe().checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "cad",
          unit_amount: amountCents,
          product_data: {
            name: "Huggabowl donation",
            description:
              "Funds hot meals served from the Huggabowl cart at Olympic Plaza, Calgary.",
          },
        },
        quantity: 1,
      },
    ],
    submit_type: "donate",
    success_url: `${baseUrl}/donate/success`,
    cancel_url: `${baseUrl}/donate/cancel`,
  });

  if (!session.url) {
    throw new Response("Stripe did not return a checkout URL.", { status: 502 });
  }
  return redirect(session.url);
}

export async function handleStripeWebhook(request: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");
  if (!secret || !signature) {
    return new Response("Webhook misconfigured", { status: 400 });
  }

  const payload = await request.text();
  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(payload, signature, secret);
  } catch {
    return new Response("Invalid signature", { status: 400 });
  }

  // v1: just acknowledge. CRA tax-receipt automation is documented in
  // docs/deployment.md as a future TODO.
  switch (event.type) {
    case "checkout.session.completed":
      // TODO: record donation, trigger CRA receipt email
      break;
    default:
      break;
  }
  return new Response("ok", { status: 200 });
}
