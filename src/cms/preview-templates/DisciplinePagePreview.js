import React from 'react'
import PropTypes from 'prop-types'
import { DisciplinePageTemplate } from '../../templates/discipline-page'

const DisciplinePagePreview = ({ entry }) => (
  <DisciplinePageTemplate
    title={entry.getIn(['data', 'title'])}
  />
)

DisciplinePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default DisciplinePagePreview
