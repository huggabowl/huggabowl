import type { ComponentType } from "react";

export type StoryFrontmatter = {
  title: string;
  date: string;
  source: string;
  sourceUrl?: string;
  excerpt: string;
};

export type StorySummary = StoryFrontmatter & { slug: string };

type MdxModule = {
  default: ComponentType;
  frontmatter?: StoryFrontmatter;
};

const modules = import.meta.glob<MdxModule>("../content/stories/*.mdx", { eager: true });

const stories = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = (path.split("/").pop() ?? "").replace(/\.mdx$/, "");
    if (!mod.frontmatter) {
      throw new Error(`Story ${path} is missing frontmatter.`);
    }
    return { slug, frontmatter: mod.frontmatter, Component: mod.default };
  })
  .toSorted((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));

export function listStories(): StorySummary[] {
  return stories.map(({ slug, frontmatter }) => ({ slug, ...frontmatter }));
}

export function getStoryFrontmatter(slug: string): StoryFrontmatter | null {
  return stories.find((s) => s.slug === slug)?.frontmatter ?? null;
}

export function getStoryComponent(slug: string): ComponentType | null {
  return stories.find((s) => s.slug === slug)?.Component ?? null;
}
