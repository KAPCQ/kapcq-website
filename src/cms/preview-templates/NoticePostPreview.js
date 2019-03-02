import React from 'react'
import PropTypes from 'prop-types'
import { NoticePostTemplate } from '../../templates/notice-post'

const NoticePostPreview = ({ entry, widgetFor }) => (
  <NoticePostTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
  />
)

NoticePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default NoticePostPreview
