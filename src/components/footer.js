import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  TiSocialGithub,
  TiSocialLinkedin,
} from "react-icons/ti"

import {
  RiStackOverflowFill,
} from "react-icons/ri"

const query = graphql`
query FooterQuery {
  site {
    siteMetadata {
      footer_company_name
      footer_cta
    }
  }
}
`


const Footer = () => {

  const { site } = useStaticQuery(query)
  const {
    footer_company_name,
    footer_cta,
    footer_company_id
  } = site.

    return(
      <footer className="site-footer">
        <div className="container">
          <div className="footer-social">
            <div className="footer-social-text"><p>{footer_cta}</p></div>
            <div className="footer-social-icons">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/otsolap/"
                rel="noopener noreferrer"
              >
                <span className="icon-container" id="linkedin-icon">
                  <TiSocialLinkedin className="footer-social-icon" />
                </span>
              </a>
              <a
                target="_blank"
                href="https://github.com/otsolap"
                rel="noopener noreferrer"
              >
                <span className="icon-container" id="github-icon">
                  <TiSocialGithub className="footer-social-icon" />
                </span>
              </a>
              <a
                target="_blank"
                href="https://stackoverflow.com/users/13285496/kultak%c3%a4mmen/"
                rel="noopener noreferrer"
              >
                <span className="icon-container" id="stackoverflow-icon">
                  <RiStackOverflowFill className="footer-social-icon" />
                </span>
              </a>
            </div>
          </div>
          <p>{footer_company_name}©{new Date().getFullYear()} | Y-tunnus:{footer_company_id}</p>
        </div>
      </footer>
    )
}

export default Footer