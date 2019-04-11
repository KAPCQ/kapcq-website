import React from 'react'
import PropTypes from 'prop-types'
import { WorshipPageTemplate } from '../../templates/worship-page'

const WorshipPagePreview = ({ entry }) => (
  <WorshipPageTemplate
    title={entry.getIn(['data', 'title'])}
  />
)

WorshipPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default WorshipPagePreview
