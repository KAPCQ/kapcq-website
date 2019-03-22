import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default class TeamPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { frontmatter } = data.markdownRemark

    return (
      <Layout>
        <section className="section">
            <div className="container">
                <div className="content">
                    <Typography variant="h1" align="center">섬기는 이들</Typography>
                    <Grid container spacing={24} justify="center">
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardContent>목사님 1</CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardContent>목사님 2</CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardContent>목사님 3</CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardContent>목사님 4</CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
query TeamQuery {
  markdownRemark(frontmatter: { templateKey: { eq: "landing-page" } }) {
    frontmatter {
      title
      video {
        publicURL
      }
      heading
      description
      menuItems
      image1 {
        publicURL
      }
      image2 {
        publicURL
			}
      image3 {
        publicURL
      }
    }
  }
}
`
