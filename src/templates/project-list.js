import React from "react"

import Layout from "../components/layout"
import PostCard from "../components/post-card"
import SEO from "../components/seo"

export const projectListQuery = graphql`
  query projectListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "project-post" } } }
      limit: $limit
      skip: $skip
		) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
						title
						featuredImage {
							childImageSharp {
								fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
							}
						}
          }
        }
      }
    }
  }
`

class ProjectIndex extends React.Component {
  render() {

    const { data } = this.props

    const posts = data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge =>
        <PostCard key={edge.node.id} data={edge.node} />
      )

    return (
      <Layout className="project-page">
        <SEO
          title={"Projektit"}
          description={"Otso Lappalaisen tuorempia projekteja "}
        />
        <h1>Projektit</h1>
        <div className="grids col-1 sm-2 lg-3">
          {posts}
        </div>
      </Layout>
    )
  }
}

export default ProjectIndex