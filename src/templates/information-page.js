import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Hidden from '@material-ui/core/Hidden'
import { Header, SubHeader, Title, UnderLine, Button } from '../components/style'
import styled from 'styled-components'
import { FaCalendarAlt, FaUsers } from 'react-icons/fa';
import Table from '../components/Table';

const TitleHeader = styled.h1`
    color: #DFAC44;
    font-size: ${props => props.mobile ? '1.3rem' : '2.5rem'};
    text-align: left;
`

const Message = styled.p`
    color: #707070;
    padding-top: 1rem;
    font-size: ${props => props.mobile ? '1rem' : '1.25rem'};
`

const LargeButton = styled.div`
    padding: 2rem 1rem;
    margin: 0.5rem;
    border-radius: 1rem;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`

const SmallButton = styled.div`
    font-weight: bold;
    text-align: center;
    border-radius: 1rem;
    font-size: 1rem;
    padding: 0.5rem;
`

const Divider = styled.div`
    background-color: #ABC8BE;
    border-radius: 1rem;
    width: 3rem;
    height: 0.5rem;
`

export const InformationPageTemplate = ({ title }) => {

  return (
    <div>
        <Hidden smDown>
        <Grid fluid style={{backgroundColor: "rgba(230, 202, 144, 0.5)"}}>
            <Row>
                <Col sm={1}></Col>
                <Col sm={5} style={{paddingTop: "13rem"}}>
                    <TitleHeader>{title}</TitleHeader>
                    <Divider style={{margin: "6rem 0 1rem 0"}}/>
                    <Message>
                        저희 교회는 1973년에 장영춘 원로목사께서 개척하여 '사도행전의 역사를 재현하는 교회'를 모토로 40년을 은혜 가운데 달려 왔습니다.
                        그 목회철학을 계승하여 2013년에 영광스런 3기사역의 항해를 시작하게 되었습니다. 
                        주님이 원하시는 바로 그 교회의 핵심은 한 영혼을 소중히 여기시는 주님의 마음을 잊지 않는 것입니다.
                        시간이 흘러도 본질을 놓치지 않는 교회, 역사가 깊어져도 본질이 변하지 않는 교회, 주님이 이 땅에 다시 오시는 날까지 주의 심장이 살아 숨시는 교회가 되길 소망합니다.
                    </Message>
                </Col>
                <Col sm={1}></Col>
                <Col sm={4} style={{padding: "10rem 0 4rem 0"}}>
                    <Grid fluid>
                        <Row center="xs">
                            <Col md={8}>
                                <div>
                                    <img src="/img/pastor-profile.png" alt="pastor profile"></img>
                                </div>
                                <SubHeader align="center" style={{margin: "2rem 0rem 0.5rem 0rem"}}>퀸즈장로교회 담임 목사
                                    <span style={{marginLeft: "1rem", fontWeight: "bold", fontSize: "1.5rem"}}>김성국 목사</span>
                                </SubHeader>
                                <div style={{backgroundColor: "#ABC8BE", borderRadius: "0.75rem", padding: "0.2rem 0", marginBottom: "2rem"}}>
                                    <Header>예배와 훈련으로 부흥을 꿈꾸는 목회</Header>
                                </div>
                                <SubHeader align="center">하나님을 찬미하며 또 온 백성에게 칭송을 받으니 주께서 구원하는 사람을 날마다 더하게 하시니라 (행 2:47)</SubHeader>
                            </Col>
                        </Row>
                    </Grid>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Grid>
        </Hidden>
        <Hidden mdUp>
        <Grid fluid style={{paddingTop: "5rem", paddingRight: "0"}}>
            <TitleHeader mobile style={{paddingRight: "16px"}}>{title}</TitleHeader>
            <Row bottom="xs" style={{paddingTop: "3rem"}}>
                <Col xs={6}>
                <img src="/img/pastor-profile.png" alt="pastor profile"></img>
                </Col>
                <Col xs={6}>
                <div style={{backgroundColor: "#ABC8BE", borderRadius: "0.75rem 0 0 0.75rem", padding: "0.5rem 2rem 0.5rem 1rem"}}>
                    <Header center style={{fontSize: "1.1rem"}}>예배와 훈련으로 부흥을 꿈꾸는 목회자</Header>
                </div>
                </Col>
            </Row>
            <Row center="xs" style={{padding: "0.5rem 1.5rem 0.5rem 0.5rem"}}>
                <SubHeader align="center">퀸즈장로교회 담임 목사
                    <span style={{marginLeft: "1rem", fontWeight: "bold", fontSize: "1.5rem"}}>김성국 목사</span>
                </SubHeader>
                <SubHeader align="center">하나님을 찬미하며 또 온 백성에게 칭송을 받으니 주께서 구원하는 사람을 날마다 더하게 하시니라 (행 2:47)</SubHeader>
                <Divider style={{marginTop: "2rem"}}/>
            </Row>
        </Grid>
        <Grid fluid style={{backgroundColor: "rgba(230, 202, 144, 0.5)"}}>
            <Row center="xs">
                <Col>
                    <Message mobile style={{lineHeight: "1.7rem", padding: "1rem", textAlign: "center"}}>
                    저희 교회는 1973년에 장영춘 원로목사께서 개척하여 '사도행전의 역사를 재현하는 교회'를 모토로 40년을 은혜 가운데 달려 왔습니다. <br/>
                    그 목회철학을 계승하여 2013년에 영광스런 3기사역의 항해를 시작하게 되었습니다. <br/>
                    주님이 원하시는 바로 그 교회의 핵심은 한 영혼을 소중히 여기시는 주님의 마음을 잊지 않는 것입니다. <br/>
                    시간이 흘러도 본질을 놓치지 않는 교회, 역사가 깊어져도 본질이 변하지 않는 교회, 주님이 이 땅에 다시 오시는 날까지 주의 심장이 살아 숨시는 교회가 되길 소망합니다.
                    </Message>
                </Col>
                <Col style={{padding: "1rem"}}>
                    <Button mobile style={{backgroundColor: "#F0D7A4", color: "#606060"}}>칼럼바로가기</Button>
                </Col>
            </Row>
        </Grid>
        </Hidden>
        <Hidden smDown>
            <Grid fluid style={{padding: "6rem 0"}}>
                <Row center="xs">
                    <Col sm={6}>
                        <Grid fluid>
                            <Row center="xs">
                                <Col md={8}>
                                    <LargeButton style={{backgroundColor: "#D5D4D2", color: "#3D3D3D"}}>퀸장 발자취</LargeButton>
                                    <LargeButton style={{backgroundColor: "#F0D7A4", color: "#3D3D3D"}}>퀸장 연혁</LargeButton>
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                    <Col sm={6}>
                        <div style={{backgroundColor: "#EDE9DE", padding: "5rem"}}>
                            <TitleHeader>퀸장비젼</TitleHeader>
                            <SubHeader>
                                저희 교회는 1973년에 장영춘 원로목사께서 개척하여 '사도행전의 역사를 재현하는 교회'를 모토로 40년을 은혜 가운데 달려 왔습니다.
                                그 목회철학을 계승하여 2013년에 영광스런 3기사역의 항해를 시작하게 되었습니다. 
                                주님이 원하시는 바로 그 교회의 핵심은 한 영혼을 소중히 여기시는 주님의 마음을 잊지 않는 것입니다.
                                시간이 흘러도 본질을 놓치지 않는 교회, 역사가 깊어져도 본질이 변하지 않는 교회, 주님이 이 땅에 다시 오시는 날까지 주의 심장이 살아 숨시는 교회가 되길 소망합니다.
                            </SubHeader>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </Hidden>
        <Hidden mdUp>
            <Grid fluid style={{padding: 0}}>
                <Row center="xs" style={{padding: "2rem 0 1rem 0"}}>
                    <Col>
                        <TitleHeader mobile>퀸장비젼</TitleHeader>
                    </Col>
                </Row>
                <Row style={{backgroundColor: "#EDE9DE", padding: "2rem 0"}} center="xs" between="xs">
                    <Col xs={12} style={{paddingBottom: "1rem"}}>
                        <Message mobile style={{lineHeight: "1.7rem", padding: "1rem"}}>
                        저희 교회는 1973년에 장영춘 원로목사께서 개척하여 '사도행전의 역사를 재현하는 교회'를 모토로 40년을 은혜 가운데 달려 왔습니다.
                        그 목회철학을 계승하여 2013년에 영광스런 3기사역의 항해를 시작하게 되었습니다.
                        주님이 원하시는 바로 그 교회의 핵심은 한 영혼을 소중히 여기시는 주님의 마음을 잊지 않는 것입니다.
                        시간이 흘러도 본질을 놓치지 않는 교회, 역사가 깊어져도 본질이 변하지 않는 교회, 주님이 이 땅에 다시 오시는 날까지 주의 심장이 살아 숨시는 교회가 되길 소망합니다.
                        </Message>
                    </Col>
                    <Col xs={6}>
                    <SmallButton style={{backgroundColor: "#D5D4D2", color: "#3D3D3D"}}>퀸장 발자취</SmallButton>
                    </Col>
                    <Col xs={6}>
                    <SmallButton style={{backgroundColor: "#F0D7A4", color: "#3D3D3D"}}>퀸장연혁</SmallButton>
                    </Col>
                </Row>
            </Grid>
        </Hidden>
        <Grid fluid style={{backgroundColor: "rgba(208, 208, 208, 0.2)"}}>
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <Hidden smDown>
                        <Title style={{marginTop: "3rem"}}>
                            예배안내 <FaCalendarAlt style={{color: "#E1B355"}}></FaCalendarAlt>
                        </Title>
                    </Hidden>
                    <Hidden mdUp>
                        <Title mobile style={{marginTop: "3rem"}}>
                            예배안내 <FaCalendarAlt style={{color: "#E1B355", paddingTop: "0.3rem"}}></FaCalendarAlt>
                        </Title>
                    </Hidden>
                    <UnderLine style={{color: "#E1B355"}}>- - - -</UnderLine>
                    <Table
                        name="정기예배"
                        header1="시간"
                        header2="장소"
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
                        header2="장소"
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
                        header2="장소"
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
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Grid>
        <Grid fluid>
            <Row center="xs">
                <Col sm={10}>
                    <Hidden smDown>
                        <Title style={{marginTop: "3rem"}}>
                            섬기는 이들 <FaUsers style={{color: "#E1B355"}}></FaUsers>
                        </Title>
                        <UnderLine style={{color: "#E1B355"}}>- - - -</UnderLine>
                    </Hidden>
                </Col>
            </Row>
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
