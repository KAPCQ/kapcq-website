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
    const announcementEdges = data.announcements.edges
    const imageEdges = data.imageGallery.edges

    let latestSermonVideoId = ''
    let worshipData = {}
    let announcements = []
    let galleryImages = []

    if (sermons.length > 0) {
      latestSermonVideoId = sermons[0].node.frontmatter.link;
    }
    if (worships.length > 0) {
      worshipData = worships[0].node.frontmatter;
    }

    for (let edge of announcementEdges) {
      let notice = edge.node.frontmatter;
      let fromDate = new Date(notice.fromDate.split('T')[0]);
      let toDate = new Date(notice.toDate.split('T')[0]);
      notice.period = fromDate.getMonth() + 1 + '월 ' + fromDate.getDate() + '일';
      if (fromDate.getTime() !== toDate.getTime()) {
        notice.period += ' - ' + (toDate.getMonth() + 1) + '월 ' + toDate.getDate() + '일';
      }
      announcements.push(notice);
    }

    for (let imageEdge of imageEdges) {
      galleryImages.push(imageEdge.node.frontmatter);
    }

    console.log(galleryImages);

    return (
      <Layout>
        <LandingPageTemplate
          images={[frontmatter.image1.publicURL, frontmatter.image2.publicURL, frontmatter.image3.publicURL]}
          latestSermon={latestSermonVideoId}
          familyWorshipData = {worshipData}
          announcements = {announcements}
          galleryImages = {galleryImages}
        />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
query IndexQuery {
  markdownRemark(frontmatter: {templateKey: {eq: "landing-page"}}) {
    frontmatter {
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
  announcements:allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "notice-post"}}}) {
    edges {
      node {
        frontmatter {
          title
          fromDate
          toDate
          description
        }
      }
    }
  }
  imageGallery: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "image-gallery"}}}, limit: 3, sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        frontmatter {
          title
          image {
            publicURL
            name
          }
        }
      }
    }
  }
}
`
