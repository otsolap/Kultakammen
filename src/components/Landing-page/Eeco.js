import React from "react"
import { StaticImage } from "gatsby-plugin-image"


const Eeco = () => {
  return (
    <section id="eeco">
      <h2 className="text-center gold">Verkkokauppojen haamukuiskaaja</h2>
      <div className="eeco-dev grids col-1 sm-2">
        <div className="eeco-img">
          <StaticImage
            src="../../../static/assets/Eeco.png"
            alt="Kultakämmen profiilikuva"
            className="featured-image"
            objectFit="cover"

          />
        </div>
        <div className="eeco-description-otso">
          <p>
            Rakennan uusia verkkokauppoja ja päivitän nykyisiä mahtavan tiimin parissa. Normiarkeeni kuuluu niin uusien sivujen luonti sekä nykyisten kaunistaminen. Nämä toteutukset koostaan WooCommercen päälle. Työtehtäviini kuuluu myös erilaisten lisäosien rakentaminen tai yhteensovittaminen asiakkaiden verkkokauppoihin.
          </p>
          <p>
            Ylläpidän ja rakennan uusia ominaisuuksia nykyisille asiakkaille. Olen esimerkiksi kehittänyt verkkovalmennusalustaa, parantanut kaupan toiminnallisuuksia sekä kehittänyt Google Analytics-seurantaa.
          </p>

        </div>
      </div>
      <div className="client-project grids col-1 sm-2">
        <div className="eeco-description">
          <h4>Pintaa syvemmälle asiakaspolun ymmärtämisessä</h4>
          <p>
            Palveluluihimme kuuluu myös asiakkaiden verkkokäyttäytymisen seuranta. Olen lyhyessä ajassa päässyt kehittämään ja päivittämään Eecon Google Analytics sekä Tag Manager koodipohjaa. Aiemmassa elämässäni olin digimarkkinoija, joten Googlen palvelut ja parhaat käytännöt ovat jo minulle entuudestaan tuttuja.
          </p>
          <p> <strong>Työkaluvyöhöni kuuluu</strong>: <em>React, JavaScript, Php, Sass, Boostrap, Wordpress, WooCommerce,   räätälöidyt teemat, WP-plugarit, Google Analytics ja Tag Manager.</em>
          </p>
        </div>

        <div className="eeco-img">
          <StaticImage
            src="../../../static/assets/Eeco-New-Clients.jpg"
            alt="Kultakämmen profiilikuva"
            className="featured-image"
            objectFit="cover"
          />
        </div>
      </div>

    </section >
  )
}

export default Eeco;
