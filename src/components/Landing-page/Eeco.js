import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Eeco = () => {

  const data = useStaticQuery(graphql`
  query CareerQuery {
    portfolioJson {
      career {
        DescriptionOne
        DescriptionTwo
        subtitle
        title
        featuredImageOne {
          childrenImageSharp {
            gatsbyImageData(height: 439, width: 585, layout: CONSTRAINED)
          }
        }
      }
    }
  }
  `)

  const { career } = data.portfolioJson


  return (
    <section id="eeco">
      <h2 className="text-center gold">{career.title}</h2>
      <div className="eeco-dev grids col-1 sm-2">
        <div className="eeco-img">
          <StaticImage
            src="../../../static/assets/Eeco.png"
            alt="Kultakämmen profiilikuva"
            className="featured-image"
            objectFit="cover"

          />
        </div>
        <div className="eeco-description-otso">
          {career.DescriptionOne}
        </div>
      </div>
      <div className="client-project grids col-1 sm-2">
        <div className="eeco-description">
          <h4>{career.subtitle}</h4>
          {career.DescriptionTwo}
        </div>

        <div className="eeco-img">
          <StaticImage
            src="../../../static/assets/Eeco-New-Clients.jpg"
            alt="Kultakämmen profiilikuva"
            className="featured-image"
            objectFit="cover"
          />
        </div>
      </div>

    </section >
  )
}

export default Eeco;
