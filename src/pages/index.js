import * as React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/Post"
import MainPost from "../components/MainPost"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className="titleHomePageContainer container-sm">
      <h1 id="titleHomePage">
        Welcome To The <span id="titleKeywordHomePage">Jack Of All Trades</span>
      </h1>
    </div>

    <h2 id="recentHomePage">Most Recent Post</h2>

    <StaticQuery
      query={postsQuery}
      render={data => {
        return (
          <div>
            <MainPost
              key={data.allMarkdownRemark.edges[0].node.frontmatter.id}
              title={data.allMarkdownRemark.edges[0].node.frontmatter.title}
              author={data.allMarkdownRemark.edges[0].node.frontmatter.author}
              slug={data.allMarkdownRemark.edges[0].node.fields.slug}
              date={data.allMarkdownRemark.edges[0].node.frontmatter.date}
              body={data.allMarkdownRemark.edges[0].node.excerpt}
              thumbnail={
                data.allMarkdownRemark.edges[0].node.frontmatter.thumbnail
                  .childImageSharp.fluid.src
              }
            />

            <h2 id="otherHomePage">Check Out Other Posts</h2>

            <div className="cardsHomePageContainer">
              {data.allMarkdownRemark.edges.slice(1, 5).map(({ node }) => (
                <Post
                  key={node.frontmatter.id}
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  slug={node.fields.slug}
                  date={node.frontmatter.date}
                  body={node.excerpt}
                  thumbnail={
                    node.frontmatter.thumbnail.childImageSharp.fluid.src
                  }
                />
              ))}
            </div>
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
          excerpt(pruneLength: 250)
        }
      }
    }
  }
`

export default IndexPage
