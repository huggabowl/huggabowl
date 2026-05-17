## <!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->

name: Huggabowl
description: Buy a meal, give a meal — the visual system for a Calgary cart that feeds neighbours.

---

# Design System: Huggabowl

## 1. Overview

**Creative North Star: "The Block Party Press."**

Huggabowl's visual system is a screenprint poster taped to a brick wall behind the cart at Olympic Plaza. It feels like it was hand-cut by someone in the neighbourhood — Sister Corita Kent's joyful screenprint optimism crossed with early Stussy's skate-shop tag energy crossed with Mike Mills' Beastie Boys sleeve collage. Slight misregistration is the point. Hand-aligned beats pixel-aligned. Two loud inks (robin egg blue and neon yellow) carry the personality; everything else is warm-tinted neutral that lets the inks ring.

The system commits to one color carrying 30–60% of the surface — usually robin egg blue, sometimes neon yellow — with the second ink overlaid as the loud accent. This is not a restrained brand. The math (\$5 = 2 meals) is shouted in paint, not whispered in a stat block. Defiance is structural: every layout choice should make a polished foundation page feel ashamed.

It explicitly rejects sad-faced guilt-charity, navy-and-teal corporate-foundation polish, and the generic SaaS-cream charity template (off-white + soft gradient + rounded card + "Our Impact" stat block). If a page reads like a Webflow template, it has failed.

**Key Characteristics:**

- Two-ink poster discipline. Robin egg blue + neon yellow do all the heavy chromatic work.
- Hand-aligned, not pixel-aligned. Slight misregistration and marker imperfection are intentional.
- Flat by default. No drop shadows. Depth comes from layered ink, not glossy elevation.
- Barbell typography: chunky geometric display, warm humanist body, nothing in between.
- Responsive motion only. Buttons squish, marks underline-grow. No parallax, no scroll choreography.
- Reduced-motion respected always; the static state must read as complete.

## 2. Colors: The Two-Ink Palette

A printer with two ink drums and a warm recycled paper stock. The two inks are loud and unmixed; the paper is warm enough to make them sing.

### Primary

- **Robin Egg Blue** ([exact hex to be resolved during implementation]): The dominant ink. Carries 30–60% of any given page — hero panels, the donate CTA frame, the cart-hours block on `/visit-us`, the `$5 = 2 meals` typographic moment. The "trust" voice of the brand.

### Secondary

- **Neon Yellow** ([exact hex to be resolved during implementation]): The loud accent. Always laid over robin egg blue or warm-tinted neutral — never over white, never on small body text. Reserved for marks, tags, highlight blocks, and the donate button itself. Carries no more than 15% of any page; rarity is what makes it ring.

### Neutral

- **Warm Recycled Bone** ([to be resolved during implementation]): The page background. Warm-tinted toward yellow, never that off-white SaaS-cream gradient soup. Closer to recycled newsprint than to Webflow off-white.
- **Tinted Ink (near-black)** ([to be resolved during implementation]): Body copy and outline marks. Never pure `#000`. Tinted slightly toward the blue ink so the system reads as printed, not generated.
- **Soft Tag Grey** ([to be resolved during implementation]): Dividers, metadata, footnotes. Rare. Most "divider" jobs should be handled by spacing or a marker rule, not a grey line.

### Named Rules

**The Two Inks Rule.** Robin egg blue and neon yellow are the only saturated colors in the system. A third saturated hue is forbidden. If a page needs a "third color," it needs more whitespace or a different layout — not a new ink.

**The No-Cream Rule.** The neutral background tilts warm, but it is never the soft-cream Webflow off-white that signals "AI charity template." If it could pass as the background of a Stripe landing page, it is wrong.

**The Yellow-Never-Whispers Rule.** Neon yellow is for moments, not surfaces. Never use it under body text; never use it for paragraph color; never use it as a subtle accent. If you can't see the yellow from across the room, the system isn't using it correctly.

## 3. Typography

**Display Font:** [Chunky geometric sans to be chosen at implementation — direction: Druk Wide, Monument Grotesk Heavy, Soehne Breit, or a wide poster-cut sans. Should feel like a 1970s NASA Standards Manual cover hand-screened onto fabric.]
**Body Font:** [Warm humanist sans to be chosen at implementation — direction: GT Walsheim, Söhne, Maison Neue, or a similarly warm geometric-humanist. Inter is the current fallback and is acceptable but unremarkable; a warmer face is preferred.]
**Display Accent:** [Optional handmade/marker face for `$5 = 2 meals` and `Buy a meal, give a meal` moments — direction: a brush or sign-painter face used sparingly. Not a font for entire headlines.]

**Character:** Barbell typography. The display sans is loud, wide, and chunky — it should feel hand-screened, not browser-rendered. The body sans is warm and quiet, so it can carry an entire press story without fatiguing the reader. Nothing lives in between. There is no mid-weight tertiary face; the system has loud and calm and nothing else.

### Hierarchy

- **Display** (heavy / black, `clamp(2.75rem, 7vw, 5.5rem)`, line-height ~0.95, tracking tight): Hero headlines. The mission lines on `/`, `/donate`, `/stories`. Set tight, often broken across multiple lines for poster effect.
- **Headline** (bold, ~2rem, line-height 1.1): Section openers. Page H1s on `/visit-us`, `/volunteer`, `/catering`.
- **Title** (semibold, ~1.25rem, line-height 1.25): Sub-section openers, story titles in lists.
- **Body** (regular 400, 1.0625rem, line-height 1.6, max 65ch): All running prose. Story bodies, donate form copy, FAQ answers.
- **Label** (medium 500, 0.8125rem, letter-spacing 0.04em, uppercase): Form labels, eyebrow lines above section headlines ("THE MATH", "AT THE CART"), nav.

### Named Rules

**The Barbell Rule.** Loud or calm. Never in between. The display face is heavy; the body face is regular; there is no semibold body or thin display. Mid-weight is the failure state.

**The Hand-Screen Rule.** Headlines should look like they were squeegeed onto paper, not rendered by a font file. Use tight tracking, slight unevenness in line breaks, and occasional overlap with color blocks. If a headline looks crisp and centered, it's wrong.

## 4. Elevation

**Flat-print by default.** No drop shadows anywhere in the system. Depth is conveyed by layered ink — color blocks overlapping at the edges, marker strokes that cross panel boundaries, slight misregistration where two inks meet. The page reads as printed, not stacked.

Surfaces never "lift" on hover. State changes are color shifts, slight squish on press, and underline growth on links — never elevation changes.

### Named Rules

**The No-Shadow Rule.** `box-shadow` is forbidden for depth. Permitted only for accessibility focus rings (and only as an outline-style ring, not a soft blur). If a card needs to feel "above" the page, it needs a different background ink or a stronger border, not a shadow.

**The Misregister Rule.** When color blocks meet, they overlap by 2–6px. When a marker stroke meets a heading, it crosses the baseline. Perfect alignment between two elements signals "designed by an agency." Slight overlap signals "printed in someone's garage." Always lean toward the second.

## 6. Do's and Don'ts

### Do

- **Do** commit to one ink covering 30–60% of every page. Pages that hedge between robin egg and neon yellow at 10% each end up looking like every other startup landing.
- **Do** lean into hand-alignment. Headlines that wrap unevenly, marker strokes that overshoot the boundary, color blocks that don't quite line up — these are the system working.
- **Do** quote the math (`$5 = 2 meals`) in poster-scale display type on the homepage, the donate page, and at least one story page. The arithmetic IS the emotional appeal.
- **Do** treat the cart's actual location and hours as primary content on `/visit-us`. No donor copy above it.
- **Do** respect `prefers-reduced-motion`. Every animation degrades to a static, complete state.

### Don't

- **Don't** ever drift into **sad-faced charity** territory (dim photos of need, pity-toned headlines, oversized DONATE button as guilt button, World Vision energy). This violates the dignity principle.
- **Don't** ever drift into **corporate-foundation polish** (navy + teal, stock-photo smiles, sans-serif everywhere, board-of-directors page above the fold, United Way / Gates Foundation feel). We are not a foundation; we are a cart.
- **Don't** ever drift into the **generic SaaS-cream charity template** (off-white background + soft gradient + rounded cards + "Our Impact" big-number stat block). This is the path of least resistance for any AI-assisted design and is forbidden.
- **Don't** use neon yellow under body text or as a small subtle accent. If you can't see it from across the room, it is being used wrong.
- **Don't** introduce a third saturated color. The system has two inks. Want more contrast? Use more whitespace, or use the display face louder.
- **Don't** add drop shadows to cards, buttons, or panels for depth. Use color overlap or a stronger border instead.
- **Don't** use `border-left` greater than 1px as a colored side stripe on cards, list items, or callouts. Rewrite with full borders, background tints, or leading marks.
- **Don't** use `background-clip: text` gradient text. Emphasis is carried by weight, size, or a neon yellow block behind the type — never by gradient ink.
- **Don't** use glassmorphism, blur backdrops, or soft "frosted" panels. The system is printed paper, not Mac OS.
- **Don't** write em dashes in copy (use commas, colons, semicolons, or parentheses). Also not `--`.
