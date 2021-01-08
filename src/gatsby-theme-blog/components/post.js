import React, { createRef, useEffect } from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"

import Comments from "../../components/comments"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import PostTitle from "gatsby-theme-blog/src/components/post-title"
import PostDate from "gatsby-theme-blog/src/components/post-date"
import PostFooter from "gatsby-theme-blog/src/components/post-footer"
import PostHero from "gatsby-theme-blog/src/components/post-hero"
import PostNav from "../../components/post-nav"

/* eslint-disable react/jsx-pascal-case */
const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => {
  // Comment code adapted from https://dev.to/creativcoder/how-to-add-comment-support-on-your-gatsby-blog-using-github-utterances-423n
  const commentBox = createRef()

  useEffect(() => {
    const scriptEl = document.createElement('script')
    scriptEl.async = true
    scriptEl.src = 'https://utteranc.es/client.js'
    scriptEl.setAttribute('repo', 'ozbe/ozbe.github.io')
    scriptEl.setAttribute('issue-term', 'title')
    scriptEl.setAttribute('id', 'utterances')
    scriptEl.setAttribute('theme', 'github-light')
    scriptEl.setAttribute('crossorigin', 'anonymous')
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(scriptEl)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }
  }, [commentBox])

  return (
    <Layout location={location} title={title}>
      <SEO
        title={post.title}
        description={post.excerpt}
        imageSource={
          post.socialImage
            ? post.socialImage?.childImageSharp?.fluid.src
            : post.image?.childImageSharp?.fluid.src
        }
        imageAlt={post.imageAlt}
      />
      <main>
        <article>
          <header>
            <PostHero post={post} />
            <PostTitle>{post.title}</PostTitle>
            <PostDate>{post.date}</PostDate>
          </header>
          <section>
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
          <footer>
            <PostNav {...{ previous, next }} />
            <Comments commentBox={commentBox}></Comments>
          </footer>
        </article>
      </main>
      <PostFooter />
    </Layout>
  )
}
/* eslint-enable react/jsx-pascal-case */

export default Post
