import React from 'react'
import PropTypes from 'prop-types'
import { MissionPageTemplate } from '../../templates/mission-page'

const MissionPagePreview = ({ entry }) => (
  <MissionPageTemplate
    title={entry.getIn(['data', 'title'])}
  />
)

MissionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default MissionPagePreview
