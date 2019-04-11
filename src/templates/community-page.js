import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Grid, Typography } from '@material-ui/core'

export const CommunityPageTemplate = ({ title }) => {

  return (
    <div>
        <Grid container style={{backgroundColor: "rgba(230, 202, 144, 0.5)"}}>
            <Grid item sm={1}></Grid>
            <Grid item sm={10}>
                <Typography variant="display3" style={{color: "#DFAC44", paddingTop: "10rem"}}>{title}</Typography>
            </Grid>
            <Grid item sm={1}></Grid>
        </Grid>
    </div>    
  )
}

CommunityPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
}

const CommunityPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CommunityPageTemplate
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

CommunityPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CommunityPage

export const communityPageQuery = graphql`
  query CommunityPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
