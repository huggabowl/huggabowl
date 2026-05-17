# Tech stack

Every dependency, and why it's here. Versions are tracked in
[`package.json`](../package.json) — this doc explains the _choices_, not
the pins.

## Framework: React Router v7 (framework mode)

`react-router`, `@react-router/dev`, `@react-router/node`,
`@react-router/serve`, `@react-router/fs-routes`.

The successor to Remix, now first-party React Router. We use **framework
mode** (not library mode), which gives us:

- File-based routing via `app/routes.ts` (explicit config flavour).
- SSR-by-default with progressive enhancement.
- Server `loader` and `action` functions on routes.
- Per-route bundle splitting.

This replaces the previous Square-Online client-rendered SPA — pages now
render server-side first, which is faster and SEO-friendly.

## Hosting: Netlify + `@netlify/vite-plugin-react-router`

The official Netlify adapter for React Router v7. It wires the SSR build
into Netlify Functions automatically. Configuration lives in
[`netlify.toml`](../netlify.toml). Deploy details:
[`deployment.md`](./deployment.md).

## Styling: Tailwind CSS v4

`tailwindcss` + `@tailwindcss/vite`. CSS-first config — no
`tailwind.config.js`. Global imports live in
[`app/tailwind.css`](../app/tailwind.css). We use **standard Tailwind
tokens only** (no custom palette/theme) so future maintainers can rely on
the defaults.

## UI primitives: Base UI

`@base-ui/react`. Unstyled, accessible primitives from the MUI team
(`Dialog`, `Popover`, `Menu`, `RadioGroup`, `Field`, etc). We compose
them with Tailwind utility classes. The donate form's preset-amount
selector uses `RadioGroup` + `Radio`.

> **Heads-up:** Base UI was renamed from `@base-ui-components/react` to
> `@base-ui/react` recently. Imports are from `@base-ui/react/<component>`.

## Payments: Stripe Checkout (hosted)

`stripe` (Node SDK). The donate form posts to a route `action` which
creates a `checkout.sessions` and redirects the browser to Stripe's
hosted Checkout page. We **don't use Stripe Elements** — the hosted page
keeps us out of PCI scope and is the right call for a one-page donate
flow. See [`app/lib/stripe.server.ts`](../app/lib/stripe.server.ts).

A `POST /api/stripe/webhook` route exists with signature verification.
For v1 it just acknowledges events; CRA tax-receipt automation is the
intended future use.

## Content: MDX

`@mdx-js/rollup`, `@mdx-js/react`, `remark-frontmatter`,
`remark-mdx-frontmatter`. Stories live as `.mdx` files in
[`app/content/stories/`](../app/content/stories/) with YAML frontmatter.
A small loader in [`app/lib/stories.ts`](../app/lib/stories.ts) collects
all `.mdx` modules via `import.meta.glob` (eager), exposes
`listStories()` / `getStoryFrontmatter()` / `getStoryComponent()`. See
[`content-authoring.md`](./content-authoring.md).

## Linting: oxlint

`oxlint` — fast Rust-based ESLint replacement. Config in
[`.oxlintrc.json`](../.oxlintrc.json). We enable `correctness` as errors,
plus `suspicious` and `perf` as warnings. `pedantic`/`style` are off.

## Formatting: oxfmt

`oxfmt` — Rust-based Prettier replacement, **pre-1.0** (currently v0.50).
We accepted the early-adoption risk; if it produces awkward output we can
swap to Prettier with no code changes. Run `npm run format` to apply,
`npm run format:check` in CI.

## Build & dev: Vite

`vite` (v8). The React Router dev server and production build run on
Vite. Plugin order in [`vite.config.ts`](../vite.config.ts) matters:
`tailwindcss()`, `mdx({...})`, then `reactRouter()`, then
`netlifyReactRouter()`. We skip the React Router and Netlify plugins
during Vitest runs (controlled by `process.env.VITEST`) to avoid a known
plugin-conflict.

## Tests: Vitest + Testing Library

`vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`.
Vitest has its own config in [`vitest.config.ts`](../vitest.config.ts) —
don't merge this into `vite.config.ts` (RR plugin conflicts with vitest).
We use `createRoutesStub` to test components that use React Router APIs
in isolation.

## CI: GitHub Actions

Workflow at [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) runs
on push and PR: install, typecheck, lint, format check, test, build.
Node 22 LTS.

## Things we deliberately _don't_ use

- **No CSS-in-JS / Emotion / styled-components.** Tailwind only.
- **No state management library.** Route data + React state is enough.
- **No headless CMS.** MDX in the repo, per
  [`content-authoring.md`](./content-authoring.md).
- **No Stripe Elements.** Hosted Checkout only.
- **No authentication.** v1 has no accounts.
- **No Sentry / OpenTelemetry yet.** Add when there's real traffic to
  observe.
