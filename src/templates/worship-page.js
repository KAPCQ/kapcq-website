import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Grid, Typography, Fab } from '@material-ui/core'
import styled from 'styled-components'
import { Title, UnderLine, Button } from '../components/style'
import Video from '../components/Video'
import DateTitle from '../components/DateTitle'
import { FaRegThumbsUp, FaShare } from 'react-icons/fa';

const Background = styled(Grid)`
  background-image: url("/img/worship-crop.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
` 

const MyFab = styled(Fab)`
  background-color: #DFAC44 !important;
  color: #FFFFFF !important;
  font-size: 1.5rem !important;
  width: 2.5rem !important;
  height: 2.5rem !important;
`

export const WorshipPageTemplate = ({ title }) => {

  return (
    <div>
        <Background container>
            <Grid item sm={1}></Grid>
            <Grid item sm={7} style={{paddingTop: "13rem"}}>
                <Typography variant="display3" style={{color: "#FFFFFF", paddingTop: "10rem"}}>{title}</Typography>
                <div style={{margin: "6rem 0 1rem 0", backgroundColor: "#DFAC44", borderRadius: "1rem", width: "3rem", height: "0.5rem"}}></div>
                <Typography variant="title" style={{color: '#FFFFFF', padding: '4rem 0 10rem 0'}}>
                    저희 교회는 1973년에 장영춘 원로목사께서 개척하여 '사도행전의 역사를 재현하는 교회'를 모토로 40년을 은혜 가운데 달려 왔습니다.
                    그 목회철학을 계승하여 2013년에 영광스런 3기사역의 항해를 시작하게 되었습니다. 
                    주님이 원하시는 바로 그 교회의 핵심은 한 영혼을 소중히 여기시는 주님의 마음을 잊지 않는 것입니다.
                    시간이 흘러도 본질을 놓치지 않는 교회, 역사가 깊어져도 본질이 변하지 않는 교회, 주님이 이 땅에 다시 오시는 날까지 주의 심장이 살아 숨시는 교회가 되길 소망합니다.
                </Typography>
            </Grid>
            <Grid item sm={4}></Grid>
        </Background>
        <Grid container style={{backgroundColor: "#EDE9DE"}}>
          <Grid item sm={1}></Grid>
          <Grid item sm={10}>
            <Title variant="h3" align="center" style={{marginTop: "3rem"}}>말씀</Title>
            <UnderLine style={{color: "#E1B355"}}>- - - -</UnderLine>
            <div style={{width: "100%", backgroundColor: "#F0D7A4", borderRadius: "0.5rem", padding: "0.5rem", marginBottom: "4rem"}}>
              <Typography variant="h4" align="center" style={{color: "#707070", fontWeight: "bold"}}>주일예배설교</Typography>
            </div>
            <Grid container>
              <Grid item md={7}>
                <Video src="https://www.youtube.com/embed/B2Gn7SICxz8"></Video>
                <Typography variant="h4" style={{color: "#707070", fontWeight: "bold", marginTop: "2rem"}}>
                  경배하러 왔노라 <br/> 경배하게 하라 [마태복음 2장 1-12절]
                </Typography>
              </Grid>
              <Grid item md={5}>
                <DateTitle
                  year="주후 2019."
                  date="04.07"
                  title="여리고를 무너뜨리라"
                  word="[히브리서 11장30-31절] / 김성국 목사"
                />
                <DateTitle
                  year="주후 2019."
                  date="02.24"
                  title={<span>경배하러 왔노라 <br/> 경배하게 하라</span>}
                  word="[마태복음 2장1-12절] / 김성국 목사"
                />
                <DateTitle
                  year="주후 2019."
                  date="02.24"
                  title={<span>경배하러 왔노라 <br/> 경배하게 하라</span>}
                  word="[마태복음 2장1-12절] / 김성국 목사"
                />
                <DateTitle
                  year="주후 2019."
                  date="02.24"
                  title={<span>경배하러 왔노라 <br/> 경배하게 하라</span>}
                  word="[마태복음 2장1-12절] / 김성국 목사"
                />
                <DateTitle
                  year="주후 2019."
                  date="02.24"
                  title={<span>경배하러 왔노라 <br/> 경배하게 하라</span>}
                  word="[마태복음 2장1-12절] / 김성국 목사"
                />
              </Grid>
            </Grid>
            <Grid container style={{marginTop: "2rem"}}>
              <Grid item md={7} style={{paddingTop: "2rem"}}>
                <MyFab><FaRegThumbsUp></FaRegThumbsUp></MyFab>
                <MyFab style={{margin: "0 0.5rem"}}><FaShare></FaShare></MyFab>
                <Typography style={{color: "#707070", marginTop: "1.5rem"}}>2019.02.24</Typography>
              </Grid>
              <Grid item md={5} style={{borderTop: "1px solid #DFAC44", paddingTop: "2rem"}}>
                <Grid container justify="space-around">
                  <Grid item sm={3} style={{backgroundColor: "#DFAC44", textAlign: "center"}}>
                    <Button>이전</Button>
                  </Grid>
                  <Grid item sm={3} style={{backgroundColor: "#D5D4D2", textAlign: "center"}}>
                    <Button>다음</Button>
                  </Grid>
                  <Grid item sm={3} style={{backgroundColor: "#EFDCB5", textAlign: "center"}}>
                    <Button>전체보기</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={1}></Grid>
        </Grid>
    </div>    
  )
}

WorshipPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
}

const WorshipPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WorshipPageTemplate
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

WorshipPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WorshipPage

export const worshipPageQuery = graphql`
  query WorshipPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
