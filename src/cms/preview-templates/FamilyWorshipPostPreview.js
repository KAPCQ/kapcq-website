import React from 'react'
import PropTypes from 'prop-types'
import { FamilyWorshipPostTemplate } from '../../templates/family-worship'

const FamilyWorshipPostPreview = ({ entry }) => (
  <FamilyWorshipPostTemplate
    title={entry.getIn(['data', 'title'])}
    reference={entry.getIn(['data', 'reference'])}
    content={entry.getIn(['data', 'content'])}
  />
)

FamilyWorshipPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default FamilyWorshipPostPreview
