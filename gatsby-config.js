module.exports = {
  // Lets components use Theme UI's sx prop via /** @jsxImportSource theme-ui */
  jsxRuntime: `automatic`,
  // Customize your site metadata:
  siteMetadata: {
    title: `ozbe`,
    author: `Josh Aaseby`,
    description: `A collection of my thoughts and writings.`,
    siteUrl: `https://ozbe.dev`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ozbe`,
      },
      {
        name: `github`,
        url: `https://github.com/ozbe`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/josh-aaseby`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-theme-ui`,
      options: {
        preset: `@theme-ui/preset-base`,
        prismPreset: `github`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            title: `ozbe`,
            output: `/rss.xml`,
            query: `
              {
                allMdx(sort: { frontmatter: { date: DESC } }) {
                  nodes {
                    excerpt(pruneLength: 140)
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            serialize: ({ query: { site, allMdx } }) =>
              allMdx.nodes.map(node => {
                const url = new URL(node.fields.slug, site.siteMetadata.siteUrl)
                  .href
                return {
                  title: node.frontmatter.title,
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url,
                  guid: url,
                }
              }),
          },
        ],
      },
    },
  ],
}
