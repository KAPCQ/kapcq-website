import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import LandingPageTemplate from './LandingPageTemplate'

const LandingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <LandingPageTemplate
        video={frontmatter.video.publicURL}
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        menuItems={frontmatter.menuItems}
      />
    </Layout>
  )
}

LandingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default LandingPage

export const landingPageQuery = graphql`
  query LandingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        video {
					publicURL
        }
        title
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
