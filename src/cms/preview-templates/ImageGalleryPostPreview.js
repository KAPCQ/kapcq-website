import React from 'react'
import PropTypes from 'prop-types'
import { ImageGalleryPostTemplate } from '../../templates/image-gallery'

const ImageGalleryPostPreview = ({ entry }) => (
  <ImageGalleryPostTemplate
    title={entry.getIn(['data', 'title'])}
  />
)

ImageGalleryPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default ImageGalleryPostPreview
