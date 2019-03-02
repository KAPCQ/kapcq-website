import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default class NoticePage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
            <div className="container">
                <div className="content">
                  <Typography variant="h1" align="center">공지사항</Typography>
                </div>
                <div id="accordion">
                {posts.map(({ node: post }) => (
                  <ExpansionPanel key={post.id}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <List style={{padding: 0}}>
                        <ListItem style={{padding: 2}}>
                          <Typography variant="title">
                            {post.frontmatter.title}
                          </Typography>
                        </ListItem>
                        <ListItem style={{padding: 2}}>
                          <Typography variant="subheading">
                            {post.frontmatter.date}
                          </Typography>
                        </ListItem>
                      </List>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        {post.excerpt}
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                ))}
                </div>
            </div>
        </section>
      </Layout>
    )
  }
}

NoticePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query NoticeQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "notice-post" } }}
    ) {
      edges {
        node {
          excerpt
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
