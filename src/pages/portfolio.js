import React from "react"
import { logout } from "../util/auth"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Takaisin etusivulle</Link>
      <a
        href="#logout"
        onClick={e => {
          logout()
          e.preventDefault()
        }}
      >
        Kirjaudu ulos.
      </a>
    </Layout>
  )
}



export default Portfolio;