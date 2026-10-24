import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Used from each page's Gatsby Head export
const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <html lang="en" />
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </>
  )
}

export default Seo
