import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import aboutMeCMS from "../../util/frontend.json";

const { aboutMe } = aboutMeCMS

const AboutMe = () => {
  return (
    <section id="aboutMe">
      <div className="home-banner grids col-1 sm-2">
        <div>
          <h1 className="title">{aboutMe.title}</h1>
          <div className="tag-container">
            <p className="tagline">{aboutMe.subtitle}</p>
            <p className="tagline">{aboutMe.profession}</p>
          </div>
          <p>
            {aboutMe.salesPitch}</p>
          <p>Jos haluat nähdä CV:ni voit kirjautua <Link to="/portfolio">tästä</Link> sisään portfoliosivulleni.</p>
          <Link to={aboutMe.CtaLink} className="button tutustu"><span>{aboutMe.CTA}t</span></Link>
        </div>
        <div>
          <StaticImage
            src="../../../static/assets/OtsoEeco.png"
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