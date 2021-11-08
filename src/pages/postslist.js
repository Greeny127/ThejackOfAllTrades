import * as React from "react"
import { StaticQuery } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageOverlayPost from "../components/ImageOverlayPost"

const PostListPage = () => (
  <Layout>
    <Seo title="All Posts" />
    <div className="titlePostsPageContainer container-sm">
      <h1 id="titlePostsPage">
        Directory of <span id="titleKeywordPostsPage">All Posts</span>
      </h1>
    </div>

    <StaticQuery
      query={postsQuery}
      render={data => {
        return (
          <div class="imgcardsPageContainer">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <ImageOverlayPost
                key={node.frontmatter.id}
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                body={node.excerpt}
                thumbnail={node.frontmatter.thumbnail.childImageSharp.fluid.src}
              />
            ))}
          </div>
        )
      }}
    />
  </Layout>
)

const postsQuery = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: [DESC] }) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "MMMM DD, YYYY")
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 50)
        }
      }
    }
  }
`

export default PostListPage
