/** @jsxImportSource theme-ui */
import { Link } from "gatsby"

const Nav = ({ previous, next }) => (
  <div>
    <hr sx={{ variant: `styles.hr` }} />
    {(previous || next) && (
      <ul
        sx={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          px: 0,
          py: 2,
        }}
      >
        <li>
          {previous && (
            <Link sx={{ variant: `styles.a` }} to={previous.slug} rel="prev">
              ← {previous.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link sx={{ variant: `styles.a` }} to={next.slug} rel="next">
              {next.title} →
            </Link>
          )}
        </li>
      </ul>
    )}
    <hr sx={{ variant: `styles.hr` }} />
  </div>
)

export default Nav
