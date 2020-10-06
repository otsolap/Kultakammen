import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiSkullLine } from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <SEO title="Sivua ei löytynyt" />
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <header>
        <RiSkullLine style={{
          fontSize: "128px",
          color: "var(--primary-color)"
        }} />
        <h1>Peruit tilauksen</h1>
        <p>Ei se mitään. En ole velottanut sinulta mitään. Voit palata helposti takaisin etusivulle alla olevasta linkistä.</p>
      </header>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left" />Takaisin etusivulle.</Link>
    </div>
  </Layout>
)

export default NotFound