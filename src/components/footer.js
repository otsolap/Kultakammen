import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  TiSocialGithub,
  TiSocialLinkedin,
} from "react-icons/ti"
import {
  RiStackOverflowFill,
} from "react-icons/ri"


const Footer = () => {
  const data = useStaticQuery(graphql`
  query FooterQuery {
    portfolioJson {
      footer {
        CTA
        companyID
        companyName
      }
    }
  }  
  `)

  const { footer } = data.portfolioJson

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-social">
          <div className="footer-social-text"><p>{footer.CTA}</p></div>
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
        <p>{footer.companyName}  ©{new Date().getFullYear()} | y-tunnus: {footer.companyID} </p>
      </div>
    </footer>
  )
}

export default Footer