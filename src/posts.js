import { getCollection } from "astro:content"

// Newest first, with title breaking ties between posts on the same day
export const getPosts = async () =>
  (await getCollection(`posts`)).sort(
    (a, b) =>
      b.data.date - a.data.date || b.data.title.localeCompare(a.data.title)
  )

export const postPath = post => `/${post.id}/`

// e.g. January 04, 2021
export const formatDate = date =>
  date.toLocaleDateString(`en-US`, {
    year: `numeric`,
    month: `long`,
    day: `2-digit`,
    timeZone: `UTC`,
  })

// Plain text from the start of a post, cut at a word boundary
export const excerpt = (post, length = 140) => {
  const text = post.body
    .replace(/^```[\s\S]*?^```/gm, ``)
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ``)
    .replace(/\[([^\]]*)\]\([^)]*\)/g, `$1`)
    .replace(/^\s*(#+|>|[*-]|\d+\.)\s+/gm, ``)
    .replace(/[*_`]/g, ``)
    .replace(/(\w)'(\w)/g, `$1’$2`)
    .replace(/\s+/g, ` `)
    .trim()

  // Same cut as underscore.string's prune, which Gatsby used
  if (text.length <= length) {
    return text
  }
  let template = text
    .slice(0, length + 1)
    .replace(/.(?=\W*\w*$)/g, c =>
      c.toUpperCase() !== c.toLowerCase() ? `A` : ` `
    )
  template = /\w\w$/.test(template)
    ? template.replace(/\s*\S+$/, ``)
    : template.slice(0, -1).trimEnd()
  return `${text.slice(0, template.length)}…`
}
