import React from "react"
import { Link } from "gatsby"
import portfolio from '../../util/portfolio.json'

const AboutMe = () => {

  return (
    <section id="aboutMe">
      <div className="home-banner grids col-1 sm-2">
        <div>
          <h1 className="title">{portfolio.aboutMe.title}</h1>
          <div className="tag-container">
            <p className="tagline">{portfolio.aboutMe.subtitle}</p>
            <p className="tagline">{portfolio.aboutMe.profession}</p>
          </div>
          <p> {portfolio.aboutMe.salesPitch}</p>
          <p>Jos haluat nähdä CV:ni voit kirjautua <Link to="/portfolio">tästä</Link> sisään portfoliosivulleni.</p>
          <Link to={portfolio.aboutMe.CtaLink} className="button tutustu"><span>{portfolio.aboutMe.CTA}</span></Link>
        </div>
        <div className="home-banner-img">
          <img
            src={portfolio.aboutMe.featuredImage}
            alt={portfolio.aboutMe.title}
            className="featured-image"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMe;