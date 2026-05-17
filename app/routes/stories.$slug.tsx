import { Link } from "react-router";
import type { Route } from "./+types/stories.$slug";
import { getStoryComponent, getStoryFrontmatter } from "~/lib/stories";

export function meta({ data }: Route.MetaArgs) {
  if (!data) return [{ title: "Story not found · Huggabowl" }];
  return [
    { title: `${data.frontmatter.title} · Huggabowl` },
    { name: "description", content: data.frontmatter.excerpt },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  const frontmatter = getStoryFrontmatter(params.slug);
  if (!frontmatter) {
    throw new Response("Story not found", { status: 404 });
  }
  return { frontmatter };
}

export default function Story({ loaderData, params }: Route.ComponentProps) {
  const { frontmatter } = loaderData;
  const Component = getStoryComponent(params.slug);
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link to="/stories" className="text-sm font-medium text-orange-700 hover:underline">
        &larr; All stories
      </Link>
      <p className="mt-6 text-xs font-semibold tracking-wide text-orange-700 uppercase">
        {frontmatter.source} · {frontmatter.date}
      </p>
      <h1 className="mt-2 font-serif text-4xl font-extrabold text-stone-900 md:text-5xl">
        {frontmatter.title}
      </h1>
      <div className="prose prose-stone mt-8 max-w-none [&_a]:text-orange-700 [&_a:hover]:underline [&_h2]:font-serif [&_h3]:font-serif">
        {Component ? <Component /> : null}
      </div>
      {frontmatter.sourceUrl ? (
        <p className="mt-10 rounded-lg bg-stone-100 p-4 text-sm text-stone-700">
          Read the original coverage:{" "}
          <a
            href={frontmatter.sourceUrl}
            className="font-medium text-orange-700 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {frontmatter.source}
          </a>
        </p>
      ) : null}
    </article>
  );
}
