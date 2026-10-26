/** @jsxImportSource theme-ui */
import { Link, useStaticQuery, graphql } from "gatsby"
import Bio from "./bio"

const isPath = (location, path) =>
  location.pathname.replace(/\/$/, ``) === path.replace(/\/$/, ``)

const titleLink = {
  display: `inline-flex`,
  alignItems: `center`,
  gap: 2,
  textDecoration: `none`,
}

const Bee = () => (
  <img src="/favicon.svg" alt="" sx={{ width: `1.25em`, height: `1.25em` }} />
)

const Title = ({ isRoot, children }) =>
  isRoot ? (
    <h1 sx={{ variant: `styles.h1`, my: 0, fontSize: 4 }}>
      <Link to="/" sx={{ ...titleLink, color: `inherit` }}>
        <Bee />
        {children}
      </Link>
    </h1>
  ) : (
    <p sx={{ variant: `styles.h3`, my: 0 }}>
      <Link to="/" sx={{ ...titleLink, color: `primary` }}>
        <Bee />
        {children}
      </Link>
    </p>
  )

const Nav = () => (
  <nav>
    {[
      [`Apps`, `/`],
      [`Blog`, `/blog/`],
    ].map(([label, to]) => (
      <Link
        key={to}
        to={to}
        sx={{ variant: `styles.a`, ml: 3, textDecoration: `none` }}
      >
        {label}
      </Link>
    ))}
  </nav>
)

const Layout = ({ location, children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <header sx={{ maxWidth: `container`, mx: `auto`, px: 3, pt: 4 }}>
        <div
          sx={{
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            mb: 4,
          }}
        >
          <Title isRoot={isPath(location, `/`)}>{site.siteMetadata.title}</Title>
          <Nav />
        </div>
        {isPath(location, `/blog/`) && <Bio />}
      </header>
      <div sx={{ maxWidth: `container`, mx: `auto`, px: 3, pb: 4 }}>
        {children}
      </div>
    </>
  )
}

export default Layout
