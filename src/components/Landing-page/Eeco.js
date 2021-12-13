import React from "react"
import portfolio from '../../util/portfolio.json'

const Eeco = () => {


  return (
    <section id="eeco">
      <h2 className="text-center gold">{portfolio.career.title}</h2>
      <div className="eeco-dev grids col-1 sm-2">
        <div className="eeco-img">
          <img
            src={portfolio.career.featuredImageOne}
            alt={portfolio.career.title}
            className="featured-image"
            objectFit="cover"
          />
        </div>
        <div className="eeco-description-otso">
          {portfolio.career.DescriptionOne}
        </div>
      </div>
      <div className="client-project grids col-1 sm-2">
        <div className="eeco-description">
          <h4>{portfolio.career.subtitle}</h4>
          {portfolio.career.DescriptionTwo}
          <strong className="toolkit-txt">Työkaluvyöhöni kuuluu:</strong> {portfolio.career.ToolKit}
        </div>

        <div className="eeco-img">
          <img
            src={portfolio.career.featuredImageTwo}
            alt={portfolio.career.subtitle}
            className="featured-image"
            objectFit="cover"
          />
        </div>
      </div>

    </section >
  )
}

export default Eeco;
