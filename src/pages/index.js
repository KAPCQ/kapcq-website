import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import LandingPageTemplate from '../templates/LandingPageTemplate'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { frontmatter } = data.markdownRemark
    const { edges } = data.allMarkdownRemark
    let latestSermonVideoId = ''
    if (edges.length > 0) {
      latestSermonVideoId = edges[0].node.frontmatter.link;
    }
    return (
      <Layout>
        <LandingPageTemplate
          images={[frontmatter.image1.publicURL, frontmatter.image2.publicURL, frontmatter.image3.publicURL]}
          latestSermon={latestSermonVideoId}
        />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
query IndexQuery {
  markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }) {
    frontmatter {
      title
      video {
        publicURL
      }
      heading
      description
      menuItems
      image1 {
        publicURL
      }
      image2 {
        publicURL
			}
      image3 {
        publicURL
      }
    }
  }
  allMarkdownRemark(
    filter: { frontmatter: { templateKey: { eq: "sunday-sermon" }}}
    limit: 1
    sort: {
      fields: [frontmatter___date]
      order: DESC
  }) 
  {
    edges {
      node {
        frontmatter {
          title
          date
          link
        }
      }
    }
  }
}
`
