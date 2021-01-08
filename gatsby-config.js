module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        preset: `@theme-ui/preset-base`,
        prismPreset: `github`,
      },
    },
    `gatsby-plugin-feed-mdx`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `ozbe`,
    author: `Josh Aaseby`,
    description: `A collection of my thoughts and writings.`,
    siteUrl: "https://ozbe.io/",
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
}
