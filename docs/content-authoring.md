# Authoring stories

Stories (press coverage, cart updates, anything narrative) live as MDX
files in [`app/content/stories/`](../app/content/stories/). Each file is
both a piece of metadata _and_ a React component — you write Markdown
prose and can drop in React/JSX when you need to.

## Add a new story

1. Create a new file: `app/content/stories/<slug>.mdx`. The filename
   (minus `.mdx`) becomes the URL slug — for example,
   `app/content/stories/winter-pop-up.mdx` is served at
   `/stories/winter-pop-up`.

2. Start with **YAML frontmatter** at the top:

   ```mdx
   ---
   title: "Your story title"
   date: "2026-05-17" # ISO date — newest first on the index
   source: "Huggabowl" # Where the story is from (e.g. CBC News, Huggabowl)
   sourceUrl: "https://…" # Optional: link to original coverage
   excerpt: "One sentence that appears on the /stories index."
   ---
   ```

   All four un-suffixed fields are **required** (`title`, `date`,
   `source`, `excerpt`). If any are missing, the site will throw at
   startup — that's intentional, it's safer than silently rendering a
   broken card.

3. Below the frontmatter, write the story body in Markdown:

   ```mdx
   Soup on a snowy day brings people out of the cold. Last Tuesday we
   served 84 bowls in three hours.

   > _"This is the warmest I've been all week."_ — overheard at the cart

   ## What's coming next

   We'll be at Olympic Plaza every Tuesday through March.
   ```

4. (Optional) Use React components. MDX lets you mix JSX in:

   ```mdx
   <div className="rounded-lg bg-orange-50 p-4">A callout box, styled with Tailwind.</div>
   ```

5. Save. The dev server picks it up automatically, and it appears on
   `/stories`.

## Frontmatter reference

| Field       | Required | Type                       | Notes                                                                |
| ----------- | -------- | -------------------------- | -------------------------------------------------------------------- |
| `title`     | yes      | string                     | Shown on the index card and the story page `<h1>`                    |
| `date`      | yes      | string (ISO, `YYYY-MM-DD`) | Sorts the index newest-first                                         |
| `source`    | yes      | string                     | Where the story is from (publication or `Huggabowl`)                 |
| `sourceUrl` | no       | string (URL)               | If set, a "Read the original coverage" callout appears at the bottom |
| `excerpt`   | yes      | string                     | One sentence shown on `/stories` and as the meta description         |

## Editing an existing story

Just edit the `.mdx` file. The change appears live in dev. In production
it ships with the next deploy.

## Removing a story

Delete the `.mdx` file. The route disappears on the next build. (The URL
will start returning 404 — that's expected.)

## Images

Drop images into `public/images/` and reference them with absolute
paths:

```mdx
![Volunteers prepping soup at the kitchen](/images/prep-day.jpg)
```

Larger images should be resized before being committed — there's no
optimization pipeline in v1.

## Why MDX and not a CMS?

- **Zero infrastructure.** No CMS service to log into, pay for, or
  migrate later.
- **Version controlled.** Every edit is a git commit; rollback is `git
revert`.
- **Branchable.** Draft a story on a branch, open a PR, get a Netlify
  preview URL, share with the team before merging.
- **The cost** is that non-technical edits require opening a PR (or
  pairing with someone who can). For a site that publishes a handful of
  stories a year, that's fine.

If editorial volume ever outgrows this, swap in a headless CMS (Sanity,
Contentful, Decap) — the `stories.ts` loader is small and easy to
re-point.
