import React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from '../components/aboutme'
import Eeco from '../components/Eeco';
import Repository from '../components/repository';
// import Services from '../components/services';
import Contact from '../components/contact';

export const pageQuery = graphql`
query HomeQuery($id: String!){
  markdownRemark(id: { eq: $id }) {
    id
    html
    frontmatter {
      title
      tagline
      featuredImage {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 585
            height: 439
          )
        }
      }
      cta {
        ctaText
        ctaLink
      }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""

  return (
    <Layout>
      <SEO />
      <AboutMe />
      <Eeco />
      <Repository />
      <Contact />
    </Layout>
  )
}

export default HomePage
