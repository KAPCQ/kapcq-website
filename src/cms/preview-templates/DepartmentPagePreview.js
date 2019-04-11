import React from 'react'
import PropTypes from 'prop-types'
import { DepartmentPageTemplate } from '../../templates/department-page'

const DepartmentPagePreview = ({ entry }) => (
  <DepartmentPageTemplate
    title={entry.getIn(['data', 'title'])}
  />
)

DepartmentPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default DepartmentPagePreview
