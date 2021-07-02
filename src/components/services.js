import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Placeholder from '../../static/assets/Placeholder.jpg'

const Services = () => {
  return (
    <section id="services">
      <div className="wrapper">
        <h2 className="text-center">Palveluni</h2>
        <div className="grids col-1 sm-2">
          <div className="service-card">
            <div className="service-img">
              {Image ? (
                <GatsbyImage
                  src={Placeholder}
                  image={Image}
                  alt="Kultakämmen palvelut"
                  className="featured-image"
                  objectFit="cover"
                />
              ) : ""}
            </div>
            <h3 className="title">Kotisivut</h3>
            <p>Tehdään sinulle uudet ja laadukkaat nettisivut alan parhailla metodeilla ja teknologioilla!</p>
            <span><strong>Lähtöhinta:</strong> 999€</span>
          </div>
          <div className="service-card">
            <div className="service-img">
              {Image ? (
                <GatsbyImage
                  src={Placeholder}
                  image={Image}
                  alt="Kultakämmen palvelut"
                  className="featured-image"
                  objectFit="cover"
                />
              ) : ""}
            </div>
            <h3 className="title">SEO</h3>
            <p>Suunnittelen ja luon Google Ads tilin, jotta saat parempaa näkyvyyttä kustannustehokkaammin.</p>
            <span><strong>Lähtöhinta:</strong> 999€</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;