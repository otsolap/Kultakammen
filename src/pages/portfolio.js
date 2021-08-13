import React from "react"
import { Link } from "gatsby"
import { login, logout, isAuthenticated, getProfile } from "../util/auth"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => {
  /*  if (!isAuthenticated()) {
     login()
     return <p>Siirrytään sisäänkirjautumiseen.</p>
   } */

  // Käytä Auth0 Raw JSON ja saat kaiken kivan tiedon.
  const user = getProfile();


  return (
    <Layout>
      <SEO title="Portfolio | Otso Lappalainen" />
      <div className="introduction-container">
        <p>Tervetuloa <span className="auth-user">{user.nickname}</span> Tässä CV:ni olkaapi hyvä:</p>
      </div>
      <div class="Cover-letter-container">

      </div>
      <div class="CV-container">
        <div className="profile-introduction">
          <h1>Otso <span className="honeypaw">Lappalainen</span></h1>
          <table className="roles">
            <tr>
              <td className="role">Full-Stack ohjelmistokehittäjä</td>
              <td className="role">Webdevaus</td>
              <td className="role">Analytiikka</td>
            </tr>
          </table>
          <div className="address-container">
            <p className="address">Helsinginkatu 9A 19, 00500 Helsinki Finland</p>
          </div>
          <table className="contact-container">
            <tr>
              <td className="contact-details">
                <a href="mailto:otso@kultakammen.fi">
                  otso@kultakammen.fi
                </a>
              </td>
              <td className="contact-details">
                <a href="tel:0503244139" data-telegram="telegram">
                  <span className="contact-details">
                    +358503244138
                  </span>
                </a>
              </td>
              <td className="contact-details">
                <a target="_blank" href="https://github.com/otsolap">
                  <span className="contact-details">
                    Github
                  </span>
                </a>
              </td>
              <td className="contact-details">
                <a target="_blank" href="https://www.linkedin.com/in/otsolap/">
                  <span className="contact-details">
                    LinkedIn
                  </span></a>
              </td>
            </tr>
          </table>
        </div>
        <div className="profile-container">
          <h2>Profiili</h2>
          <p>Olen kiinnostunut webkehityksestä, jossa pääsen työskentelemään asiakaskokemuksien parissa sekä soveltamaan asiakaspoluista saatua web-analytiikka dataa. Työkokemukseni on kehittynyt keskikokoisessa verkkokaupparatkaisu keskeisessä yrityksessä. Olen viimeisen vuoden aikana kehittänyt ohjelmistokehittäjän avaintaitoja ja haluan tarjota rautaisen työmoraalini ja intohimoni tiimillinne.</p>
        </div>
      </div>
      <div className="core-skills-container">
        <table>
          <thead>
            <tr>
              <th className="core-skills-title">
                Ydinosaaminen
              </th>
            </tr>
            <tbody>
              <tr>
                <th>Ohjelmointi</th>
                <td>React</td>
                <td>React-Redux</td>
                <td>NodeJS</td>
              </tr>
              <tr>
                <th>Analytiikka</th>
                <td>Google Tag Manager</td>
                <td>Google Analytics</td>
                <td>SQL</td>

              </tr>
              <tr>
                <th>Web/Media</th>
                <td>HTML/CSS/PHP/Javascript</td>
                <td>Photoshop</td>
                <td>Sony Vegas Pro</td>
              </tr>
              <tr>
                <th>Projektihallinta</th>
                <td>Täsmällinen & Määrätietoinen</td>
                <td>Agile</td>
                <td>Scrum</td>
              </tr>
            </tbody>
          </thead>
        </table>
      </div>
      <div class="job-experience-container">
        <h2>Työkokemus</h2>
        <div className="employer-container">
          <p>Eeco Oy | Helsinki, Suomi</p>
          <p>Marraskuu 2020 - Nykyinen</p>
        </div>
        <p>Full Stack Developer</p>
        <ul className="job-experience-list-container">
          <li>
            Rakennan frontend-devaajana uusia verkkokauppoja mahtavan tiimin kanssa. Uusasiakkuuksiin kuuluu mm roh.to, lennol.fi, equestrianshop.fi.
          </li>
          <li>
            Ylläpidän ja päivitän Eecon Google Datalayeria.
          </li>
          <li>
            Työkalut: Wordpress, WooCommerce, Sensei, php, Sass, Boostrap, JavaScript, jQuery, räätälöidyt lapsiteemat, WP-plugarit, Google Analytics ja Tag Manager.
          </li>
        </ul>
      </div>
      <div class="educational-experience-container">
        <h2>Koulutus</h2>
        <div className="educational-institute-container">
          <p>Business College Helsinki</p>
          <p>Tammikuu 2020 - Kesäkuu 2021</p>
        </div>
        <p>
          Koodaajakoulutus, Tieto- ja viestintätekniikan tutkinto.
        </p>
        <ul className="educational-experience-list-container">
          <li>
            Painotus JavaScriptiin, React- ja Redux-kirjastoihin sekä Nodeen.
          </li>
          <li>
            Ylläpidän ja päivitän Eecon Google Datalayeria.
          </li>
          <li>
            Ohjelmistokehittäjänä toimiminen yritysmaailmassa.
          </li>
          <li>
            Rakensin react-redux firebasea soveltavan SoMe-applikaation, Spotifyta hyödyntävän monivalinta-verkkopelin sekä oman henkilökohtaisen portfoliosivun.
          </li>
          <li>
            Työkalut: React, Node, MongoDB, Firebase, Bootstrap, REST API.
          </li>
        </ul>

        <div className="educational-institute-container">
          <p>Tradenomin kaksoistutkinto, Eurooppalainen Johtaminen.</p>
          <p>2014 - 2018</p>
        </div>
        <ul>
          <li>
            Kaksoistutkinto, jossa painotus oli markkinointiin ja rahoitukseen
          </li>
          <li>
            Keskiarvo 4,18/5
          </li>
        </ul>
      </div>
      <a
        className="button"
        href="#logout"
        onClick={e => {
          logout()
          e.preventDefault()
        }}
      >
        Log Out
      </a>
    </Layout >
  )
}



export default Portfolio;