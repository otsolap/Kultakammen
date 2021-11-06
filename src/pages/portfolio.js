import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PrivateContent from '../components/Auth/PrivateContent'

export default () => {
  return (
    <Layout>
      <PrivateContent
        as={Portfolio}
        callbackPath="/member/"
        rolesAllowed={['member']}
      />
    </Layout>
  )
}


const Portfolio = () => {
  return (
    <Layout className="portfoli-page">
      <SEO title="Portfolio | Otso Lappalainen" />
      <div className="introduction-container">
        <p>Tervetuloa <span className="gold">hello mom</span>. Tässä CV:ni olkaapi hyvä:</p>
      </div>
      <div class="CV-container">
        <div className="profile-introduction">
          <h1>Otso <span className="gold">Lappalainen</span></h1>
          <div className="roles">
            <p className="role gold">Full-Stack ohjelmistokehittäjä</p>
            <p className="role gold">Webdevaus</p>
            <p className="role gold">Analytiikka</p>
          </div>
          <div className="address-container">
            <p className="address">Helsinginkatu 9A 19, 00500 Helsinki Finland</p>
          </div>
          <div id="contact" className="contact-container">
            <p className="contact-details">
              <a href="mailto:otso@kultakammen.fi">
                otso@kultakammen.fi
              </a>
            </p>
            <p className="contact-details">
              <a href="tel:0503244139" data-telegram="telegram">
                +358503244138
              </a>
            </p>
            <p className="contact-details">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/otsolap">
                Github
              </a>
            </p>
            <p className="contact-details">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/otsolap/">
                LinkedIn</a>
            </p>
          </div>
        </div>
        <div className="profile-container">
          <h2 className="gold">Profiili</h2>
          <p>Olen kiinnostunut webkehityksestä, jossa pääsen työskentelemään asiakaskokemuksien parissa sekä soveltamaan asiakaspoluista saatua web-analytiikka dataa. Työkokemukseni on kehittynyt keskikokoisessa verkkokaupparatkaisu keskeisessä yrityksessä. Olen viimeisen vuoden aikana kehittänyt ohjelmistokehittäjän avaintaitoja ja haluan tarjota rautaisen työmoraalini ja intohimoni tiimillinne.</p>
        </div>
      </div>
      <div className="core-skills-container">
        <h2 className="core-skills-title gold">
          Ydinosaaminen
        </h2>
        <div className="rowwy">
          <div className="core-skill">
            <strong>Ohjelmointi:</strong>
            <p>React</p>
            <p>React-Redux</p>
            <p>React Native</p>
            <p>NodeJS</p>
          </div>
          <div className="core-skill">
            <strong>Analytiikka:</strong>
            <p>Google Tag Manager</p>
            <p>Google Analytics</p>
            <p>Google Ads</p>
            <p>SQL</p>
          </div>
          <div className="core-skill">
            <strong>Web/Media:</strong>
            <p>Javascript</p>
            <p>Php</p>
            <p>Photoshop</p>
            <p>Sony Vegas Pro</p>
          </div>
          <div className="core-skill">
            <strong>Projektihallinta:</strong>
            <p>Määrätietoinen</p>
            <p>Agile</p>
            <p>Täsmällinen</p>
            <p>Scrum</p>
          </div>
        </div>
      </div>
      <div class="experience-container">
        <h2 className="gold">Työkokemus</h2>
        <div className="employer-container">
          <p><strong>Eeco Oy </strong>| Helsinki, Suomi</p>
          <p><strong>Marraskuu 2020 - Nykyinen</strong></p>
        </div>
        <p><strong>Full Stack Developer</strong></p>
        <ul className="experience-list-container">
          <li>
            Rakennan uusia verkkokauppoja mahtavan tiimin kanssa. Uusasiakkuuksiin kuuluu mm <a rel="noopener noreferrer" target="_blank" href="https://www.roh.to/">roh.to</a>, <a rel="noopener noreferrer" target="_blank" href="https://lennol.fi/">lennol.fi</a>, <a rel="noopener noreferrer" target="_blank" href="https://equestrianshop.fi/">equestrianshop.fi</a>.
          </li>
          <li>
            Ylläpidän ja päivitän Eecon Google Datalayeria.
          </li>
          <li>
            Työkalut: <i>Wordpress, WooCommerce, Php, Sass, Boostrap, JavaScript, Wordpress teemat ja plugarit, Google Analytics sekä Tag Manager.</i>
          </li>
        </ul>
      </div>
      <div class="experience-container">
        <h2 className="gold">Koulutus</h2>
        <div className="educational-institute-container">
          <p><strong> Business College Helsinki</strong></p>
          <p><strong> Tammikuu 2020 - Kesäkuu 2021</strong></p>
        </div>
        <p>
          Koodaajakoulutus, Tieto- ja viestintätekniikan tutkinto.
        </p>
        <ul className="experience-list-container">
          <li>
            Painotus JavaScriptiin, React- ja Redux-kirjastoihin sekä Nodeen.
          </li>
          <li>
            Ohjelmistokehittäjänä toimiminen yritysmaailmassa.
          </li>
          <li>
            Työkalut:<i> React, Node, MongoDB, Firebase, Bootstrap, REST API.</i>
          </li>
        </ul>

        <div className="educational-institute-container">
          <p><strong>Tradenomin kaksoistutkinto, Eurooppalainen Johtaminen.</strong></p>
          <p><strong>2014 - 2018</strong></p>
        </div>
        <ul className="experience-list-container">
          <li>
            Kaksoistutkinto, jossa painotus oli markkinointiin ja rahoitukseen
          </li>
          <li>
            Keskiarvo 4,18/5
          </li>
        </ul>
      </div>
      <h2 className="gold">Suosittelijat</h2>
      <div className="referrals-container grids col-1 sm-2">
        <div class="referee-one">
          <p><strong>Navid Nosrati</strong>, JobGo International</p>
          <p>UI/UX-Suunnittelija, Front-end devaaja.</p>
          <p>
            <a className="gold" href="tel:0451225770" data-telegram="telegram">
              +358451225770
            </a>
          </p>
          <p>
            <a className="gold" href="mailto:navid.nosrati@axelhealth.com	">
              navid.nosrati@axelhealth.com
            </a>
          </p>
        </div>
        <div class="referee-two">
          <p><strong>Margit Tennosaar</strong>, Helsinki Business College</p>
          <p>Ohjelmistokehitys opettaja.</p>
          <p> <a className="gold" href="tel:0447756416" data-telegram="telegram">
            +358447756416
          </a></p>
          <p>
            <a className="gold" href="mailto:margit.tennosaar@bc.fi">
              margit.tennosaar@bc.fi
            </a>
          </p>
        </div>
      </div>
      <div class="Cover-letter-container">
        <h2>Lyhyesti minusta:</h2>
        <p>
          Olen toiminut markkinointiassistenttina ja työkokemukseeni kuuluu monenlaista mieleenpainuvaa työtehtävää erilaisissa asiakasprojekteissa. Yksi mielenkiintoisimmista projekteista oli olla mukana kehittämässä kansainvälisen mediatalon bisnesanalyytikon kanssa lisäpalvelua asiakkaillemme, jossa asiakas pystyi saamaan paremman ymmärryksen omasta digitaalisesta markkinatilanteestaan. Kaikki vastuualueeni ovat vahvistaneet minun analyyttistä ja strategista osaamista sekä taitoani palvella asiakkaita. Nautin tuoda esille vahvasti perusteltuja suunnitelmia tuleviin asiakasprojekteihin, joissa myynti sekä kustannustehokkuus parantuvat.
        </p>
        <p>
          Aloitin vuosikymmenen alussa Koodaaja-koulutusohjelman Helsinki Business Collegessa, jossa painotus oli Reactiin ja Nodeen. Lyhyessä ajassa pääsin rakentamaan useita applikaatioita MERN-stack pohjalta. Yksi mielenkiintoisimmista projekteista oli olla mukana kehittämässä kyselypeliä, joka tarjosi pelin lopussa soittolistan vastauksien perusteella käyttäjälle. Tähän projektiin pääsimme soveltamaan Reactin ja Noden lisäksi MongoDB:ta, Spotifyita sekä Herokua saadaksemme julkaistua applikaation kokomaailman pelattavaksi. Pääset pelaamaan Playlist of the Play peliä <a target="_blank" rel="noreferrer" href="https://daily-playlist-frontend.herokuapp.com/">tästä.</a>
        </p>
        <p>Nykyään toimin Eecolla full-stack web developerina.</p>
      </div>
      <div className="logout-container">
        <Link
          className="button"
          to="/#yhteydenotto"
          rel="noopener noreferrer"
          target="_blank"
        >
          Ota yhteyttä
        </Link>
        <a
          className="button"
          href="#logout"
        >
          Kirjaudu ulos.
        </a>
      </div>
    </Layout >
  )
}