import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { 
  MainTitle,
  Background, 
  Divider, 
  MainDescription, 
  Title, 
  UnderLine, 
  PrimaryButton, 
  Image, 
  Text } from '../components/style'
import AnnouncementCard from '../components/AnnouncementCard'
import { FaFile } from 'react-icons/fa';

export const CommunityPageTemplate = ({ title }) => {

  return (
    <div>
        <Grid fluid style={{padding: "0"}}>
          <Background image="/img/community-background.png">
            <Row>
              <Col sm={1}></Col>
              <Col sm={7}>
                <MainTitle color="#FFFFFF" style={{marginTop: "3rem"}}>{title}</MainTitle>
                <Divider background="#DFAC44" style={{marginTop: "5rem"}}></Divider>
                <MainDescription color="#FFFFFF">
                  저희 교회는 1973년에 장영춘 원로목사께서 개척하여 '사도행전의 역사를 재현하는 교회'를 모토로 40년을 은혜 가운데 달려 왔습니다.
                  그 목회철학을 계승하여 2013년에 영광스런 3기사역의 항해를 시작하게 되었습니다. 
                  주님이 원하시는 바로 그 교회의 핵심은 한 영혼을 소중히 여기시는 주님의 마음을 잊지 않는 것입니다.
                  시간이 흘러도 본질을 놓치지 않는 교회, 역사가 깊어져도 본질이 변하지 않는 교회, 주님이 이 땅에 다시 오시는 날까지 주의 심장이 살아 숨시는 교회가 되길 소망합니다.
                </MainDescription>
              </Col>
              <Col sm={1}></Col>
            </Row>
          </Background>
          <Row style={{backgroundColor: "#EDE9DE"}}>
            <Col sm={1}></Col>
            <Col sm={10}>
              <Title style={{marginTop: "3rem"}}>교회소식</Title>
              <UnderLine style={{color: "#E1B355"}}>- - - -</UnderLine>
              <AnnouncementCard></AnnouncementCard>
              <AnnouncementCard></AnnouncementCard>
              <AnnouncementCard></AnnouncementCard>
              <AnnouncementCard></AnnouncementCard>
              <Row end="xs" style={{borderTop: "1px solid #DFAC44", marginTop: "2rem"}}>
                <Col md={4}>
                  <PrimaryButton background = "#D5D4D2" style={{float: "right"}}>다음</PrimaryButton>
                  <PrimaryButton background = "#DFAC44" style={{float: "right"}}>이전</PrimaryButton>
                </Col>
              </Row>
              <Title style={{marginTop: "3rem"}}>행사사진</Title>
              <UnderLine style={{color: "#E1B355"}}>- - - -</UnderLine>
              <Row>
                <Col md={6}>
                  <Image image="/img/event2.png"></Image>
                  <Text center fontSize="1.2rem" style={{padding: "1rem"}}>사진첩이름</Text>
                </Col>
                <Col md={6}>
                  <Image image="/img/event1.png"></Image>
                  <Text center fontSize="1.2rem" style={{padding: "1rem"}}>사진첩이름</Text>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Image image="/img/event2.png"></Image>
                  <Text center fontSize="1.2rem" style={{padding: "1rem"}}>사진첩이름</Text>
                </Col>
                <Col md={6}>
                  <Image image="/img/event1.png"></Image>
                  <Text center fontSize="1.2rem" style={{padding: "1rem"}}>사진첩이름</Text>
                </Col>
              </Row>
            </Col>
            <Col sm={1}></Col>
          </Row>
          <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
              <Title style={{marginTop: "3rem"}}>금주의 주보</Title>
              <UnderLine style={{color: "#E1B355"}}>- - - -</UnderLine>
              <Row between="xs" style={{borderTop: "2px solid rgba(223, 172, 68, 0.5)", marginTop: "2rem", paddingTop: "2rem"}}>
                <Col xs={12}>
                  <table style={{width: "100%", color: "#95989A", borderCollapse: "separate", borderSpacing: "1rem"}}>
                    <tr>
                      <td>03.24.2019</td>
                      <td style={{textAlign: "center"}}>File Name</td>
                      <td style={{textAlign: "right"}}>download <FaFile style={{color: "rgba(226, 187, 107, 0.5)"}}/></td>
                    </tr>
                    <tr>
                      <td>03.24.2019</td>
                      <td style={{textAlign: "center"}}>File Name</td>
                      <td style={{textAlign: "right"}}>download <FaFile style={{color: "rgba(226, 187, 107, 0.5)"}}/></td>
                    </tr>
                    <tr>
                      <td>03.24.2019</td>
                      <td style={{textAlign: "center"}}>File Name</td>
                      <td style={{textAlign: "right"}}>download <FaFile style={{color: "rgba(226, 187, 107, 0.5)"}}/></td>
                    </tr>
                    <tr>
                      <td>03.24.2019</td>
                      <td style={{textAlign: "center"}}>File Name</td>
                      <td style={{textAlign: "right"}}>download <FaFile style={{color: "rgba(226, 187, 107, 0.5)"}}/></td>
                    </tr>
                  </table>
                </Col>
              </Row>
              <Row end="xs" style={{borderTop: "2px solid rgba(223, 172, 68, 0.5)", marginTop: "2rem"}}>
                <Col md={4}>
                  <PrimaryButton background = "#D5D4D2" style={{float: "right"}}>다음</PrimaryButton>
                  <PrimaryButton background = "#DFAC44" style={{float: "right"}}>이전</PrimaryButton>
                </Col>
              </Row>
            </Col>
            <Col sm={1}></Col>
          </Row>
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
