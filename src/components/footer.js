import React, { Component } from "react"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"
import { TiSocialGithub, TiSocialLinkedin, } from "react-icons/ti"
import { RiStackOverflowFill, } from "react-icons/ri"


class Footer extends Component {
  render() {
    const { data } = this.props
    const {
      frontmatter
    } = data.markdownRemark

    return (
      <footer className="site-footer">
        <div className="container">
          <div className="footer-social">
            <div className="footer-social-text"><p>{frontmatter.CTA}</p></div>
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
          <p>{frontmatter.companyName}©{new Date().getFullYear()} | Y-tunnus:{frontmatter.companyID}</p>
        </div>
      </footer>
    )
  }
}


export default function FooterData() {
  return (
    <StaticQuery
      query={graphql`
    query FooterQuery {
      allMarkDownRemark (
        filter: { frontmatter: { templateKey: { eq: "index-page" } } } 
      ) {
        edges {
          node {
            frontmatter {
              templateKey
              Footer {
                CTA
                companyName
                companyID
                }
              }
            }
          }
        }
      }
    }
    `}
      render={(data) => <Footer data={data} />}
    />
  );
}