import React from 'react'
import PropTypes from 'prop-types'
import { SundayPraisePostTemplate } from '../../templates/sunday-praise'

const SundayPraisePostPreview = ({ entry }) => (
  <SundayPraisePostTemplate
    title={entry.getIn(['data', 'title'])}
    videoId={entry.getIn(['data', 'link'])}
  />
)

SundayPraisePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default SundayPraisePostPreview
