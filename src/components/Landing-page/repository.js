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
            topRepositories(first: 2, orderBy: { field: UPDATED_AT, direction: DESC }) {
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
    <section id="projektit">
      <div>
        <h2 className="gold text-center">Vapaa-ajan projekteja:</h2>
        <p className="text-center">
          Tubetan, kirjoitan, luen ja koodaan vapaa-ajallanikin. Videoitani on katsottu yhteensä 10 tuhatta kertaa.</p>
        <p className="text-center">Tästä pääset perehtymään tuoreimpiin koodausprojekteihini, kuten esimerkiksi tämän kyseisen verkkosivun sekä vapaa-ajan vlogisivustooni.</p>
        <div className="grids col-1 sm-2 lg-2">
          {edges.map(({ node }) => (
            <div key={node.id} className="repository-card">
              <h2 className="title">{node.name}</h2>
              <p>{node.description}</p>
              <p> <Link href={node.url} className="button github repository" target="_blank"> Lähdekoodi</Link></p>
              <p className="repository-languages">
                {
                  node.languages.nodes.map(({ id, name }) => (
                    <p className="languages" key={id}>
                      {name}
                    </p>
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