import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import EecoDev from '../../static/assets/OtsoEeco.png'

const Eeco = () => {
  return (
    <section id="Eeco">
      <div className="Eeco-Otso">
        <div className="Eeco-img">
          {Image ? (
            <GatsbyImage
              src={EecoDev}
              image={Image}
              alt="Kultakämmen profiilikuva"
              className="featured-image"
              objectFit="fit"
            />
          ) : ""}
        </div>
        <div className="eeco-description">
          <p>
            lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum
          </p>
        </div>
      </div>
      <div className="client-project">
        <div className="eeco-description">
          <p>
            lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum
          </p>
        </div>
        <div className="Eeco-img">
          {Image ? (
            <GatsbyImage
              src={EecoDev}
              image={Image}
              alt="Kultakämmen profiilikuva"
              className="featured-image"
              objectFit="fit"
            />
          ) : ""}
        </div>
      </div>
      <div className="client-project">
        <div className="Eeco-img">
          {Image ? (
            <GatsbyImage
              src={EecoDev}
              image={Image}
              alt="Kultakämmen profiilikuva"
              className="featured-image"
              objectFit="fit"
            />
          ) : ""}
        </div>
        <div className="eeco-description">
          <p>
            lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum
          </p>
        </div>
      </div>
      <div className="client-project">
        <div className="eeco-description">
          <p>
            lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum
          </p>
        </div>
        <div className="Eeco-img">
          {Image ? (
            <GatsbyImage
              src={EecoDev}
              image={Image}
              alt="Kultakämmen profiilikuva"
              className="featured-image"
              objectFit="fit"
            />
          ) : ""}
        </div>
      </div>
      <div className="client-project">
        <div className="Eeco-img">
          {Image ? (
            <GatsbyImage
              src={EecoDev}
              image={Image}
              alt="Kultakämmen profiilikuva"
              className="featured-image"
              objectFit="fit"
            />
          ) : ""}
        </div>
        <div className="eeco-description">
          <p>
            lorem lipsum lorem lipsum lorem lipsum lorem lipsum lorem lipsum
          </p>
        </div>
      </div>
    </section>
  )
}

export default Eeco;
