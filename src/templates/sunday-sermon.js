import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import Video from '../components/Video'

export const SundaySermonPostTemplate = ({
  helmet,
  title,
  videoId,
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
            <iframe style={{width: "560px", height: "315px"}} title="mainVideo" src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1&rel=0"} allow='autoplay' frameBorder="0" allowFullScreen></iframe>
            {/* <Video src={}></Video> */}
          </div>
        </div>
      </div>
    </section>
  )
}

SundaySermonPostTemplate.propTypes = {
  helmet: PropTypes.object,
  title: PropTypes.string,
  videoId: PropTypes.string,
}

const SundaySermonPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SundaySermonPostTemplate
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

SundaySermonPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default SundaySermonPost

export const pageQuery = graphql`
  query SundaySermonPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
