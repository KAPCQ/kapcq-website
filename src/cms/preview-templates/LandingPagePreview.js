import React from 'react'
import PropTypes from 'prop-types'
// import { LandingPageTemplate } from '../../templates/LandingPageTemplate'

const LandingPagePreview = ({ entry, getAsset }) => {
  return (
    <div></div>
    // <LandingPageTemplate
    //     image={{
    //       image: getAsset(entry.getIn(['data', 'image']))
    //     }}
    //     video={entry.getIn(['data', 'video'])}
    //     title={entry.getIn(['data', 'title'])}
    //     heading={entry.getIn(['data', 'heading'])}
    //     description={entry.getIn(['data', 'description'])}
    //     menuItems={entry.getIn(['data', 'menuItems'])}
    // />
  )
}

LandingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default LandingPagePreview
