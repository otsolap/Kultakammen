import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Services from "../components/services"

export const pageQuery = graphql`
  query ProductQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const ServicesIndex = () => (
  <Layout>
    <SEO title="page" />
    <h1>Palveluni:</h1>
    <Services />
  </Layout>
)

export default ServicesIndex