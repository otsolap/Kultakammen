import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const AboutMe = () => {
  const data = useStaticQuery(graphql`
  query aboutMeQuery {
    allUtilJson {
      nodes {
        aboutMe {
          CTA
          profession
          salesPitch
          title
          subtitle
          CtaLink
          featuredImage {
            childImageSharp {
              gatsbyImageData(height: 439, width: 585, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }  
  `)

  const { aboutMe } = data.allUtilJson.nodes[0, 1]


  const Image = aboutMe.featuredImage
    ? aboutMe.featuredImage.childImageSharp.gatsbyImageData
    : ""


  return (
    <section id="aboutMe">
      <div className="home-banner grids col-1 sm-2">
        <div>
          <h1 className="title">{aboutMe.title}</h1>
          <div className="tag-container">
            <p className="tagline">{aboutMe.subtitle}</p>
            <p className="tagline">{aboutMe.profession}</p>
          </div>
          <p> {aboutMe.salesPitch}</p>
          <p>Jos haluat nähdä CV:ni voit kirjautua <Link to="/portfolio">tästä</Link> sisään portfoliosivulleni.</p>
          <Link to={aboutMe.CtaLink} className="button tutustu"><span>{aboutMe.CTA}t</span></Link>
        </div>
        <div>
          <GatsbyImage
            image={Image}
            alt={aboutMe.title}
            className="featured-image"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe;