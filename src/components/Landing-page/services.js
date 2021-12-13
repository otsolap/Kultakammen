import React from "react"
import portfolio from '../../util/portfolio.json'


const Services = () => {


  return (
    <section id="services">
      <div className="wrapper">
        <h2 className="gold text-center">{portfolio.services.title}</h2>
        <p className="text-center"></p>
        <div className="grids col-1 sm-2">
          <div className="service-card">
            <div className="service-img">
              <img
                src={portfolio.services.webFeaturedImage}
                alt={portfolio.services.webTitle}
                className="featured-image"
                objectFit="cover"
              />
            </div>
            <div className="services-text-wrapper">
              <h3 className="title">{portfolio.services.webTitle}</h3>
              <p>{portfolio.services.webDescription}</p>
              <span className="price"><strong>Lähtöhinta:</strong>{portfolio.services.webPrice}</span>
            </div>
          </div>
          <div className="service-card">
            <div className="service-img">
              <img
                src={portfolio.services.analyticsFeaturedImage}
                alt={portfolio.services.analyticsTitle}
                className="featured-image"
                objectFit="cover"
              />
            </div>
            <div className="services-text-wrapper">
              <h3 className="title">{portfolio.services.analyticsTitle}</h3>
              <p>{portfolio.services.analyticsDescription}</p>
              <span className="price"><strong>Lähtöhinta:</strong> {portfolio.services.analyticsPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;