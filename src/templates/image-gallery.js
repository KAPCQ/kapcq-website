import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ImageGalleryPostTemplate = ({
  helmet,
  title,
  image
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
            <div className="content">
                <div
                    className="full-width-image-container margin-top-0"
                    style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "center"
                    }}
                ></div>
            </div>
            {image !== undefined &&
              <img src={image.publicURL} alt={image.name}></img>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

ImageGalleryPostTemplate.propTypes = {
  helmet: PropTypes.object,
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const ImageGalleryPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ImageGalleryPostTemplate
        helmet={
          <Helmet
            titleTemplate="%s | ImageGallery"
          >
            <title>{`${post.frontmatter.title}`}</title>
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

ImageGalleryPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ImageGalleryPost

export const pageQuery = graphql`
  query ImageGalleryPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        image {
            publicURL
            name
        }
      }
    }
  }
`
