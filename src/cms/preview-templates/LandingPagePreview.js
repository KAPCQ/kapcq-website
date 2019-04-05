import React from 'react'
import PropTypes from 'prop-types'

const LandingPagePreview = ({ entry, getAsset }) => {

  return (
    <div>
      <h1>1st Image</h1>
      <img className="preview-image" src={entry.getIn(['data', 'image1'])} alt="image1"></img>
      <h1>2nd Image</h1>
      <img className="preview-image" src={entry.getIn(['data', 'image2'])} alt="image2"></img>
      <h1>3rd Image</h1>
      <img className="preview-image" src={entry.getIn(['data', 'image3'])} alt="image3"></img>
    </div>
  )
}

LandingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default LandingPagePreview
