import React from "react"
import Header from "../Header"
import { graphql } from "gatsby"
import SEO from "../SEO"

const BlogPostLayout = ({ data }) => {
  const post = data.markdownRemark
  return (
    <div className="container">
      <Header />
      <SEO title={post.frontmatter.title} />
      <div className="row justify-content-md-center">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}
export default BlogPostLayout

export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
