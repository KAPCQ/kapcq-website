import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Video from '../components/Video'
import QuickMenu from '../components/QuickMenu'
import Announcement from '../components/Announcement'
import Section from '../components/Section'
import Event from '../components/Event'

const BackgroundVideo = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    filter: opacity(80%);
    z-index: -99;
`

const Wrapper = styled(Grid)`
    width: 100vw;
    height: 100vh;
    display: block;
    position: relative;
`

export const HomePageTemplate = ({ title }) => {

  return (
    <div>
        <BackgroundVideo autoPlay loop muted>
            <source src="/img/new_york.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </BackgroundVideo>
        <Wrapper container alignItems="center">
            <Grid item sm={1}></Grid>
            <Grid item sm={10}>
                <Typography variant="h1" style={{color: "white"}}>
                    말씀으로 자신과 세상을 <br></br> 변화시키는 <span style={{color: "#DC9D1E"}}>교회</span>
                </Typography>
                <Typography variant="h4" style={{color: "white", padding: "1rem "}}>하나님 중심, 말씀 중심, 교회 중심</Typography>
            </Grid>
            <Grid item sm={1}></Grid>
        </Wrapper>
        <Grid container justify="center" style={{paddingTop: "3rem", backgroundColor: "#EDE9DE"}}>
            <Grid item xs={12} md={6}>
                <Video src="https://www.youtube.com/embed/UEiH3ToDreU"></Video>
            </Grid>
            <Grid item xs={12} md={4}>
                <QuickMenu items={[
                    {text: '새가족안내', backgroundColor: 'rgba(243, 247, 248, 0.8)', textColor: '#3D3D3D'},
                    {text: '예배시간', backgroundColor: 'rgba(220, 157, 30, 0.4)', textColor: '#3D3D3D'},
                    {text: '금주의 주보', backgroundColor: 'rgba(208, 208, 208, 0.8)', textColor: '#3D3D3D'},
                    {text: '목양칼럼', backgroundColor: 'rgba(220, 157, 30, 0.8)', textColor: 'white'}
                    ]}></QuickMenu>
            </Grid>
            <Grid item xs={12}>
                <Announcement items={[1,2,3]}></Announcement>
            </Grid>
            <Grid container justify="center" style={{backgroundColor: "#eee"}}>
                <Grid item xs={12} style={{backgroundColor: "rgba(208, 208, 208, 0.1)"}}>
                    <Section></Section>
                </Grid>
                <Event events={[
                    {src: "/img/family-sing.png", alt: "family-sing", title: "가족찬양제"},
                    {src: "/img/publish-event.png", alt: "publish-event", title: "히즈핑거 출판감사예배"},
                    {src: "/img/christian-newspaper.png", alt: "christian-newspaper", title: "미주크리스천 신문사"}
                    ]}>
                </Event>
            </Grid>
        </Grid>
    </div>    
  )
}

HomePageTemplate.propTypes = {
  title: PropTypes.string
}

const HomePage = ({ data }) => {
    const { markdownRemark: post } = data
  
    return (
      <Layout>
        <HomePageTemplate
          title={post.frontmatter.title}
        />
      </Layout>
    )
  }
  
  HomePage.propTypes = {
    data: PropTypes.object.isRequired,
  }
  
  export default HomePage
  
  export const homePageQuery = graphql`
    query HomePage($id: String!) {
      markdownRemark(id: { eq: $id }) {
        frontmatter {
          title
        }
      }
    }
  `