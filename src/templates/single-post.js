import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import { Card, CardBody, CardSubtitle } from "reactstrap"
import Img from "gatsby-image"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Seo title={post.title} />
      <h1 id="single-post-title">{post.title}</h1>

      <Card color="dark" inverse>
        <Img
          className="card-image-top"
          fluid={post.thumbnail.childImageSharp.fluid}
        />

        <CardBody>
          <CardSubtitle className="text-muted" tag="h5">
            <span>
              By {post.author} at {post.date}
            </span>
          </CardSubtitle>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </CardBody>
      </Card>
    </Layout>
  )
}

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        thumbnail {
          childImageSharp {
            fluid(maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default SinglePost
