import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Grid, Typography } from '@material-ui/core'

export const DisciplinePageTemplate = ({ title }) => {

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

DisciplinePageTemplate.propTypes = {
  title: PropTypes.string.isRequired
}

const DisciplinePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <DisciplinePageTemplate
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

DisciplinePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default DisciplinePage

export const disciplinePageQuery = graphql`
  query DisciplinePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
