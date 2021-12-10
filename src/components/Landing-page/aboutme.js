import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const AboutMe = () => {
  const query = useStaticQuery(graphql`
  query aboutMeQuery {
    allUtilJson {
      nodes {
        aboutMe {
          CTA
          CtaLink
          profession
          salesPitch
          subtitle
          title
           featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED,
                    width: 585, 
                    height: 439)
                }
              }
        }
      }
    }
  }
  
  `)

  const { aboutMe } = useStaticQuery(query)
  const {
    CTA,
    CtaLink,
    profession,
    salesPitch,
    subtitle,
    title,
    featuredImage
  } = aboutMe.allUtilJson
  console.log(aboutMe)
  console.log(aboutMe.allUtilJson)

  const Image = featuredImage
    ? featuredImage.childImageSharp.gatsbyImageData
    : ""

  return (
    <section id="aboutMe">
      <div className="home-banner grids col-1 sm-2">
        <div>
          <h1 className="title">{title}</h1>
          <div className="tag-container">
            <p className="tagline">{subtitle}</p>
            <p className="tagline">{profession}</p>
          </div>
          <p>
            {salesPitch}</p>
          <p>Jos haluat nähdä CV:ni voit kirjautua <Link to="/portfolio">tästä</Link> sisään portfoliosivulleni.</p>
          <Link to={CtaLink} className="button tutustu"><span>{CTA}</span></Link>
        </div>
        <div>
          <GatsbyImage
            image={Image}
            alt="Kultakämmen profiilikuva"
            className="featured-image portfolio"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe;