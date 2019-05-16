import React from 'react'
import PropTypes from 'prop-types'
import { SundaySermonPostTemplate } from '../../templates/sunday-sermon'

const SundaySermonPostPreview = ({ entry }) => (
  <SundaySermonPostTemplate
    title={entry.getIn(['data', 'title'])}
    videoId={entry.getIn(['data', 'link'])}
  />
)

SundaySermonPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default SundaySermonPostPreview
