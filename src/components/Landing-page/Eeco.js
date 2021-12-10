import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Eeco = () => {
  const data = useStaticQuery(graphql`
  query CareerQuery {
    allUtilJson {
      nodes {
        career {
          DescriptionOne
          DescriptionTwo
          ToolKit
          subtitle
          title
          featuredImageOne {
            childImageSharp {
              gatsbyImageData(height: 145, width: 585, layout: CONSTRAINED)
            }
          }
          featuredImageTwo {
            childImageSharp {
              gatsbyImageData(height: 439, width: 585, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }  
  `)

  const { career } = data.allUtilJson.nodes[0, 1]


  const ImageOne = career.featuredImageOne
    ? career.featuredImageOne.childImageSharp.gatsbyImageData
    : ""

  const ImageTwo = career.featuredImageTwo
    ? career.featuredImageTwo.childImageSharp.gatsbyImageData
    : ""

  return (
    <section id="eeco">
      <h2 className="text-center gold">{career.title}</h2>
      <div className="eeco-dev grids col-1 sm-2">
        <div className="eeco-img">
          <GatsbyImage
            image={ImageOne}
            alt={career.title}
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
          <strong className="toolkit-txt">Työkaluvyöhöni kuuluu:</strong> {career.ToolKit}
        </div>

        <div className="eeco-img">
          <GatsbyImage
            image={ImageTwo}
            alt={career.subtitle}
            className="featured-image"
            objectFit="cover"
          />
        </div>
      </div>

    </section >
  )
}

export default Eeco;
