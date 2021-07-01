import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"

const Repository = () => {
  const {
    github: {
      viewer: {
        topRepositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            topRepositories(first: 3, orderBy: { field: UPDATED_AT, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  languages(first: 3) {
                    nodes {
                      id,
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
`)
  return (
    <section id="projects">
      <div>
        <h2>Koodaus projekteja:</h2>
        <div className="grids col-1 sm-2 lg-3">
          {edges.map(({ node }) => (
            <div key={node.id} className="repository-card">
              <h2 className="title">{node.name}</h2>
              <p>{node.description}</p>
              <p> <Link href={node.url} className="button github repository" target="_blank"> GitHub URL</Link></p>
              <p className="repository-languages">
                {
                  node.languages.nodes.map(({ id, name }) => (
                    <span className="languages" key={id}>
                      {name}
                    </span>
                  ))
                }
              </p>
            </div>
          ))
          }
        </div >
      </div>
    </section>
  )
};
export default Repository