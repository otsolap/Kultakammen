import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Card } from 'react-bootstrap/';

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
      {data.githubViewer.pinnedItems.nodes.map((repository, i) => (
        <Card
          Style={{ width: '10rem' }}
          className="bg-dark text-white"
          border="warning"
          key={i} >
          <Card.Body>
            <Card.Title>{repository.name}</Card.Title>
            <Card.Link href={repository.url} target="_blank"> GitHub URL</Card.Link>
            <Card.Link href={repository.homepageUrl} target="_blank"> Page URL</Card.Link>
            <Card.Text>{repository.description}</Card.Text>
          </Card.Body>
        </Card>
      ))
      }
    </div >
  )
};
export default Repository