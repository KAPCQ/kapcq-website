import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const FamilyWorshipPostTemplate = ({
  helmet,
  title,
  reference,
  content
}) => {

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
            </h1>
            <h2>
                {reference}
            </h2>
            <p>
                {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

FamilyWorshipPostTemplate.propTypes = {
  helmet: PropTypes.object,
  title: PropTypes.string,
  reference: PropTypes.string,
  content: PropTypes.string
}

const FamilyWorshipPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <FamilyWorshipPostTemplate
        helmet={
          <Helmet
            titleTemplate="%s | Notice"
          >
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

FamilyWorshipPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default FamilyWorshipPost

export const pageQuery = graphql`
  query FamilyWorshipPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
