# Business model

Huggabowl's model has three moving parts: **food in**, **value created**,
**meals out**. Each is intentionally cheap so that almost all donated and
earned dollars become meals.

## Food in: rescued surplus

Most ingredients are **surplus food rescued from local businesses** —
restaurants with overproduction, suppliers with cosmetically imperfect
produce, retailers with short-dated stock. Huggabowl pays for some of this
at a steep discount, and accepts some as outright donation. The cost per
ingredient is a small fraction of retail.

**Why this matters:** food rescue keeps Huggabowl's per-meal cost low,
diverts waste from landfill, and gives donor businesses a tax-deductible
home for surplus they'd otherwise eat the loss on.

## Value created: volunteer-cooked meals

A team of **volunteer chefs** turns the rescued ingredients into high-quality
soup and other hot meals in a shared kitchen. The labour is donated; the
ingredients are near-free; the result is a real, satisfying bowl that a
paying customer is happy to buy and a hungry neighbour is grateful to
receive.

## Meals out: the cart and the token

Meals are served from a **street cart at Olympic Plaza**. The transaction
has two faces:

- **Paying customer (lunch buyer)** — walks up, pays $5 for a Huggabowl, and
  gets lunch. Their $5 also funds a second meal.
- **Recipient (token holder or walk-up)** — anyone facing food insecurity
  can redeem a token (handed out for free in the community) or simply
  walk up; the cart is no-questions-asked.

The implicit accounting: **one paid bowl = two meals served.** The math
works because food rescue, volunteer labour, and a small fixed kitchen
overhead make the marginal cost per bowl very low.

## Donations (separate from bowl sales)

Beyond the cart, people who can't get to Olympic Plaza — or who want to do
more than a single bowl — can **donate** directly. Donations:

- Are processed through **Stripe Checkout** (one-time, any amount).
- Receive an automatic Stripe email receipt.
- Are eligible for a **formal CRA charitable tax receipt** (CRA
  #735654550RR0001) issued by Huggabowl. **CRA receipt automation is not
  yet built** — see [`deployment.md`](./deployment.md#stripe).
- Are pooled with bowl revenue to fund ingredients, equipment, insurance,
  and the (small) fixed overhead the volunteer model doesn't cover.

## What is _not_ in the current site (and why)

The current site (on Square) implements a **token shop** at
`/product/huggabowl-token/51`. The new site **does not yet** sell tokens
online or track redemption — it implements one-time donations only, per
v1 scope. The token shop and any redemption tracking can be added later;
see the plan file and `architecture.md` for where it would fit.

## Why this matters for site decisions

- **The donate flow is load-bearing.** It's the only place we take money
  on the new site. It has to be reliable, friendly, and fast.
- **The story matters.** Pages should explain the model clearly so a
  first-time visitor understands _why_ their $5 does double duty.
- **Dignity language is non-negotiable.** Copy never frames recipients as
  charity cases.
- **Don't get cute with payments.** Stripe Checkout (hosted) keeps us out
  of PCI scope and is rock-solid. Don't replace it with Elements or
  custom flows unless there's a real reason.
