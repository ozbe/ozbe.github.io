/** @jsxImportSource theme-ui */
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"

const PostLink = ({ title, slug, date, excerpt }) => (
  <article>
    <header>
      <h2 sx={{ variant: `styles.h2`, mb: 1 }}>
        <Link sx={{ variant: `styles.a`, textDecoration: `none` }} to={slug}>
          {title || slug}
        </Link>
      </h2>
      <small>{date}</small>
    </header>
    <section>
      <p sx={{ variant: `styles.p` }}>{excerpt}</p>
    </section>
  </article>
)

const Blog = ({ data, location }) => (
  <Layout location={location}>
    <main>
      {data.allMdx.nodes.map(node => (
        <PostLink
          key={node.fields.slug}
          slug={node.fields.slug}
          excerpt={node.excerpt}
          {...node.frontmatter}
        />
      ))}
    </main>
    <Footer />
  </Layout>
)

export default Blog

export const Head = () => <Seo title="Blog" />

export const query = graphql`
  query BlogPage {
    allMdx(sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: DESC } }]) {
      nodes {
        excerpt(pruneLength: 140)
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
