import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import EecoDev from '../../static/assets/OtsoEeco.png'
import Placeholder from '../../static/assets/Placeholder.jpg'
import GTM from '../../static/assets/GTM.png'

const Eeco = () => {
  return (
    <section id="eeco">
      <h2 className="text-center">Portfolio</h2>
      <div className="eeco-dev grids col-1 sm-2">
        <div className="eeco-img">
          {Image ? (
            <GatsbyImage
              src={EecoDev}
              image={Image}
              alt="Kultakämmen profiilikuva"
              className="featured-image"
              objectFit="cover"
            />
          ) : ""}
        </div>
        <div className="eeco-description-otso">
          <p>
            Rakennan uusia verkkokauppoja ja päivitän nykyisiä mahtavan tiimin parissa.  Normiarkeeni kuuluu niin uusien sivujen luonti sekä nykyisten kaunistaminen. Erilaisten lisäosien rakentaminen tai yhteensovittaminen asiakkaan verkkokauppaan. Nämä toteutukset koostaan WooCommercen päälle!</p>

          <p> <strong>Työkaluvyöhöni kuuluu</strong>: <em>React, JavaScript, Php, Sass, Boostrap, Wordpress, WooCommerce,   räätälöidyt lapsiteemat, WP-plugarit, Google Analytics ja Tag Manager.</em>
          </p>
        </div>
      </div>
      <h3 className="text-center">Työtehtäväni</h3>
      <div className="client-project grids col-1 sm-2">
        <div className="eeco-description">
          <h4>Placeholder otsikko</h4>
          <p>
            Ylläpidän ja rakennan uusia ominaisuuksia nykyisille asiakkaille kuten Four Reasons. Kauneusalan kapinallisille olen osana tiimiä kehittänyt heidän verkkovalmennusalustaa, parantanut toiminnallisuuksia eri asiakaskohderyhmille sekä kehittänyt google analytics-seurantaa.
          </p>
        </div>
        <div className="eeco-img">
          {Image ? (
            <GatsbyImage
              src={Placeholder}
              image={Image}
              alt="Kultakämmen profiilikuva"
              className="featured-image"
              objectFit="fit"
            />
          ) : ""}
        </div>
      </div>
      <div className="client-project grids col-1 sm-2">
        <div className="eeco-img">
          {Image ? (
            <GatsbyImage
              src={Placeholder}
              image={Image}
              alt="Kultakämmen profiilikuva"
              className="featured-image"
              objectFit="fit"
            />
          ) : ""}
        </div>
        <div className="eeco-description">
          <h4>Placeholder otsikko</h4>
          <p>
            Ymmärrän mitkä ovat verkkokauppaan tärkeimmät tekijät niin verkkokauppiaan kuin kuluttajan näkökulmasta. Luomme WooCommercen parhaista paloista sekä Eecon omasta WordPress--teemasta myyvän verkkokaupan, jossa mobiilikäyttäjät ovat kaiken keskiössä. Verkkokauppamme ovat myös valmiiksi yhteen sopivia Google Shopping sekä Schemaan. Teemamme edesauttaa hakukoneoptimoinnin huomiontiin sekä kuukkelin analytiikkaan.
          </p>
        </div>
      </div>
      <div className="client-project grids col-1 sm-2">
        <div className="eeco-description">
          <h4>Kuukkelin kutsu</h4>
          <p>
            Haamujengimme ylläpitää Eeco-teemaa ajan tasalla. Noudatamme WordPress teemastandardeja tarjotessamme modernia verkkokauppaa, jossa performanssi on valmiiksi optimoitu. Olen lyhyessä ajassa päässyt kehittämään ja päivittämään Eecon teema, varsinkin asiakaskäyttäytymisen seuranta google analyticsia soveltamalla.  Olen myös osana Eecon Google datalayer tiimiä, jossa tarjoamme asiakkaille Google Tag Managerin kautta analytiikkapalvelua.
          </p>
        </div>
        <div className="eeco-img">
          {Image ? (
            <GatsbyImage
              src={GTM}
              image={Image}
              alt="Kultakämmen profiilikuva"
              className="featured-image"
              objectFit="fit"
            />
          ) : ""}
        </div>
      </div>
    </section >
  )
}

export default Eeco;
