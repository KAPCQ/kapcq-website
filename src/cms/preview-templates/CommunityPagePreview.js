import React from 'react'
import PropTypes from 'prop-types'
import { CommunityPageTemplate } from '../../templates/community-page'

const CommunityPagePreview = ({ entry }) => (
  <CommunityPageTemplate
    title={entry.getIn(['data', 'title'])}
  />
)

CommunityPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default CommunityPagePreview
