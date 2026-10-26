import rss from "@astrojs/rss"
import { site } from "../site.js"
import { getPosts, postPath, excerpt } from "../posts.js"

export const GET = async context =>
  rss({
    title: site.title,
    description: site.description,
    site: context.site,
    items: (await getPosts()).map(post => ({
      title: post.data.title,
      description: excerpt(post),
      pubDate: post.data.date,
      link: postPath(post),
    })),
  })
