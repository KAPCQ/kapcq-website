import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components';
import Layout from '../components/Layout'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { MainTitle, Divider, MainDescription, Title, UnderLine, Background, Description, PrimaryButton, Circle } from '../components/style';
import { FaCross, FaChurch, FaHandsHelping, FaPeopleCarry } from 'react-icons/fa';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import Slider from '../components/Slider'

const MyTab = styled(Tab)`
  position: "static" !important;
`

export const MissionPageTemplate = ({ title }) => {

  return (
    <div>
        <Grid fluid style={{padding: "0"}}>
          <Background image="/img/mission-background.png">
            <Row>
              <Col sm={1}></Col>
              <Col sm={7}>
                <MainTitle color="#FFFFFF" style={{marginTop: "8rem"}}>{title}</MainTitle>
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
              <Title style={{marginTop: "3rem"}}>선교비전</Title>
              <UnderLine style={{color: "#E1B355"}}>- - - -</UnderLine>
              <Row>
                <Col md={5}>
                  <Row center="xs" middle="xs" style={{padding: "1rem"}}>
                    <Col md={6}>
                      <Circle background="#FFFFFF" radius="8rem" fontSize="3rem" color="#707070">
                        <FaCross></FaCross>
                      </Circle>
                    </Col>
                    <Col md={6}>
                      <Circle background="#FFFFFF" radius="8rem" fontSize="3rem" color="#707070">
                        <FaChurch></FaChurch>
                      </Circle>
                    </Col>
                  </Row>
                  <Row center="xs" middle="xs" style={{padding: "1rem"}}>
                    <Col md={6}>
                      <Circle background="#FFFFFF" radius="8rem" fontSize="3rem" color="#707070">
                        <FaHandsHelping></FaHandsHelping>
                      </Circle>
                    </Col>
                    <Col md={6}>
                      <Circle background="#FFFFFF" radius="8rem" fontSize="3rem" color="#707070">
                        <FaPeopleCarry></FaPeopleCarry>
                      </Circle>
                    </Col>
                  </Row>
                </Col>
                <Col md={7} style={{padding: "1rem"}}>
                <Description>
                  내비게이션이 있으신 분은 위의 주소를 입력하시면 쉽게 오실 수 있습니다.<br/>
                  주일에는 대중 교통 수단 이용하시기를 권장합니다.<br/>
                  장애우 차량이거나 장애우를 동승한 차량 중 장애인 주차 가능 등록증이 있는 차량은 교회 주차장에 우선 주차하실 수 있도록 안내해 드립니다.<br/>
                  하단의 주차장 버튼을 클릭하시면 교회 주차장과 주변 주차 가능 공간을 안내해드립니다.<br/>
                </Description>
                <Description>
                  내비게이션이 있으신 분은 위의 주소를 입력하시면 쉽게 오실 수 있습니다.<br/>
                  주일에는 대중 교통 수단 이용하시기를 권장합니다.<br/>
                  장애우 차량이거나 장애우를 동승한 차량 중 장애인 주차 가능 등록증이 있는 차량은 교회 주차장에 우선 주차하실 수 있도록 안내해 드립니다.<br/>
                  하단의 주차장 버튼을 클릭하시면 교회 주차장과 주변 주차 가능 공간을 안내해드립니다.<br/>
                </Description>
                </Col>
              </Row>
            </Col>
            <Col sm={1}></Col>
          </Row>
          <Row style={{backgroundColor: "#EDE9DE"}}>
            <Col sm={1}></Col>
            <Col sm={10}>
              <Title style={{marginTop: "3rem"}}>해외선교</Title>
              <UnderLine style={{color: "#E1B355", marginBottom: "3rem"}}>- - - -</UnderLine>
              <Tabs defaultTab="vertical-tab-one" vertical>
                <TabList style={{width: "30%", border: 0}}>
                  <MyTab tabFor="vertical-tab-one" className="tab">파송과 지원</MyTab>
                  <MyTab tabFor="vertical-tab-two" className="tab">단기선교</MyTab>
                  <MyTab tabFor="vertical-tab-three" className="tab">선교훈련</MyTab>
                  <MyTab tabFor="vertical-tab-four" className="tab">선교현장</MyTab>
                </TabList>
                <TabPanel tabId="vertical-tab-one">
                  <Description>
                    내비게이션이 있으신 분은 위의 주소를 입력하시면 쉽게 오실 수 있습니다.<br/>
                    주일에는 대중 교통 수단 이용하시기를 권장합니다.<br/>
                    장애우 차량이거나 장애우를 동승한 차량 중 장애인 주차 가능 등록증이 있는 차량은 교회 주차장에 우선 주차하실 수 있도록 안내해 드립니다.<br/>
                    하단의 주차장 버튼을 클릭하시면 교회 주차장과 주변 주차 가능 공간을 안내해드립니다.<br/>
                  </Description>
                </TabPanel>
                <TabPanel tabId="vertical-tab-two">
                  <p>Tab 2 content</p>
                </TabPanel>
                <TabPanel tabId="vertical-tab-three">
                  <p>Tab 3 content</p>
                </TabPanel>
              </Tabs>
            </Col>
            <Col sm={1}></Col>
          </Row>
          <Slider items={[
            '/img/mission1.png',
            '/img/mission2.png',
            '/img/mission3.png'
            ]} background="#EDE9DE"/>
          <Row style={{backgroundColor: "#EDE9DE"}}>
            <Col sm={1}></Col>
            <Col sm={10} style={{borderTop: "1px solid #DFAC44", marginTop: "1rem"}}>
              <PrimaryButton background = "#D5D4D2" style={{float: "right"}}>다음</PrimaryButton>
              <PrimaryButton background = "#DFAC44" style={{float: "right"}}>이전</PrimaryButton>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Grid>
    </div>    
  )
}

MissionPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
}

const MissionPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <MissionPageTemplate
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

MissionPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MissionPage

export const missionPageQuery = graphql`
  query MissionPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
