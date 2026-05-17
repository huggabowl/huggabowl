# Huggabowl

> Buy a meal, give a meal — made from rescued food, served with purpose.

This repo is the public website for **Huggabowl**, a Calgary-based
charity that serves nourishing soup from a food cart at Olympic Plaza.
Every paid bowl funds a second meal for someone facing food insecurity.

## Stack

React Router v7 (framework mode) on Netlify, Tailwind CSS v4, Base UI,
Stripe Checkout for donations, MDX for story content, oxlint + oxfmt for
hygiene, Vitest for tests, GitHub Actions for CI.

## Quick start

```bash
npm install
cp .env.example .env   # add Stripe test keys
npm run dev
```

Open <http://localhost:5173>.

## Common commands

| Command                | What it does                                   |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Start the dev server                           |
| `npm run build`        | Production build (client + SSR bundle)         |
| `npm run start`        | Serve the production build locally             |
| `npm run typecheck`    | Regenerate React Router types + `tsc --noEmit` |
| `npm run lint`         | Run oxlint                                     |
| `npm run format`       | Run oxfmt (rewrites files)                     |
| `npm run format:check` | Check formatting without writing               |
| `npm test`             | Run vitest once                                |
| `npm run test:watch`   | Vitest in watch mode                           |

## Docs

Everything beyond the basics lives in [`docs/`](./docs):

- [`company.md`](./docs/company.md) — what Huggabowl is, history, charitable status.
- [`business-model.md`](./docs/business-model.md) — buy-a-meal/give-a-meal, food rescue, tokens.
- [`customers.md`](./docs/customers.md) — donors, volunteers, recipients, partners.
- [`tech-stack.md`](./docs/tech-stack.md) — every dependency and why it's here.
- [`architecture.md`](./docs/architecture.md) — routes, data flow, rendering model.
- [`deployment.md`](./docs/deployment.md) — Netlify setup, env vars, Stripe wiring.
- [`content-authoring.md`](./docs/content-authoring.md) — how to add a story.
- [`local-development.md`](./docs/local-development.md) — install, run, test, lint, format.

## License

UNLICENSED — internal charity codebase. Reach out before reusing.
