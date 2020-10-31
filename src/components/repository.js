import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from "gatsby"

const Repository = () => {
  const data = useStaticQuery(graphql`
   query MyQuery {
      githubViewer {
    pinnedItems {
    nodes {
      description
      name
      url
      homepageUrl
    }
      }
    }
  }
`)
  return (
    <div>
      <div className="grids col-1 sm-2 lg-3">
        {data.githubViewer.pinnedItems.nodes.map((repository, i) => (
          <div className="repository-card">
            <h2 className="title">{repository.name}</h2>
            <p>{repository.description}</p>
            <p> <Link href={repository.homepageUrl} className="button" target="_blank"> Appin URL</Link></p>
            <p> <Link href={repository.url} className="button repository" target="_blank"> GitHub URL</Link></p>
          </div>
        ))
        }
      </div >
    </div>
  )
};
export default Repository