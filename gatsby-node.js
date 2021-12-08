const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

// luo Sisältösivuja
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  return graphql(`
  {
    allMarkdownRemark(limit: 100) {
      edges {
        node {
          id
          frontmatter {
            templateKey
          }
        }
      }
    }
  }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
  })
}

// Luo Sivuja
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basepath: `sivut` })
    createNodeField({
      node,
      name: `templateKey`,
      value: slug,
    })
  }
}