import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const AboutMe = () => {
  return (
    <section id="aboutme">
      <div className="home-banner grids col-1 sm-2">
        <div>
          <h1 className="title">Kultakämmen</h1>
          <p className="tagline">Otso Lappalainen | Full Stack Web-devaaja</p>
          <div className="description" />
          <p>
            Koodaan verkkokauppoja <a href="https://eeco.fi/">Eecossa</a> ja tubetan <a href="https://www.metsanotus.fi/">Metsän Otus</a> kanavassa. Olen Koodarivelho, jonka sydän pumppaa intoa verkkosivuihin, kasvuhakkerointiin ja asiakaspolkujen kehitykseen. </p>
          <p>
            Kiinnostuksen kohteenani ovat verkkosivut, joissa pääsen työskentelemään asiakaskokemuksien parissa sekä soveltamaan asiakaspoluista saatua web-analytiikka dataa.</p>
          <Link to="#contact" className="button tutustu minuun"><span>Palkkaa minut</span></Link>
        </div>
        <div>
          <StaticImage
            src="../../../static/assets/OTSO.jpg"
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
