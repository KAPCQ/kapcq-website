import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import Content, { HTMLContent } from '../components/Content'
import Video from '../components/Video'

export const SundayPraisePostTemplate = ({
  helmet,
  title,
  videoId,
}) => {
  // const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <Video src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1&rel=0"}></Video>
          </div>
        </div>
      </div>
    </section>
  )
}

SundayPraisePostTemplate.propTypes = {
  helmet: PropTypes.object,
  title: PropTypes.string,
  videoId: PropTypes.string,
}

const SundayPraisePost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SundayPraisePostTemplate
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

SundayPraisePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default SundayPraisePost

export const pageQuery = graphql`
  query NSundayPraisePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
