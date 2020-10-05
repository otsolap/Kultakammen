import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <SEO title="Kiitos tilauksesta" />
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <RiCheckboxCircleLine style={{
        fontSize: "128px",
        color: "var(--primary-color)"
      }} />
      <h1>Tilauksesi vahvistettu</h1>
      <p>Kiitos tilauksestasi! Olen lähettänyt vahvistuksen sähköpostiisi ja olen yhteydessä sinuun mahdollisimman pian!</p>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left" />Palaa takaisin etusivulle.</Link>
    </div>

  </Layout>
)

export default Thanks