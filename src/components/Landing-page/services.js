import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const Services = () => {

  const data = useStaticQuery(graphql`
  query ServicesQuery {
    allUtilJson {
      nodes {
        services {
          analyticsDescription
          analyticsPrice
          analyticsTitle
           analyticsFeaturedImage {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 585, height: 439)
            }
          }
          title
          webDescription
          webPrice
          webTitle
            webFeaturedImage {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 585, height: 439)
            }
          }
        }
      }
    }
  }  
  `)

  const { services } = data.portfolioJson
  const webImage = services.webFeaturedImage
    ? services.webFeaturedImage.childImageSharp.gatsbyImageData
    : ""

  const analyticsImage = services.analyticsFeaturedImage
    ? services.analyticsFeaturedImage.childImageSharp.gatsbyImageData
    : ""

  return (
    <section id="services">
      <div className="wrapper">
        <h2 className="gold text-center">{services.title}</h2>
        <p className="text-center"></p>
        <div className="grids col-1 sm-2">
          <div className="service-card">
            <div className="service-img">
              <GatsbyImage
                image={webImage}
                alt="Kultakämmen palvelut"
                className="featured-image"
                objectFit="cover"
              />
            </div>
            <h3 className="title">{services.webTitle}</h3>
            <p>{services.webDescription}</p>
            <span className="price"><strong>Lähtöhinta:</strong>{services.webPrice}</span>
          </div>
          <div className="service-card">
            <div className="service-img">
              <GatsbyImage
                image={analyticsImage}
                alt="Kultakämmen palvelut"
                className="featured-image"
                objectFit="cover"
              />
            </div>
            <h3 className="title">{services.analyticsTitle}</h3>
            <p>{services.analyticsDescription}</p>
            <span className="price"><strong>Lähtöhinta:</strong> {services.analyticsPrice}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;