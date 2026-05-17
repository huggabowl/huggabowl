# Product

## Register

brand

## Users

Five real audiences, ranked by how heavily the site should weight each:

1. **Donors (primary online conversion).** Care about food security in Calgary, often follow us on social, may never make it to the cart. The donate flow is their only path to participate. Need a friendly form, sensible default amounts, trustworthy Stripe handoff, and an obvious CRA tax-receipt note.
2. **Lunch buyers.** Working/visiting downtown Calgary, walking past Olympic Plaza. Want a hot real lunch with a story behind it. Convert at the cart, not online — site's job is to tell them where/when the cart is and prove it's legit (press coverage does most of this).
3. **Volunteers.** Home cooks, retired chefs, students, drivers. Need a plain-English overview of roles and a low-friction way to raise their hand.
4. **Event organizers (catering).** Corporate offices, conference planners, community groups. Important revenue stream — each catering event funds many give-away meals. Site needs a short "yes we cater" page and a contact path.
5. **Recipients (people facing food insecurity).** The site is NOT their primary touchpoint — they meet Huggabowl at the cart. But the site must accurately convey dignity, so frontline workers and community orgs are comfortable referring people to it. `/visit-us` must be readable, plain, and not fortressed behind donor copy.

Implicit sixth audience: **food-rescue partners** (restaurants, suppliers). They come through founder relationships, not the site. Out of scope for v1.

## Product Purpose

Huggabowl is a Calgary-based registered Canadian charity (CRA #735654550RR0001) that runs a food cart at Olympic Plaza. The mechanic: rescued surplus food → volunteer-cooked into real meals → sold from a cart for $5/bowl → every paid bowl funds a second meal for someone facing food insecurity, redeemed via token or walk-up, no questions asked.

**One paid bowl = two meals served.** The math works because food rescue, donated labour, and small fixed overhead drive the marginal cost per bowl very low.

The site exists to:

- **Convert donors** — the single load-bearing transactional flow on the site.
- **Explain the model** so a first-time visitor understands why $5 does double duty.
- **Recruit volunteers and catering customers** as secondary revenue/capacity paths.
- **Tell the cart's story** through press coverage and MDX-authored posts on `/stories`.

Success looks like: someone lands cold on the homepage, understands the model in under 30 seconds, and either donates, books catering, or shows up at Olympic Plaza for lunch.

## Brand Personality

**Warm, defiant, human.**

- **Warm**, because feeding people is the work and nothing about the site should feel transactional or cold.
- **Defiant**, because we are explicitly not the polished-foundation, board-of-directors, navy-and-teal charity. We refuse to look like a United Way subsidiary. Graffiti vibe and retro-futurist energy are the visual expression of that refusal.
- **Human**, because the dignity principle is non-negotiable. Recipients are neighbours, volunteers are friends, donors are part of the crew — not personas in a funnel.

Voice is warm, plainspoken, and proud. Never pitying toward recipients. Never preachy toward donors. Calgary-specific civic pride is welcome; generic "changing the world" rhetoric is not.

## Anti-references

Three failure modes to actively design against:

- **Sad-faced charity (guilt-driven).** Dim photos of people in need, pity-toned headlines, oversized DONATE buttons, World Vision / Salvation Army energy. Violates the dignity principle. We never frame recipients as problems to be solved.
- **Corporate-foundation polish.** Stock-photo smiles, navy + teal, sans-serif everywhere, board-of-directors page above the fold. United Way / Gates Foundation feel. We are not a foundation; we are a cart.
- **Generic SaaS-cream charity template.** Off-white + soft gradient + rounded cards + "Our Impact" big-number block. Looks AI-generated and indistinguishable from a Webflow template. Especially dangerous because it's the path of least resistance for any AI-assisted design.

The aesthetic direction is **graffiti + retro-futurist + handmade + slightly rough**, anchored on a robin-egg-blue + neon-yellow palette. The site should look like it was made by people in the actual neighbourhood — not by an agency, not by a board.

## Design Principles

1. **Dignity over pity.** Run every visual and copy decision against the question _"would a recipient be proud to be associated with this?"_ If the answer is no, redo it. Recipients are neighbours, not need-cases.
2. **Streetwise, not slick.** The aesthetic announces local, handmade, real. Slight roughness, asymmetry, marker-drawn marks, mis-aligned tags are features, not bugs. Polish is the failure state — it pulls us toward the corporate-foundation lane we're trying to escape.
3. **Show the math.** $5 = 2 meals is the central magic trick. Make that arithmetic visible, repeatable, and worth re-reading on every page. Don't bury it under emotional appeal; the math IS the emotional appeal.
4. **Loud about Calgary, quiet about ourselves.** Local pride is the personality. Self-congratulation isn't. Press coverage, partner shoutouts, and the cart's actual location do more work than any "Our Mission" hero block ever could.
5. **The cart is the hero, not the website.** Pages should feel like they were posted by someone who'd rather be at Olympic Plaza serving soup. Brevity and warmth beat comprehensive marketing every time. If a page reads like it took weeks to write, it's wrong.

## Accessibility & Inclusion

**WCAG 2.2 AA baseline**, with two specific commitments:

- **Reduced motion respected.** Any retro-futurist animation, parallax, or graffiti-style entrance respects `prefers-reduced-motion: reduce` and degrades to a static state with no loss of meaning.
- **High-contrast pairings audited.** Neon yellow and robin egg blue are notoriously hard to use accessibly for text. Body copy lives on tinted-neutral surfaces with verified contrast; neon yellow is reserved for non-text emphasis (background blocks, marks, large display type at sizes that meet AA Large) unless it explicitly passes against its background.

Audience-driven needs:

- Donors and volunteers skew older — comfortable default body size, generous tap targets on mobile, no reliance on hover-only affordances.
- Recipients may use older Android phones or shared/library devices — pages must remain usable without JavaScript-heavy interactions for core content (`/visit-us`, cart location, hours).
- Plain language throughout. Avoid jargon, charity-speak, and acronyms (other than CRA, which gets a short gloss the first time it appears).
