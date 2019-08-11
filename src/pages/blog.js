import React from "react"
import PrimaryLayout from "../components/layouts/PrimaryLayout";
import Post from "../components/Post";
import {graphql} from 'gatsby'
import SEO from "../components/SEO";
export default ({data}) => {
   
        return (
            <PrimaryLayout>
            <SEO title="Blog" />
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