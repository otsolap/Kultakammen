import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { RiArrowLeftSLine } from "react-icons/ri"

import Layout from "../components/layout"
import SEO from '../components/seo';

const Post = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ""


  return (
    <Layout className="page">
      <SEO
        title={frontmatter.title}
        description={frontmatter.description ? frontmatter.description : excerpt}
        image={Image}
        article={true}
      />
      <article className="blog-post">
        <header className="featured-banner">
          <section className="article-header">
            <h1>{frontmatter.title}</h1>
            <time>{frontmatter.date}</time>
          </section>
          {Image ? (
            <Img
              fluid={Image}
              objectFit="scale-down"
              objectPosition="50% 50%"
              alt={frontmatter.title}
              className="featured-image"
            />
          ) : ""}
        </header>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
      <Link to="/projektit" className="button takaisin projektisivulle"><RiArrowLeftSLine className="icon -left" />Palaa takaisin projektisivulle</Link>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
query ProjectPostQuery($id: String!) {
  markdownRemark( 
    id: { eq: $id }
  ) {
    id
    html
    excerpt(pruneLength: 148)
    frontmatter {
      date(formatString: "DD MMMM, YYYY", locale: "fi")
      slug
      title
      description
      featuredImage {
        childImageSharp {
          fluid(maxWidth: 1980, maxHeight: 768, quality: 80, srcSetBreakpoints: [350, 700, 1050, 1400]) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
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