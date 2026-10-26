import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import { satteri } from "@astrojs/markdown-satteri"
import Slugger from "github-slugger"

// GitHub's octicon link icon
const linkIcon = {
  type: `element`,
  tagName: `svg`,
  properties: {
    ariaHidden: `true`,
    focusable: `false`,
    height: 16,
    width: 16,
    viewBox: `0 0 16 16`,
  },
  children: [
    {
      type: `element`,
      tagName: `path`,
      properties: {
        fillRule: `evenodd`,
        d: `M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z`,
      },
      children: [],
    },
  ],
}

// Prepends a permalink to each heading, shown beside it on hover. Astro runs
// this before it assigns heading ids, so it sets them the same way Astro would.
const headingLinks = () => {
  const slugger = new Slugger()
  return {
    name: `heading-links`,
    element: {
      filter: [`h1`, `h2`, `h3`, `h4`, `h5`, `h6`],
      visit(node, ctx) {
        const text = ctx.textContent(node)
        const id = node.properties.id ?? slugger.slug(text)
        ctx.setProperty(node, `id`, id)
        ctx.prependChild(node, {
          type: `element`,
          tagName: `a`,
          properties: {
            href: `#${id}`,
            ariaLabel: `${text} permalink`,
            className: [`anchor`, `before`],
          },
          children: [linkIcon],
        })
      },
    },
  }
}

export default defineConfig({
  site: `https://ozbe.dev`,
  trailingSlash: `always`,
  integrations: [mdx()],
  image: {
    // Post images scale down to fit, but never past their original size
    layout: `constrained`,
    responsiveStyles: true,
  },
  markdown: {
    shikiConfig: {
      theme: `github-light`,
    },
    processor: satteri({ hastPlugins: [headingLinks] }),
  },
})
