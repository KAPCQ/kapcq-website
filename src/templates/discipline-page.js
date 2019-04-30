import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components';
import Layout from '../components/Layout'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { MainTitle, Divider, MainDescription, Title, UnderLine } from '../components/style';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

const Description = styled.p`
  color: #95989A;
`

export const DisciplinePageTemplate = ({ title }) => {

  return (
    <div>
        <Grid fluid style={{padding: "0"}}>
          <Row style={{backgroundColor: "rgba(65, 158, 178, 0.2)"}}>
            <Col sm={1}></Col>
            <Col sm={10}>
              <MainTitle color="#419EB2">{title}</MainTitle>
              <Divider background="#FFFFFF" style={{marginTop: "2rem"}}></Divider>
              <Row>
                <Col md={7}>
                  <MainDescription color="#707070">
                    저희 교회는 1973년에 장영춘 원로목사께서 개척하여 '사도행전의 역사를 재현하는 교회'를 모토로 40년을 은혜 가운데 달려 왔습니다.
                    그 목회철학을 계승하여 2013년에 영광스런 3기사역의 항해를 시작하게 되었습니다. 
                    주님이 원하시는 바로 그 교회의 핵심은 한 영혼을 소중히 여기시는 주님의 마음을 잊지 않는 것입니다.
                    시간이 흘러도 본질을 놓치지 않는 교회, 역사가 깊어져도 본질이 변하지 않는 교회, 주님이 이 땅에 다시 오시는 날까지 주의 심장이 살아 숨시는 교회가 되길 소망합니다.
                  </MainDescription>
                </Col>
              </Row>
            </Col>
            <Col sm={1}></Col>
          </Row>
          <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
              <Title style={{marginTop: "3rem"}}>새가족학교</Title>
              <UnderLine style={{color: "#419EB2"}}>- - - -</UnderLine>
              <Tabs>
                <TabList>
                  <Tab style={{width: "25%", textAlign: "center"}}>등록안내</Tab>
                  <Tab style={{width: "25%", textAlign: "center"}}>교육내용</Tab>
                  <Tab style={{width: "25%", textAlign: "center"}}>새가족Q&A</Tab>
                  <Tab style={{width: "25%", textAlign: "center"}}>환영합니다</Tab>
                </TabList>

                <TabPanel style={{backgroundColor: "rgba(217, 236, 240, 0.3", padding: "3rem"}}>
                  <Description>
                    *설립취지와 교육목표:<br/><br/>
                    퀸즈장로교회 교육위원회는 지역사회를 위한 교육사업의 일환으로 ‘열린 유아원’ 을 설립하였습니다. ‘열린 유아원’ 은 그 이름처럼 만 2세 - 4세에 해당되는 모든 유아와 그 부모(보호자)를 위하여 열려 있는데, 기독교 교육철학에 바탕을 둔 다양한 교육 프로그램들을 마련하고 유아의 전인적인 발달과 이를 돕기 위한 바람직한 부모(보호자)교육을 목표로 하고 있습니다. 
* 원아 모집은 매 학기 초 개원 2-3주전에 메일을 통하여 해당 가정에 등록 안내서를 발송한 후 개원일 이틀 전에 조기 등록을 받습니다. 정원은 본 교회 소속 유아를 제외하고 3개 반의 정원을 합하여 50명으로 선착순 제한하며 그 후에 등록을 희망하는 유아는 Waiting list에 기록되고 결원이 생겼을 경우에 순서에 따라 정식 입원을 할 수 있게 됩니다. 
* 학사 관리는 한 학기 중 3회까지 무단 결석하는 유아는 자동으로 제적됩니다. 결원이 생긴 자리는 Waiting list의 순서에 따라 충원합니다. 두 학기 이상 등록하여 교육을 받은 유아에 한하여 매 년 6월에 졸업장이 수여됩니다.
                  </Description>
                  <br/>
                  <Description>
                    * 교육 내용:<br/><br/>
                    - 예배/ 찬송·기도·말씀을 통해 어려서부터 하나님을 경외하는 지혜로 어린이로 성장하도록 돕는다.<br/>
- 음률활동/ 찬양과 율동을 통하여 하나님을 찬양하는 것을 배우며 교육적인 노래를 통하여 음악적 감각을 발달시키고 표현하도록 돕는다.<br/>
- 한글/ 듣기, 쓰기, 말하기, 발표하기, 한글노래 및 찬송가 부르기를 통해 한국민의 긍지를 심어주고 한글을 배우고 우리말을 사용할 수 있도록 돕는다.<br/>
- 영어/ 영어노래, 단어 익히기 등을 통하여 듣고 말하고 쓰는 능력을 길러주며 나아가 앞으로의 학업(학교 생활)에 잘 적응하도록 도움을 주고자 한다.<br/>
- 산수/ 도형 인식, 수의 개념 등을 심어주어 논리적·수리적 사고력을 갖도록 돕는다.<br/>
- 창작활동/ 다양한 미술활동(창작활동)을 통하여 심미적인 감성의 발달과 창의성을 개발시키고 성취감을 누리도록 돕는다.<br/>
- 신체운동/ 다양한 형태의 Game과 운동을 통해 건전한 신체발달과 질서지키기, 협동심 등을 기르도록 돕는다(한 학기에 한번씩 Gym에서 소 운동회가 열림).<br/>
- 특별활동/ Video를 통한 교육, 요리 실습, 시장놀이 등을 통하여 감각을 통한 교육, 생활교육, 사회교육 등을 실행한다.<br/>
                  </Description>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
              </Tabs>
            </Col>
            <Col sm={1}></Col>
          </Row>
          <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
              <Title style={{marginTop: "3rem"}}>훈련</Title>
              <UnderLine style={{color: "#E1B355"}}>- - - -</UnderLine>
              <Tabs>
                <TabList>
                  <Tab style={{width: "25%", textAlign: "center"}}>퀸장바이블칼리지</Tab>
                  <Tab style={{width: "25%", textAlign: "center"}}>제자훈련(제자/영성/사역)</Tab>
                  <Tab style={{width: "25%", textAlign: "center"}}>전도폭발</Tab>
                  <Tab style={{width: "25%", textAlign: "center"}}>세례교육</Tab>
                </TabList>

                <TabPanel style={{backgroundColor: "rgba(237, 233, 222, 0.3", padding: "3rem"}}>
                  <Description>
                    *설립취지와 교육목표:<br/><br/>
                    퀸즈장로교회 교육위원회는 지역사회를 위한 교육사업의 일환으로 ‘열린 유아원’ 을 설립하였습니다. ‘열린 유아원’ 은 그 이름처럼 만 2세 - 4세에 해당되는 모든 유아와 그 부모(보호자)를 위하여 열려 있는데, 기독교 교육철학에 바탕을 둔 다양한 교육 프로그램들을 마련하고 유아의 전인적인 발달과 이를 돕기 위한 바람직한 부모(보호자)교육을 목표로 하고 있습니다. 
* 원아 모집은 매 학기 초 개원 2-3주전에 메일을 통하여 해당 가정에 등록 안내서를 발송한 후 개원일 이틀 전에 조기 등록을 받습니다. 정원은 본 교회 소속 유아를 제외하고 3개 반의 정원을 합하여 50명으로 선착순 제한하며 그 후에 등록을 희망하는 유아는 Waiting list에 기록되고 결원이 생겼을 경우에 순서에 따라 정식 입원을 할 수 있게 됩니다. 
* 학사 관리는 한 학기 중 3회까지 무단 결석하는 유아는 자동으로 제적됩니다. 결원이 생긴 자리는 Waiting list의 순서에 따라 충원합니다. 두 학기 이상 등록하여 교육을 받은 유아에 한하여 매 년 6월에 졸업장이 수여됩니다.
                  </Description>
                  <br/>
                  <Description>
                    * 교육 내용:<br/><br/>
                    - 예배/ 찬송·기도·말씀을 통해 어려서부터 하나님을 경외하는 지혜로 어린이로 성장하도록 돕는다.<br/>
- 음률활동/ 찬양과 율동을 통하여 하나님을 찬양하는 것을 배우며 교육적인 노래를 통하여 음악적 감각을 발달시키고 표현하도록 돕는다.<br/>
- 한글/ 듣기, 쓰기, 말하기, 발표하기, 한글노래 및 찬송가 부르기를 통해 한국민의 긍지를 심어주고 한글을 배우고 우리말을 사용할 수 있도록 돕는다.<br/>
- 영어/ 영어노래, 단어 익히기 등을 통하여 듣고 말하고 쓰는 능력을 길러주며 나아가 앞으로의 학업(학교 생활)에 잘 적응하도록 도움을 주고자 한다.<br/>
- 산수/ 도형 인식, 수의 개념 등을 심어주어 논리적·수리적 사고력을 갖도록 돕는다.<br/>
- 창작활동/ 다양한 미술활동(창작활동)을 통하여 심미적인 감성의 발달과 창의성을 개발시키고 성취감을 누리도록 돕는다.<br/>
- 신체운동/ 다양한 형태의 Game과 운동을 통해 건전한 신체발달과 질서지키기, 협동심 등을 기르도록 돕는다(한 학기에 한번씩 Gym에서 소 운동회가 열림).<br/>
- 특별활동/ Video를 통한 교육, 요리 실습, 시장놀이 등을 통하여 감각을 통한 교육, 생활교육, 사회교육 등을 실행한다. <br/>
                  </Description>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
              </Tabs>
            </Col>
            <Col sm={1}></Col>
          </Row>
          <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
              <Title style={{marginTop: "3rem"}}>교회학교</Title>
              <UnderLine style={{color: "#E1B355"}}>- - - -</UnderLine>
              <Tabs>
                <TabList>
                  <Tab style={{width: "25%", textAlign: "center"}}>주일학교</Tab>
                  <Tab style={{width: "25%", textAlign: "center"}}>특별활동</Tab>
                  <Tab style={{width: "25%", textAlign: "center"}}>교육부 소식</Tab>
                </TabList>

                <TabPanel style={{backgroundColor: "rgba(244, 249, 251, 0.3", padding: "3rem"}}>
                  <Description>
                  * 영아/유아/유치/유년<br/><br/>
                  퀸즈장로교회 교육위원회는 지역사회를 위한 교육사업의 일환으로 ‘열린 유아원’ 을 설립하였습니다. ‘열린 유아원’ 은 그 이름처럼 만 2세 - 4세에 해당되는 모든 유아와 그 부모(보호자)를 위하여 열려 있는데, 기독교 교육철학에 바탕을 둔 다양한 교육 프로그램들을 마련하고 유아의 전인적인 발달과 이를 돕기 위한 바람직한 부모(보호자)교육을 목표로 하고 있습니다. 
* 원아 모집은 매 학기 초 개원 2-3주전에 메일을 통하여 해당 가정에 등록 안내서를 발송한 후 개원일 이틀 전에 조기 등록을 받습니다. 정원은 본 교회 소속 유아를 제외하고 3개 반의 정원을 합하여 50명으로 선착순 제한하며 그 후에 등록을 희망하는 유아는 Waiting list에 기록되고 결원이 생겼을 경우에 순서에 따라 정식 입원을 할 수 있게 됩니다. 
                  </Description>
                  <br/>
                  <Description>
                  * 초등/중등/고등<br/><br/>
                  퀸즈장로교회 교육위원회는 지역사회를 위한 교육사업의 일환으로 ‘열린 유아원’ 을 설립하였습니다. ‘열린 유아원’ 은 그 이름처럼 만 2세 - 4세에 해당되는 모든 유아와 그 부모(보호자)를 위하여 열려 있는데, 기독교 교육철학에 바탕을 둔 다양한 교육 프로그램들을 마련하고 유아의 전인적인 발달과 이를 돕기 위한 바람직한 부모(보호자)교육을 목표로 하고 있습니다. 
* 원아 모집은 매 학기 초 개원 2-3주전에 메일을 통하여 해당 가정에 등록 안내서를 발송한 후 개원일 이틀 전에 조기 등록을 받습니다. 정원은 본 교회 소속 유아를 제외하고 3개 반의 정원을 합하여 50명으로 선착순 제한하며 그 후에 등록을 희망하는 유아는 Waiting list에 기록되고 결원이 생겼을 경우에 순서에 따라 정식 입원을 할 수 있게 됩니다.
                  </Description>
                  <br/>
                  <Description>
                  * 청년대학부<br/><br/>
                  퀸즈장로교회 교육위원회는 지역사회를 위한 교육사업의 일환으로 ‘열린 유아원’ 을 설립하였습니다. ‘열린 유아원’ 은 그 이름처럼 만 2세 - 4세에 해당되는 모든 유아와 그 부모(보호자)를 위하여 열려 있는데, 기독교 교육철학에 바탕을 둔 다양한 교육 프로그램들을 마련하고 유아의 전인적인 발달과 이를 돕기 위한 바람직한 부모(보호자)교육을 목표로 하고 있습니다. 
                  </Description>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
              </Tabs>
            </Col>
            <Col sm={1}></Col>
          </Row>
          <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
              <Title style={{marginTop: "3rem"}}>부속학교</Title>
              <UnderLine style={{color: "#E1B355"}}>- - - -</UnderLine>
              <Tabs>
                <TabList>
                  <Tab style={{width: "25%", textAlign: "center"}}>열린유아원</Tab>
                  <Tab style={{width: "25%", textAlign: "center"}}>아가페유치원</Tab>
                  <Tab style={{width: "25%", textAlign: "center"}}>한국학교</Tab>
                  <Tab style={{width: "25%", textAlign: "center"}}>성인대학</Tab>
                </TabList>

                <TabPanel style={{backgroundColor: "rgba(237, 233, 222, 0.3", padding: "3rem"}}>
                  <Description>
                  * 설립취지와 교육목표:<br/><br/>
                  퀸즈장로교회 교육위원회는 지역사회를 위한 교육사업의 일환으로 ‘열린 유아원’ 을 설립하였습니다. ‘열린 유아원’ 은 그 이름처럼 만 2세 - 4세에 해당되는 모든 유아와 그 부모(보호자)를 위하여 열려 있는데, 기독교 교육철학에 바탕을 둔 다양한 교육 프로그램들을 마련하고 유아의 전인적인 발달과 이를 돕기 위한 바람직한 부모(보호자)교육을 목표로 하고 있습니다. 
* 원아 모집은 매 학기 초 개원 2-3주전에 메일을 통하여 해당 가정에 등록 안내서를 발송한 후 개원일 이틀 전에 조기 등록을 받습니다. 정원은 본 교회 소속 유아를 제외하고 3개 반의 정원을 합하여 50명으로 선착순 제한하며 그 후에 등록을 희망하는 유아는 Waiting list에 기록되고 결원이 생겼을 경우에 순서에 따라 정식 입원을 할 수 있게 됩니다. 
* 학사 관리는 한 학기 중 3회까지 무단 결석하는 유아는 자동으로 제적됩니다. 결원이 생긴 자리는 Waiting list의 순서에 따라 충원합니다. 두 학기 이상 등록하여 교육을 받은 유아에 한하여 매 년 6월에 졸업장이 수여됩니다. 
                  </Description>
                  <br/>
                  <Description>
                  * 교육 내용:<br/><br/>
                  - 예배/ 찬송·기도·말씀을 통해 어려서부터 하나님을 경외하는 지혜로 어린이로 성장하도록 돕는다.<br/>
- 음률활동/ 찬양과 율동을 통하여 하나님을 찬양하는 것을 배우며 교육적인 노래를 통하여 음악적 감각을 발달시키고 표현하도록 돕는다.<br/>
- 한글/ 듣기, 쓰기, 말하기, 발표하기, 한글노래 및 찬송가 부르기를 통해 한국민의 긍지를 심어주고 한글을 배우고 우리말을 사용할 수 있도록 돕는다.<br/>
- 영어/ 영어노래, 단어 익히기 등을 통하여 듣고 말하고 쓰는 능력을 길러주며 나아가 앞으로의 학업(학교 생활)에 잘 적응하도록 도움을 주고자 한다.<br/>
- 산수/ 도형 인식, 수의 개념 등을 심어주어 논리적·수리적 사고력을 갖도록 돕는다.<br/>
- 창작활동/ 다양한 미술활동(창작활동)을 통하여 심미적인 감성의 발달과 창의성을 개발시키고 성취감을 누리도록 돕는다.<br/>
- 신체운동/ 다양한 형태의 Game과 운동을 통해 건전한 신체발달과 질서지키기, 협동심 등을 기르도록 돕는다(한 학기에 한번씩 Gym에서 소 운동회가 열림).<br/>
- 특별활동/ Video를 통한 교육, 요리 실습, 시장놀이 등을 통하여 감각을 통한 교육, 생활교육, 사회교육 등을 실행한다.<br/>
                  </Description>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
              </Tabs>
            </Col>
            <Col sm={1}></Col>
          </Row>
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
