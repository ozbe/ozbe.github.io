import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

// A post is either content/posts/<slug>.mdx or content/posts/<slug>/index.mdx,
// and is served at /<slug>/
const posts = defineCollection({
  loader: glob({
    pattern: `**/*.mdx`,
    base: `./content/posts`,
    generateId: ({ entry }) => entry.replace(/(\/index)?\.mdx$/, ``),
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
})

export const collections = { posts }
