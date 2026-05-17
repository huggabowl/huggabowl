# Architecture

A one-page mental model of how the site is put together.

## Rendering model

React Router v7 in **framework mode** with SSR enabled
([`react-router.config.ts`](../react-router.config.ts)). Every request
hits a server-side render first, then hydrates on the client. There is no
"SPA-only" mode.

```
browser  →  Netlify Function  →  React Router SSR  →  HTML
                                       ↓
                                  loaders run
                                       ↓
                                JSON loader data
                                       ↓
                              streamed to browser
                                       ↓
                                React hydrates
```

The Netlify adapter (`@netlify/vite-plugin-react-router`) packages the
SSR bundle as a Netlify Function and serves the client assets from the
Netlify CDN.

## Routes

Defined explicitly in [`app/routes.ts`](../app/routes.ts):

| URL                   | Module                          | Notes                           |
| --------------------- | ------------------------------- | ------------------------------- |
| `/`                   | `routes/home.tsx`               | Marketing landing page          |
| `/visit-us`           | `routes/visit-us.tsx`           | Location + hours                |
| `/volunteer`          | `routes/volunteer.tsx`          | Roles + email contact           |
| `/catering`           | `routes/catering.tsx`           | Inquiry overview                |
| `/donate`             | `routes/donate.tsx`             | Donation form (has `action`)    |
| `/donate/success`     | `routes/donate.success.tsx`     | Stripe success redirect         |
| `/donate/cancel`      | `routes/donate.cancel.tsx`      | Stripe cancel redirect          |
| `/stories`            | `routes/stories.tsx`            | MDX story index (has `loader`)  |
| `/stories/:slug`      | `routes/stories.$slug.tsx`      | Single MDX story (has `loader`) |
| `/api/stripe/webhook` | `routes/api.stripe.webhook.tsx` | POST receiver (has `action`)    |

`root.tsx` provides the HTML shell, Nav, Footer, error boundary, and
imports the Tailwind stylesheet.

## Data flow

**Stories list (`/stories`):**

```
loader → listStories() ──▶ Array<{slug, title, date, source, excerpt, ...}>
                                  ↓
                  rendered as a list of <StoryCard> links
```

**Single story (`/stories/:slug`):**

```
loader → getStoryFrontmatter(slug)  ──▶  serializable frontmatter
                                            (passed via loaderData)
component:
  - reads frontmatter from loaderData
  - calls getStoryComponent(slug)  ──▶  React MDX component
  - renders <Component />
```

Why two functions? The `Component` is not JSON-serializable across the
loader boundary, but the bundled MDX modules exist on both server and
client (thanks to Vite's `import.meta.glob` with `eager: true`). So we
serialize only the frontmatter, and look up the component at render time
on whichever side is rendering.

**Donate flow (`/donate`):**

```
form POST → action → createDonationCheckout(request)
                         ↓
                   parses amount
                   creates Stripe Checkout Session
                   returns redirect(session.url)
                         ↓
              browser ends up on Stripe-hosted page
                         ↓
              pay → redirect to /donate/success
              cancel → redirect to /donate/cancel
```

**Webhook (`/api/stripe/webhook`):**

```
POST from Stripe → action → handleStripeWebhook(request)
                                ↓
                   verify signature (STRIPE_WEBHOOK_SECRET)
                   switch on event.type
                   v1: just 200 OK
                   future: trigger CRA receipt email
```

## File layout

```
app/
├── root.tsx               — HTML shell, layout, error boundary
├── routes.ts              — route table
├── tailwind.css           — global stylesheet (`@import "tailwindcss"`)
├── routes/                — one file per URL
├── components/            — Nav, Footer, DonateForm, etc.
├── content/stories/*.mdx  — story body + frontmatter
├── lib/
│   ├── stripe.server.ts   — server-only Stripe client + handlers
│   └── stories.ts         — MDX index (universal: server + client)
└── test/setup.ts          — vitest setup
```

The `.server.ts` suffix on `stripe.server.ts` is meaningful: React
Router's bundler will keep it out of the client bundle even if it's
imported from a route. Don't rename it.

## Environment & secrets

Only the donate flow reads secrets:

- `STRIPE_SECRET_KEY` — server-side Stripe SDK.
- `STRIPE_PUBLISHABLE_KEY` — currently unused (Stripe Checkout doesn't
  need it client-side), kept in `.env.example` for future use.
- `STRIPE_WEBHOOK_SECRET` — webhook signature verification.
- `BASE_URL` — used to build absolute `success_url` / `cancel_url`.
  Optional locally (falls back to request origin); set explicitly in
  production.

## Things to know before changing

- **`vite.config.ts` plugin order matters.** `tailwindcss` and `mdx`
  first, then `reactRouter` + `netlifyReactRouter`. Don't reorder unless
  you understand why.
- **Vitest uses its own config.** Don't add the RR plugin to
  `vitest.config.ts`.
- **MDX files must have frontmatter** with `title`, `date`, `source`,
  `excerpt`. The loader throws at startup if any are missing.
- **No `npm start` in production.** Netlify runs the function directly;
  `npm start` (via `react-router-serve`) is only for local production
  smoke tests.
