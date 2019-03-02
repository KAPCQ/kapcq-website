import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import LandingPageTemplate from '../templates/LandingPageTemplate'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { frontmatter } = data.markdownRemark

    return (
      <Layout>
        <LandingPageTemplate
          image={frontmatter.image}
          title={frontmatter.title}
          video={frontmatter.video.publicURL}
          heading={frontmatter.heading}
          description={frontmatter.description}
          menuItems = {frontmatter.menuItems}
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
        image {
          childImageSharp {
            fluid(maxWidth: 526, quality: 92) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
