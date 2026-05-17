# Local development

## Requirements

- **Node 22 or newer** (`node --version` to check). Specified in
  `package.json` `engines` and pinned in CI.
- npm 10+.
- A clone of this repo.

## First-time setup

```bash
npm install
cp .env.example .env
# edit .env to add Stripe test keys from https://dashboard.stripe.com/apikeys
```

`STRIPE_SECRET_KEY` is required for the donate flow. The rest of the site
runs without any env vars set.

## Day-to-day

```bash
npm run dev
```

The Vite dev server prints a URL (default <http://localhost:5173>). Hot
reload works for everything: route components, Tailwind classes, MDX
content, server `loader`/`action` code.

## All scripts

| Command                 | What it does                                        |
| ----------------------- | --------------------------------------------------- |
| `npm run dev`           | Vite dev server with HMR                            |
| `npm run build`         | Production build (client + SSR)                     |
| `npm run start`         | Serve the production build via `react-router-serve` |
| `npm run typecheck`     | Regenerate React Router types + `tsc --noEmit`      |
| `npm run lint`          | `oxlint` over all source                            |
| `npm run format`        | `oxfmt .` — rewrites files                          |
| `npm run format:check`  | `oxfmt --check .` — used in CI                      |
| `npm test`              | `vitest run` (single pass)                          |
| `npm run test:watch`    | Vitest in watch mode                                |
| `npm run test:coverage` | Vitest with V8 coverage                             |

## Testing the donate flow locally

1. Put real Stripe **test** keys (`sk_test_…` and `pk_test_…`) into
   `.env`.
2. `npm run dev`.
3. Visit <http://localhost:5173/donate>, pick an amount, submit.
4. You'll be redirected to Stripe Checkout.
5. Pay with the Stripe test card `4242 4242 4242 4242`, any future
   expiry, any CVC.
6. You should land back at `/donate/success`.

To test webhook handling locally, install the Stripe CLI and run:

```bash
stripe listen --forward-to localhost:5173/api/stripe/webhook
```

The CLI prints a temporary signing secret — copy it into `.env` as
`STRIPE_WEBHOOK_SECRET` and restart the dev server.

## Writing tests

Vitest configuration lives in
[`vitest.config.ts`](../vitest.config.ts). Setup
(`@testing-library/jest-dom`, `matchMedia` shim) is in
[`app/test/setup.ts`](../app/test/setup.ts).

Place test files next to the code they test, named `*.test.tsx` or
`*.test.ts`. For example, `app/components/Nav.test.tsx` tests
`app/components/Nav.tsx`.

When testing a component that uses React Router (`<Link>`, `<NavLink>`,
`useLoaderData`, etc.), wrap it in `createRoutesStub`:

```tsx
import { createRoutesStub } from "react-router";

const Stub = createRoutesStub([{ path: "/", Component: () => <MyComponent /> }]);
render(<Stub />);
```

## When something looks weird

- **Stale types after adding a route?** Run `npx react-router typegen` or
  just `npm run typecheck` (which calls typegen first).
- **MDX changes not appearing?** Make sure the file has valid frontmatter
  — startup throws if it doesn't.
- **`STRIPE_SECRET_KEY is not set` errors?** Copy `.env.example` to
  `.env` and add a test key.
- **Format check fails in CI but `oxfmt --check .` passes locally?** Make
  sure you're on the same Node version as CI (22).
