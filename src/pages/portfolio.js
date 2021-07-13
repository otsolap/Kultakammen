import React from "react"
import { login, logout, isAuthenticated, getProfile } from "../util/auth"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Siirrytään sisäänkirjautumiseen.</p>
  }

  const user = getProfile()


  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <a
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