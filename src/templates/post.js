/** @jsxImportSource theme-ui */
// gatsby-plugin-mdx's generated wrapper for this template calls React.createElement
import React, { useEffect, useRef } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Bio from "../components/bio"
import PostNav from "../components/post-nav"
import Comments from "../components/comments"

const Post = ({ data: { post }, pageContext: { previous, next }, location, children }) => {
  // Comment code adapted from https://dev.to/creativcoder/how-to-add-comment-support-on-your-gatsby-blog-using-github-utterances-423n
  const commentBox = useRef(null)

  useEffect(() => {
    const node = commentBox.current
    if (!node) {
      return
    }

    const scriptEl = document.createElement(`script`)
    scriptEl.async = true
    scriptEl.src = `https://utteranc.es/client.js`
    scriptEl.setAttribute(`repo`, `ozbe/ozbe.github.io`)
    scriptEl.setAttribute(`issue-term`, `title`)
    scriptEl.setAttribute(`id`, `blog-comment`)
    scriptEl.setAttribute(`theme`, `github-light`)
    scriptEl.setAttribute(`crossorigin`, `anonymous`)

    // Remove previous utterances comments
    node.replaceChildren(scriptEl)
  }, [post.id])

  return (
    <Layout location={location}>
      <main>
        <article>
          <header>
            <h1 sx={{ variant: `styles.h1` }}>{post.frontmatter.title}</h1>
            <p sx={{ variant: `styles.p`, fontSize: 1, mt: -3, mb: 3 }}>
              {post.frontmatter.date}
            </p>
          </header>
          <section>{children}</section>
          <footer>
            <PostNav previous={previous} next={next} />
            <Comments ref={commentBox} />
          </footer>
        </article>
      </main>
      <footer>
        <hr sx={{ variant: `styles.hr` }} />
        <Bio />
      </footer>
    </Layout>
  )
}

export default Post

export const Head = ({ data: { post } }) => (
  <Seo title={post.frontmatter.title} description={post.excerpt} />
)

export const query = graphql`
  query PostPage($id: String!) {
    post: mdx(id: { eq: $id }) {
      excerpt(pruneLength: 140)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
