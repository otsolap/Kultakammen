import React from "react"
import {
  TiSocialGithub,
  TiSocialLinkedin,
} from "react-icons/ti"
import {
  RiStackOverflowFill,
} from "react-icons/ri"
import portfolio from '../util/portfolio.json'


const Footer = () => {

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-social">
          <div className="footer-social-text"><p>{portfolio.footer.CTA}</p></div>
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
        <p>{portfolio.footer.companyName}  ©{new Date().getFullYear()} | y-tunnus: {portfolio.footer.companyID} </p>
      </div>
    </footer>
  )
}

export default Footer