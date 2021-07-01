import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import dev from '../../static/assets/OTSO.jpg'

const AboutMe = () => {
  return (
    <section id="aboutme">
      <div className="home-banner grids col-1 sm-2">
        <div>
          <h1 className="title">Otso Lappalainen</h1>
          <p className="tagline">Kultakämmen</p>
          <div className="description" />
          <p>Olen Koodarivelho, jonka sydän pumppaa intoa verkkosivuihin, kasvuhakkerointiin ja asiakaspolkujen kehitykseen.</p>
          <Link to="#contact" className="button tutustu minuun"><span>Palkkaa minut</span></Link>
        </div>
        <div >
          {Image ? (
            <GatsbyImage
              src={dev}
              image={Image}
              alt="Kultakämmen profiilikuva"
              className="featured-image portfolio"
              objectFit="cover"
            />
          ) : ""}
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
