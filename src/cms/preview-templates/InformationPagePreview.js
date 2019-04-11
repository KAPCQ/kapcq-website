import React from 'react'
import PropTypes from 'prop-types'
import { InformationPageTemplate } from '../../templates/information-page'

const InformationPagePreview = ({ entry }) => (
  <InformationPageTemplate
    title={entry.getIn(['data', 'title'])}
  />
)

InformationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default InformationPagePreview
