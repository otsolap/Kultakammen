import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const AboutMe = () => {
  const data = useStaticQuery(graphql`
  query aboutMeQuery {
    portfolioJson {
      aboutMe {
        CTA
        CtaLink
        profession
        salesPitch
        title
        subtitle
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED, 
              width: 585
              height: 439
              )
          }
        }
      }
    }
  }
  
  `)

  const { aboutMe } = data.portfolioJson


  return (
    <section id="aboutMe">
      <div className="home-banner grids col-1 sm-2">
        <div>
          <h1 className="title">{aboutMe.title}</h1>
          <div className="tag-container">
            <p className="tagline">{aboutMe.subtitle}</p>
            <p className="tagline">{aboutMe.profession}</p>
          </div>
          <p>
            {aboutMe.salesPitch}</p>
          <p>Jos haluat nähdä CV:ni voit kirjautua <Link to="/portfolio">tästä</Link> sisään portfoliosivulleni.</p>
          <Link to={aboutMe.CtaLink} className="button tutustu"><span>{aboutMe.CTA}t</span></Link>
        </div>
        <div>
          <GatsbyImage
            src={aboutMe.featuredImage}
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