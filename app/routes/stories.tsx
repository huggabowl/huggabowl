import { Link } from "react-router";
import type { Route } from "./+types/stories";
import { listStories } from "~/lib/stories";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "Stories · Huggabowl" },
    {
      name: "description",
      content: "Press coverage and stories from the Huggabowl cart.",
    },
  ];
}

export function loader(_args: Route.LoaderArgs) {
  return { stories: listStories() };
}

export default function Stories({ loaderData }: Route.ComponentProps) {
  const { stories } = loaderData;
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl font-extrabold text-stone-900 md:text-5xl">Stories</h1>
      <p className="mt-4 text-lg text-stone-700">
        Press coverage and behind-the-cart stories from Huggabowl.
      </p>
      <ul className="mt-10 space-y-6">
        {stories.map((story) => (
          <li key={story.slug} className="rounded-lg border border-stone-200 bg-white p-6">
            <p className="text-xs font-semibold tracking-wide text-orange-700 uppercase">
              {story.source} · {story.date}
            </p>
            <Link to={`/stories/${story.slug}`} className="mt-2 block">
              <h2 className="font-serif text-2xl font-bold text-stone-900 hover:text-orange-700">
                {story.title}
              </h2>
            </Link>
            <p className="mt-2 text-stone-700">{story.excerpt}</p>
            <Link
              to={`/stories/${story.slug}`}
              className="mt-3 inline-block text-sm font-medium text-orange-700 hover:underline"
            >
              Read more &rarr;
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
