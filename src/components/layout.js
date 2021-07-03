import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Logo from "./logo"
import Navigation from "./navigation";
import "../assets/scss/style.scss"
import Footer from "./footer";
import {
  useNetlifyIdentity,
  IdentityContextProvider,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css"

const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      siteTitle: title
    }
  }
}
`

const Layout = ({ children, className }) => {
  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata
  const identity = useNetlifyIdentity('https://kultakammen.fi/.netlify/identity');

  return (
    <IdentityContextProvider value={identity}>
      <div className="primary-container">
        <Header>
          <Logo title={siteTitle} />
          <Navigation />
        </Header>

        <main className={"container " + className}>
          {children}
        </main>
        <Footer />
      </div>
    </IdentityContextProvider>
  )
}

export default Layout

