import React from "react"
import { StaticImage } from "gatsby-plugin-image"


const Services = () => {
  return (
    <section id="services">
      <div className="wrapper">
        <h2 className="gold text-center">Palveluni</h2>
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
            <h3 className="title">Verkkosivut</h3>
            <p>Koodaan moderneille menetelmillä, jotta nettisivusi olisivat entistä toimivampia, turvallisempia ja kustannustehokkaampia. Tehdään sinulle uudet ja laadukkaat nettisivut parhailla menetelmillä.</p>
            <span className="price"><strong>Lähtöhinta:</strong> 999€</span>
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
            <h3 className="title">Google Markkinointi: SEO & SEM</h3>
            <p>Suunnittelen ja luon Google Ads tilin, jotta saat parempaa näkyvyyttä kustannustehokkaammin. Käyn myös läpi nettisivun hakukoneoptimoinnin parhaat menetelmät.</p>
            <span className="price"><strong>Lähtöhinta:</strong> 999€</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;