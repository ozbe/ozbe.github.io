import React, { createRef, useEffect } from "react"

import { MDXRenderer } from "gatsby-plugin-mdx"
import { Styled } from "theme-ui"

import Comments from "../../components/comments"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import PostTitle from "gatsby-theme-blog/src/components/post-title"
import PostDate from "gatsby-theme-blog/src/components/post-date"
import PostFooter from "gatsby-theme-blog/src/components/post-footer"
import PostHero from "gatsby-theme-blog/src/components/post-hero"

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
    scriptEl.setAttribute('theme', 'dark-blue')
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
        keywords={post.keywords}
        imageAlt={post.imageAlt}
      />
      <main>
        <PostHero post={post} />
        <PostTitle>{post.title}</PostTitle>
        <PostDate>{post.date}</PostDate>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Styled.hr />
        <Styled.h2>Comments</Styled.h2>
        <Comments commentBox={commentBox}></Comments>
      </main>
      <PostFooter {...{ previous, next }} />
    </Layout>
  )
}

export default Post
