import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Grid, Typography } from '@material-ui/core'
import { Header, SubHeader, Title, UnderLine } from '../components/style'
import styled from 'styled-components'
import { FaCalendarAlt, FaUsers } from 'react-icons/fa';
import Table from '../components/Table';

const LargeButton = styled.div`
    padding: 2rem 1rem;
    margin: 0.5rem;
    border-radius: 1rem;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`

export const InformationPageTemplate = ({ title }) => {

  return (
    <div>
        <Grid container style={{backgroundColor: "rgba(230, 202, 144, 0.5)"}}>
            <Grid item sm={1}></Grid>
            <Grid item sm={5} style={{paddingTop: "13rem"}}>
                <Typography variant="display2" style={{color: "#DFAC44"}}>{title}</Typography>
                <div style={{margin: "6rem 0 1rem 0", backgroundColor: "#ABC8BE", borderRadius: "1rem", width: "3rem", height: "0.5rem"}}></div>
                <Typography variant="title" style={{color: '#707070', paddingTop: '1rem'}}>
                    저희 교회는 1973년에 장영춘 원로목사께서 개척하여 '사도행전의 역사를 재현하는 교회'를 모토로 40년을 은혜 가운데 달려 왔습니다.
                    그 목회철학을 계승하여 2013년에 영광스런 3기사역의 항해를 시작하게 되었습니다. 
                    주님이 원하시는 바로 그 교회의 핵심은 한 영혼을 소중히 여기시는 주님의 마음을 잊지 않는 것입니다.
                    시간이 흘러도 본질을 놓치지 않는 교회, 역사가 깊어져도 본질이 변하지 않는 교회, 주님이 이 땅에 다시 오시는 날까지 주의 심장이 살아 숨시는 교회가 되길 소망합니다.
                </Typography>
            </Grid>
            <Grid item sm={1}></Grid>
            <Grid item sm={4} style={{padding: "10rem 0 4rem 0"}}>
                <Grid container justify="center">
                    <Grid item md={8}>
                        <div>
                            <img src="/img/pastor-profile.png" alt="pastor profile"></img>
                        </div>
                        <SubHeader align="center" style={{margin: "2rem 0rem 0.5rem 0rem"}}>퀸즈장로교회 담임 목사
                            <span style={{marginLeft: "1rem", fontWeight: "bold", fontSize: "1.5rem"}}>김성국 목사</span>
                        </SubHeader>
                        <div style={{backgroundColor: "#ABC8BE", borderRadius: "0.75rem", padding: "0.2rem 0", marginBottom: "2rem"}}>
                            <Header variant="h6" align="center">예배와 훈련으로 부흥을 꿈꾸는 목회</Header>
                        </div>
                        <SubHeader align="center">하나님을 찬미하며 또 온 백성에게 칭송을 받으니 주께서 구원하는 사람을 날마다 더하게 하시니라 (행 2:47)</SubHeader>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={1}></Grid>
        </Grid>
        <Grid container justify="center" alignItems="center" style={{padding: "6rem 0"}}>
            <Grid item sm={6}>
                <Grid container justify="center" alignItems="center">
                    <Grid item md={8}>
                        <LargeButton style={{backgroundColor: "#D5D4D2", color: "#3D3D3D"}}>퀸장 발자취</LargeButton>
                        <LargeButton style={{backgroundColor: "#F0D7A4", color: "#3D3D3D"}}>퀸장 연혁</LargeButton>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={6}>
                <div style={{backgroundColor: "#EDE9DE", padding: "5rem"}}>
                    <Typography variant="display3" style={{color: "#DFAC44", paddingBottom: "2rem"}}>퀸장비젼</Typography>
                    <SubHeader>
                        저희 교회는 1973년에 장영춘 원로목사께서 개척하여 '사도행전의 역사를 재현하는 교회'를 모토로 40년을 은혜 가운데 달려 왔습니다.
                        그 목회철학을 계승하여 2013년에 영광스런 3기사역의 항해를 시작하게 되었습니다. 
                        주님이 원하시는 바로 그 교회의 핵심은 한 영혼을 소중히 여기시는 주님의 마음을 잊지 않는 것입니다.
                        시간이 흘러도 본질을 놓치지 않는 교회, 역사가 깊어져도 본질이 변하지 않는 교회, 주님이 이 땅에 다시 오시는 날까지 주의 심장이 살아 숨시는 교회가 되길 소망합니다.
                    </SubHeader>
                </div>
            </Grid>
        </Grid>
        <Grid container style={{backgroundColor: "rgba(208, 208, 208, 0.2)"}}>
            <Grid item sm={1}></Grid>
            <Grid item sm={10}>
                <Title variant="h3" align="center" style={{marginTop: "3rem"}}>
                    예배안내 <FaCalendarAlt style={{color: "#E1B355"}}></FaCalendarAlt>
                </Title>
                <UnderLine style={{color: "#E1B355"}}>- - - -</UnderLine>
                <Table
                    name="정기예배"
                    header1="시간"
                    header2="주일 예배"
                    rows={[
                        {
                            fontSize: "1.75rem",
                            data: ["주일 예배",
                            <span>1부<br/>
                            2부<br/>
                            3부<br/>
                            4부<br/>
                            QBC<span style={{fontSize: "0.7rem"}}>(퀸장바이블칼리지)</span><br/>
                            영어예배(QPEM)<br/>
                            중국어예배<br/>
                            <br/>
                            러시아어예배</span>,
                            <span>오전 8:30<br/>
                            오전 10:30<br/>
                            정오 12:15<br/>
                            오후 2:00<br/>
                            오후 2:15<br/>
                            정오 12:00<br/>
                            오전 9:30<br/>
                            오후 2:30<br/>
                            오전 8:30<br/></span>,
                            <span>본당<br/>
                            본당<br/>
                            본당<br/>
                            본당<br/>
                            선교회별<br/>
                            양순관<br/>
                            양순관<br/>
                            <br/>
                            고등부실<br/></span>]
                        },
                        {
                            fontSize: "1.75rem",
                            data: ["수요예배",
                            <span>수요일</span>,
                            <span>오후 8:00</span>,
                            <span>본당</span>]
                        },
                        {
                            fontSize: "1.75rem",
                            data: ["새벽기도회",
                            <span>매일</span>,
                            <span>오전 6:00</span>,
                            <span>본당</span>]
                        }
                    ]}
                ></Table>
                <div style={{marginTop: "3rem"}}></div>
                <Table
                    name="교회학교"
                    header1="시간"
                    header2="주일 예배"
                    rows={[
                        {
                            fonstSize: "1rem",
                            data:[<span style={{fontWeight: "bold"}}>
                            영아부<br/>
                            유아부<br/>
                            유치부<br/>
                            유년부<br/>
                            초등부<br/>
                            중등부<br/>
                            <br/>
                            고등부<br/>
                            <br/>
                            청년대학부/청년선교부<br/>
                            청년대학부/청년선교부
                            </span>,
                            <span>
                                1부<br/>
                                1부<br/>
                                2부<br/>
                                2부<br/>
                                2부<br/>
                                주일<br/>
                                토요모임<br/>
                                주일<br/>
                                금요모임<br/>
                                주일<br/>
                                금요모임
                            </span>,
                            <span>
                                오전 10:30<br/>
                                오전 10:30<br/>
                                정오 12:15<br/>
                                <br/>
                                <br/>
                                오전 10:30<br/>
                                오전 9:00<br/>
                                오전 10:30<br/>
                                오후 8:30<br/>
                                오후 2:00<br/>
                                오후 8:00
                            </span>,
                            <span>
                                영아부실(지하)<br/>
                                유아부실(2층)<br/>
                                유치부실(2층)<br/>
                                유년부실(4층)<br/>
                                초등부실(4층)<br/>
                                중등부실(4층)<br/>
                                <br/>
                                고등부실(3층)<br/>
                                <br/>
                                본당
                                <br/>
                                <pre></pre>
                            </span>]
                        }
                    ]}
                />
                <div style={{marginTop: "3rem"}}></div>
                <Table
                    name="각 부서 모임"
                    header1="시간"
                    header2="주일 예배"
                    rows={[
                        {
                            fontSize: "1rem",
                            data: [
                                <span style={{fontWeight: "bold"}}>
                                    새가족학교<br/>
                                    전도폭발 훈련<br/>
                                    제자/영성 훈련<br/>
                                </span>,
                                <span>
                                    화요일<br/>
                                    화요일<br/>
                                    목요일<br/>
                                </span>,
                                <span>
                                    오후 7:30<br/>
                                    오후 7:30<br/>
                                    오후 8:00<br/>
                                </span>,
                                <span>
                                    친교실(지하)<br/>
                                    고등부실(3층)<br/>
                                    고등부실(3층)<br/>
                                </span>
                            ]
                        }
                    ]}
                />
                <div style={{marginTop: "2rem"}}></div>
            </Grid>
            <Grid item sm={1}></Grid>
        </Grid>
        <Grid container>
            <Grid item sm={1}></Grid>
            <Grid item sm={10}>
                <Title variant="h3" align="center" style={{marginTop: "3rem"}}>
                    섬기는 이들 <FaUsers style={{color: "#E1B355"}}></FaUsers>
                </Title>
                <UnderLine style={{color: "#E1B355"}}>- - - -</UnderLine>
            </Grid>
            <Grid item sm={1}></Grid>
        </Grid>
    </div>    
  )
}

InformationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
}

const InformationPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <InformationPageTemplate
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

InformationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default InformationPage

export const informationPageQuery = graphql`
  query InformationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
