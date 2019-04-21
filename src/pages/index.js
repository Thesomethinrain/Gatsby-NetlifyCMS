import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>
          {node.frontmatter.title}{" "}
          <span>
            — {node.frontmatter.date}
          </span>
        </h3>
        <p>{node.excerpt}</p>

      </div>
    ))}
    <Link to="/about/">A propos</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query Test {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }



  }
`
