const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const postTemplate = path.resolve(`src/templates/post.js`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx(sort: [{ frontmatter: { date: DESC } }, { frontmatter: { title: DESC } }]) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const link = post =>
    post ? { slug: post.fields.slug, title: post.frontmatter.title } : null

  // Posts are newest first, so "previous" is the next older post
  const posts = result.data.allMdx.nodes
  posts.forEach((post, index) => {
    createPage({
      path: post.fields.slug,
      component: `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        id: post.id,
        previous: link(posts[index + 1]),
        next: link(posts[index - 1]),
      },
    })
  })
}
