import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Repository from '../components/repository'
import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query AboutQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
				title
				featuredImage {
          childImageSharp {
            fluid(maxWidth: 480, maxHeight: 380, quality: 80, srcSetBreakpoints: [960, 1440]) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
      }
    }
  }
`
const AboutPage = ({ data }) => {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html, excerpt } = markdownRemark
	const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ""

	return (
		<Layout className="page">
			<SEO
				title={frontmatter.title}
				description={excerpt}
			/>
			<div className="wrapper">
				<h1>{frontmatter.title}</h1>
				<div>
					{Image ? (
						<Img
							fluid={Image}
							alt={frontmatter.title}
							className="featured-image"
						/>
					) : ""}
				</div>
				<article dangerouslySetInnerHTML={{ __html: html }} />
			</div>
			<Repository />
		</Layout>
	)
}

export default AboutPage