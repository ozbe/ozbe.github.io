/** @jsxImportSource theme-ui */
import { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            name
            url
          }
        }
      }
    }
  `)

  return (
    <footer sx={{ mt: 4, pt: 3 }}>
      © {new Date().getFullYear()}
      {site.siteMetadata.social.map(platform => (
        <Fragment key={platform.url}>
          {` `}&bull;{` `}
          <a
            sx={{ variant: `styles.a` }}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {platform.name}
          </a>
        </Fragment>
      ))}
    </footer>
  )
}

export default Footer
