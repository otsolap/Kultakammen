import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { handleAuthentication } from "../util/auth"

const Callback = () => {
  // Jos tää ei toimi, niin luo tuo eksynyt divi.
  handleAuthentication()
  return (
    <Layout>
      <SEO title="" />
      <h1>Odota hetki.</h1>
      <p>Ladataan..... Pieni hetki.</p>
      <Link to="/portfolio" className="button palaa-takaisin-etusivulle">Klikkaa tästä, jos sivu ei lataudu.</Link>
    </Layout>
  )
}

export default Callback;