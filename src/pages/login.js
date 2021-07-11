import React from "react"
import { login, isAuthenticated, getProfile } from "../util/auth"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Login = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Siirrytään sisäänkirjautumiseen.</p>
  }

  const user = getProfile()


  return (
    <Layout>
      <SEO title="Sisäänkirjautuminen" />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>HELLO WORLD!!!!</p>
    </Layout>
  )
}

export default Login