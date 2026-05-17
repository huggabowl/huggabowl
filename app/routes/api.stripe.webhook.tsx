import type { Route } from "./+types/api.stripe.webhook";

export async function action({ request }: Route.ActionArgs) {
  const { handleStripeWebhook } = await import("~/lib/stripe.server");
  return handleStripeWebhook(request);
}

export function loader() {
  return new Response("Method Not Allowed", { status: 405 });
}
