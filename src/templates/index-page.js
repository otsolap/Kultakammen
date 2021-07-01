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
      cta {
        ctaText
        ctaLink
      }
      }
    }
  }
`

const HomePage = () => {


  return (
    <Layout>
      <SEO />
      <AboutMe />
      <Eeco />

      <Contact />
    </Layout>
  )
}

export default HomePage
