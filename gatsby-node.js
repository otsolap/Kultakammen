const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

// Data layer antaa pluginssien tehdä datasta sivuja.
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  //const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const blogList = path.resolve(`./src/templates/blog-list.js`)

  // allmarkdown => kaikki markdown filet kuten nimi viittaa.
  const blogresult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
              template
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors - Boilerikoodia
  if (blogresult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create markdown pages
  // lue jokaisesta markdown sivusta oman sivunsa.
  const blogposts = blogresult.data.allMarkdownRemark.edges
  let blogPostsCount = 0

  blogposts.forEach((post, index) => {
    const id = post.node.id
    const previous = index === blogposts.length - 1 ? null : blogposts[index + 1].node
    const next = index === 0 ? null : blogposts[index - 1].node

    createPage({
      path: post.node.frontmatter.slug,
      component: path.resolve(
        `src/templates/${String(post.node.frontmatter.template)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
        previous,
        next,
      },
    })

    // Count blog posts.
    if (post.node.frontmatter.template === 'blog-post') {
      blogPostsCount++
    }
  })

  // Create blog-list pages
  const blogPostsPerPage = 9
  const numBlogPages = Math.ceil(blogPostsCount / blogPostsPerPage)

  Array.from({ length: numBlogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogi` : `/blogi/${i + 1}`,
      component: blogList,
      context: {
        limit: blogPostsPerPage,
        skip: i * blogPostsPerPage,
        numBlogPages,
        currentPage: i + 1,
      },
    })
  })

  //const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const projectList = path.resolve(`./src/templates/project-list.js`)

  // allmarkdown => kaikki markdown filet kuten nimi viittaa.
  const projectresult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
              template
              title
            }
          }
        }
      }
    }
  `)

  // Handle errors - Boilerikoodia
  if (projectresult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create markdown pages
  // lue jokaisesta markdown sivusta oman sivunsa.
  const projectposts = projectresult.data.allMarkdownRemark.edges
  let projectPostsCount = 0

  projectposts.forEach((post, index) => {
    const id = post.node.id
    const previous = index === projectposts.length - 1 ? null : projectposts[index + 1].node
    const next = index === 0 ? null : projectposts[index - 1].node

    createPage({
      path: post.node.frontmatter.slug,
      component: path.resolve(
        `src/templates/${String(post.node.frontmatter.template)}.js`
      ),
      // additional data can be passed via context
      context: {
        id,
        previous,
        next,
      },
    })

    // Count blog posts.
    if (post.node.frontmatter.template === 'blog-post') {
      projectPostsCount++
    }
  })

  // Create project-list pages
  const projectPostsPerPage = 3
  const numProjectPages = Math.ceil(projectPostsCount / projectPostsPerPage)

  Array.from({ length: numProjectPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/projektit` : `/projektit/${i + 1}`,
      component: projectList,
      context: {
        limit: projectPostsPerPage,
        skip: i * projectPostsPerPage,
        numProjectPages,
        currentPage: i + 1,
      },
    })
  })

}
// Noden avulla GraphQL Datalayer saa dataa.
// luo uuden Noden, eli uuden datan layerin, jonka GraphQL voi kaivaa ja tonkia.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Luo uuden Noden tai uuden Node fieldin.
  // ja se on meidän Slug, että saadaan /otso, /yhteydenotto, yms.
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

