import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import servicesCMS from '../../util/frontend.json'

const { services } = servicesCMS

const Services = () => {
  return (
    <section id="services">
      <div className="wrapper">
        <h2 className="gold text-center">{services.title}</h2>
        <p className="text-center"></p>
        <div className="grids col-1 sm-2">
          <div className="service-card">
            <div className="service-img">
              <StaticImage
                src="../../../static/assets/Kultakammen-New-Website.jpg"
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
              <StaticImage
                src="../../../static/assets/Kultakammen-Google.jpg"
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