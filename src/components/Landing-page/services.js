import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const Services = () => {

  const data = useStaticQuery(graphql`
  query ServicesQuery {
    portfolioJson {
      services {
        analyticsDescription
        analyticsPrice
        title
        webDescription
        webPrice
        webTitle
        analyticsFeaturedImage {
          childrenImageSharp {
            gatsbyImageData(
            layout: CONSTRAINED,
            width: 585
            height: 439)
          }
        }
      }
    }
  }  
  `)

  const { services } = data.portfolioJson

  return (
    <section id="services">
      <div className="wrapper">
        <h2 className="gold text-center">{services.title}</h2>
        <p className="text-center"></p>
        <div className="grids col-1 sm-2">
          <div className="service-card">
            <div className="service-img">
              <GatsbyImage
                src={services.analyticsFeaturedImage}
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
                src={services.analyticsFeaturedImage}
                alt="Kultakämmen palvelut"
                className="featured-image"
                objectFit="cover"
              />
            </div>
            <h3 className="title">{services.analyticsDescription}</h3>
            <span className="price"><strong>Lähtöhinta:</strong> {services.analyticsPrice}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;