import React, { Component } from "react"
import { Link, StaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

class AboutMeTemplate extends Component {
  render() {
    const { data } = this.props
    const { frontmatter } = data.markdownRemark
    return (
      <section id="aboutMe">
        <div className="home-banner grids col-1 sm-2">
          <div>
            <h1 className="title">{frontmatter.title}</h1>
            <div className="tag-container">
              <p className="tagline">{frontmatter.subtitle}</p>
              <p className="tagline">{frontmatter.profession}</p>
            </div>
            <p>
              {frontmatter.salesPitch.description}
            </p>
            <Link to="#yhteydenotto" className="button tutustu"><span> {frontmatter.salesPitch.cta.CtaText}</span></Link>
          </div>
          <div>
            <StaticImage
              src="../../../static/assets/OtsoEeco.png"
              alt="Kultakämmen profiilikuva"
              className="featured-image portfolio"
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    )
  }
}

export default function AboutMe() {
  return (
    <StaticQuery
      query={graphql`
      query AboutMeQuery {
      allMarkDownRemark (
        filter: { frontmatter: { templateKey: { eq: "index-page" } } } 
      ) {
        edges {
          node {
            frontmatter {
              templateKey
              title
              subtitle
              profession
              featuredImage {
                childImageSharp {
                  gatsbyImageData(

                  )
                }
              }
              salesPitch {
                description
                cta {
                  ctaText
                  ctaLink
                }
              }
            }
          }
        }
      }
    }
    `}
      render={(data) => <AboutMeTemplate data={data} />}
    />
  );
}
