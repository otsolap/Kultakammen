import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { handleAuthentication } from "../util/auth"
import { RiArrowLeftSLine, RiBugLine, RiSkullLine } from "react-icons/ri"

const Callback = () => {

  // Jos tää ei toimi, niin luo tuo eksynyt divi.
  handleAuthentication()
  return (
    <Layout>
      <SEO title="" />
      <p>Ladataan..... Pieni hetki.</p>
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
        <Link to="/contact" className="button -outline">Report this <RiBugLine className="icon -right" /></Link>
      </div>
    </Layout>
  )
}

export default Callback;