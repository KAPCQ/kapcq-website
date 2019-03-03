import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout'
import SimpleTabs from '../components/SimpleTabs';
import VideoDialog from '../components/VideoDialog';
import SimplePagination from '../components/SimplePagination';

export default class SundayPraisePage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    let itemArray = [];
    let item1Array = [];
    let item2Array = [];
    let item3Array = [];
    let item4Array = [];
    let item5Array = [];
    let item6Array = [];

    posts.forEach(({ node: post}) => {
        var item = 
            <Grid key={post.id} item xs={12} md={4}>
                <VideoDialog videoId={post.frontmatter.link}/>
                <Typography variant="subtitle1">
                    {post.frontmatter.title}
                </Typography>
                <Typography variant="subtitle2">
                    {post.frontmatter.date}
                </Typography>
            </Grid>
        itemArray.push(item);
        switch (post.frontmatter.category) {
          case 1:
            item1Array.push(item);
            break;
          case 2:
            item2Array.push(item);
            break;
          case 3:
            item3Array.push(item);
            break;
          case 4:
            item4Array.push(item);
            break;
          case 5:
            item5Array.push(item);
            break;
          case 6:
            item6Array.push(item);
            break;
          default:
            break;
        }
    });

    return (
      <Layout>
        <section className="section">
            <div className="container">
                <div className="content">
                    <Typography variant="h1" align="center">주일 찬양</Typography>
                </div>
                <SimpleTabs tabs={
                    [
                        {name: "전체", item: (<SimplePagination items={itemArray} itemsPerPage={9}></SimplePagination>)},
                        {name: "임마누엘", item: (<SimplePagination items={item1Array} itemsPerPage={9} description="임마누엘 찬양대 소개"></SimplePagination>)},
                        {name: "호산나", item: (<SimplePagination items={item2Array} itemsPerPage={9} description="호산나 찬양대 소개"></SimplePagination>)},
                        {name: "시온", item: (<SimplePagination items={item3Array} itemsPerPage={9} description="시온 찬양대 소개"></SimplePagination>)},
                        {name: "할렐루야", item: (<SimplePagination items={item4Array} itemsPerPage={9} description="할렐루야 찬양대 소개"></SimplePagination>)},
                        {name: "가브리엘", item: (<SimplePagination items={item5Array} itemsPerPage={9} description="가브리엘 경찬 소개"></SimplePagination>)},
                        {name: "마하나임", item: (<SimplePagination items={item6Array} itemsPerPage={9} description="마하나임 경찬 소개"></SimplePagination>)},
                    ]
                    }>
                </SimpleTabs>
            </div>
        </section>
      </Layout>
    )
  }
}

SundayPraisePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
query SundayPraiseQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "sunday-praise" } }}
    ) {
      edges {
        node {
          excerpt
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
            title
            date(formatString: "MMMM DD, YYYY")
            category
            link
          }
        }
      }
    }
  }
`
