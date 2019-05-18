import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import LandingPageTemplate from '../templates/LandingPageTemplate'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { frontmatter } = data.markdownRemark
    const sermons = data.sundaySermon.edges
    const worships = data.familyWorship.edges
    let latestSermonVideoId = ''
    let worshipData = {}
    if (sermons.length > 0) {
      latestSermonVideoId = sermons[0].node.frontmatter.link;
    }
    if (worships.length > 0) {
      worshipData = worships[0].node.frontmatter;
    }
    return (
      <Layout>
        <LandingPageTemplate
          images={[frontmatter.image1.publicURL, frontmatter.image2.publicURL, frontmatter.image3.publicURL]}
          latestSermon={latestSermonVideoId}
          familyWorshipData = {worshipData}
        />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
query IndexQuery {
  markdownRemark(frontmatter: {templateKey: {eq: "landing-page"}}) {
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
  sundaySermon: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "sunday-sermon"}}}, limit: 1, sort: {fields: [frontmatter___date], order: DESC}) {
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
  familyWorship: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "family-worship"}}}, limit: 1, sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        frontmatter {
          title
          reference
          content
        }
      }
    }
  }
}
`
