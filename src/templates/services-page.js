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
const ServicesIndex = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <SEO
        title={frontmatter.title}
        description={excerpt} />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <div className="description" dangerouslySetInnerHTML={{ __html: html }} />
        <Services />
      </div>
    </Layout>
  )
}


export default ServicesIndex