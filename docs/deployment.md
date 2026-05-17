# Deployment

The site deploys to **Netlify** from this repo. Server rendering runs as
a Netlify Function via `@netlify/vite-plugin-react-router`. Static assets
are served from Netlify's CDN.

## First-time Netlify setup

1. **Create a Netlify site** from the GitHub repo
   (Netlify dashboard → Add new site → Import an existing project).
2. **Build settings** — Netlify reads
   [`netlify.toml`](../netlify.toml), so you shouldn't have to set
   anything by hand. Confirm:
   - Build command: `npm run build`
   - Publish directory: `build/client`
   - Node version: 22
3. **Add environment variables** in
   `Site configuration → Environment variables`:

   | Key                      | Value                                           |
   | ------------------------ | ----------------------------------------------- |
   | `STRIPE_SECRET_KEY`      | from <https://dashboard.stripe.com/apikeys>     |
   | `STRIPE_PUBLISHABLE_KEY` | from the same page                              |
   | `STRIPE_WEBHOOK_SECRET`  | from the webhook endpoint you create            |
   | `BASE_URL`               | `https://www.huggabowl.com` once DNS is pointed |

   Use **test keys** until launch. Switch to live keys when ready.

4. **Custom domain.** Point `huggabowl.com` and `www.huggabowl.com` at
   Netlify per their domain docs. Netlify handles HTTPS via Let's
   Encrypt.

## Stripe

### Account setup

1. Create a Stripe account at <https://dashboard.stripe.com/register>.
2. Activate the Canadian charity / business profile.
3. In **Branding**, upload the Huggabowl logo and set the brand colour to
   match the site (orange-700, `#c2410c`).
4. In **Settings → Customer emails**, enable **Successful payments** so
   Stripe sends a receipt automatically on each donation.

### Connecting this site

- Put your `sk_test_…` and `pk_test_…` keys into `.env` locally and into
  Netlify's environment variables in production.
- The donate flow uses **Stripe Checkout** (hosted page). No additional
  Stripe configuration is required to take payments.

### Webhooks

`POST /api/stripe/webhook` is wired up but currently a no-op (returns
`200 OK` after signature verification). To enable it:

1. In the Stripe dashboard, **Developers → Webhooks → Add endpoint**.
2. URL: `https://www.huggabowl.com/api/stripe/webhook`.
3. Events to send: at minimum `checkout.session.completed`.
4. Copy the **Signing secret** into Netlify as `STRIPE_WEBHOOK_SECRET`.

For local testing:

```bash
stripe listen --forward-to localhost:5173/api/stripe/webhook
```

Stripe CLI prints a temporary signing secret — paste it into `.env`.

### CRA tax-receipt automation — TODO

The donate flow currently:

- Charges via Stripe.
- Stripe emails a payment receipt (counts as a proof of payment, **not**
  a CRA-compliant charitable receipt).
- Doesn't issue a CRA charitable receipt automatically.

For v1, the charity handles CRA receipts **manually** (e.g., pulled from
the Stripe dashboard, then emailed quarterly). Automating this is a
known follow-up: extend
[`handleStripeWebhook`](../app/lib/stripe.server.ts) to listen for
`checkout.session.completed`, look up donor email, and trigger a
templated CRA receipt email through a transactional provider (Resend,
Postmark, etc.).

## Local production smoke test

Before pushing a meaningful change, you can sanity-check the production
bundle locally:

```bash
npm run build
npm run start
```

Open <http://localhost:3000>. Note this uses `react-router-serve` (a
plain Node server), not Netlify Functions — it's a rough check, not a
faithful preview of the deployed environment. For that, use
`netlify dev` (requires the Netlify CLI installed separately).

## CI / preview deploys

Netlify automatically creates a **deploy preview** for every PR on
GitHub. The deploy URL appears as a GitHub check; share it with reviewers
to QA changes before merging to `main`.

The GitHub Actions workflow at
[`.github/workflows/ci.yml`](../.github/workflows/ci.yml) is the gate
for merges: it must pass typecheck, lint, format check, tests, and
build.

## Rollback

Netlify keeps every prior deploy. To roll back:

1. Netlify dashboard → Deploys.
2. Click the deploy you want to restore.
3. **Publish deploy** to make it live again.

No code change required.
