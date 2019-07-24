import React from "react"
import Post from "../components/Post";
import {graphql} from 'gatsby'
import PrimaryLayout from "../components/layouts/PrimaryLayout";
export default ({data}) => {
    console.log(data.allMarkdownRemark)
    return (
        <PrimaryLayout>
            {data.allMarkdownRemark.edges.map(node => (
            <Post title={node.node.frontmatter.title} date={node.node.frontmatter.date} image={node.node.frontmatter.image} readmore={node.node.fields.slug} excerpt={node.node.excerpt}/> ))}
        </PrimaryLayout>
    )
}
 export const query = graphql`
 {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            tags
            image
          }
          excerpt
          html
          fields {
              slug
          }
        }
      }
    }
  }
  
 `