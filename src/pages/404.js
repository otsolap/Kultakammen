import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine, RiSkullLine } from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <SEO title="Sivua ei löydy" />
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <header>
        <RiSkullLine style={{
          fontSize: "128px",
          color: "var(--primary-color)"
        }} />
        <h1>Oletko eksynyt?</h1>
        <p>Oletko tipahtanut kaninkoloon etkä pääse pois? Ei se mitään, näin pääset takaisin.</p>
      </header>
      <Link to="/" className="button palaa-takaisin-etusivulle"><RiArrowLeftSLine className="icon -left" />Takaisin etusivulle.</Link>
      <Link to="/#yhteydenotto" className="button -outline"><RiBugLine className="icon -right" />
        Ilmianna bugi</Link>
    </div>
  </Layout>
)

export default NotFound