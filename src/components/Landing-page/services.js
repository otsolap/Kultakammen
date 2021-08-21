import React from "react"
import { StaticImage } from "gatsby-plugin-image"


const Services = () => {
  return (
    <section id="services">
      <div className="wrapper">
        <h2 className="gold text-center">Palveluni</h2>
        <div className="grids col-1 sm-2">
          <div className="service-card">
            <div className="service-img">
              <StaticImage
                src="../../../static/assets/Placeholder.jpg"
                alt="Kultakämmen palvelut"
                className="featured-image"
                objectFit="cover"
              />
            </div>
            <h3 className="title">Verkkosivut</h3>
            <p>Tehdään sinulle uudet ja laadukkaat nettisivut alan parhailla metodeilla ja teknologioilla. Koodaan moderneille menetelmillä, jotta nettisivusi olisivat entistä toimivampia, turvallisempia ja kustannustehokkaampia.</p>
            <span className="price"><strong>Lähtöhinta:</strong> 999€</span>
          </div>
          <div className="service-card">
            <div className="service-img">
              <StaticImage
                src="../../../static/assets/Placeholder.jpg"
                alt="Kultakämmen palvelut"
                className="featured-image"
                objectFit="cover"
              />
            </div>
            <h3 className="title">Google Markkinointi: SEO & SEM</h3>
            <p>Suunnittelen ja luon Google Ads tilin, jotta saat parempaa näkyvyyttä kustannustehokkaammin.</p>
            <span className="price"><strong>Lähtöhinta:</strong> 999€</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;