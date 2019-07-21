import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Hidden from '@material-ui/core/Hidden'
import { Title, UnderLine, Banner, Text, Button, PrimaryButton } from '../components/style';
import Video from '../components/Video'
import DateTitle from '../components/DateTitle'
import { FaRegThumbsUp, FaShare } from 'react-icons/fa';

const Background = styled(Grid)`
  background-image: url("/img/worship-crop.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: ${props => props.mobile ? '' : '100vh'};
` 

const MainTitle = styled.h1`
  font-size: ${props => props.mobile ? '1.5rem' : '4rem'};
  color: #ffffff;
  padding-top: 5rem;
`

const Description = styled.h2`
  font-size: ${props => props.mobile ? '0.9rem' : '1.3rem'};
  color: #ffffff;
  padding: ${props => props.mobile ? '1rem 2rem 3rem 0' : '4rem 0 10rem 0'};
  font-weight: bold;
`

const Circle = styled.div`
  background-color: #DFAC44;
  float: left;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`

const ButtonWrapper = styled.div`
  background-color: ${props => props.backgroundColor};
  text-align: center;
  border-radius: 0.2rem;
`

export const WorshipPageTemplate = ({ title }) => {

  return (
    <div>
        <Hidden smDown>
          <Background fluid>
            <Row>
              <Col sm={1}></Col>
              <Col sm={8} style={{paddingTop: "12rem"}}>
                  <MainTitle>{title}</MainTitle>
                  <div style={{margin: "6rem 0 1rem 0", backgroundColor: "#DFAC44", borderRadius: "1rem", width: "3rem", height: "0.5rem"}}></div>
                  <Description>
                      저희 교회는 1973년에 장영춘 원로목사께서 개척하여 '사도행전의 역사를 재현하는 교회'를 모토로 40년을 은혜 가운데 달려 왔습니다.
                      그 목회철학을 계승하여 2013년에 영광스런 3기사역의 항해를 시작하게 되었습니다. 
                      주님이 원하시는 바로 그 교회의 핵심은 한 영혼을 소중히 여기시는 주님의 마음을 잊지 않는 것입니다.
                      시간이 흘러도 본질을 놓치지 않는 교회, 역사가 깊어져도 본질이 변하지 않는 교회, 주님이 이 땅에 다시 오시는 날까지 주의 심장이 살아 숨시는 교회가 되길 소망합니다.
                  </Description>
              </Col>
              <Col sm={3}></Col>
            </Row>
          </Background>
        </Hidden>
        <Hidden mdUp>
          <Background fluid mobile="true">
            <MainTitle mobile>{title}</MainTitle>
            <div style={{margin: "1rem 0", backgroundColor: "#DFAC44", borderRadius: "1rem", width: "3rem", height: "0.2rem"}}></div>
            <Description mobile>
              저희 교회는 1973년에 장영춘 원로목사께서 개척하여 '사도행전의 역사를 재현하는 교회'를 모토로 40년을 은혜 가운데 달려 왔습니다.
              그 목회철학을 계승하여 2013년에 영광스런 3기사역의 항해를 시작하게 되었습니다. 
              주님이 원하시는 바로 그 교회의 핵심은 한 영혼을 소중히 여기시는 주님의 마음을 잊지 않는 것입니다.
              시간이 흘러도 본질을 놓치지 않는 교회, 역사가 깊어져도 본질이 변하지 않는 교회, 주님이 이 땅에 다시 오시는 날까지 주의 심장이 살아 숨시는 교회가 되길 소망합니다.
            </Description>
          </Background>
        </Hidden>
        <Grid fluid style={{padding: 0}}>
          <Row style={{backgroundColor: "#EDE9DE", padding: "1rem"}}>
            <Col sm={1}></Col>
            <Col sm={10}>
              <Hidden smDown>
                <Title style={{marginTop: "3rem"}}>말씀</Title>
                <UnderLine style={{color: "#E1B355"}}>- - - -</UnderLine>
              </Hidden>
              <Hidden mdUp>
                <Title mobile>말씀</Title>
                <UnderLine style={{color: "#E1B355"}}>---</UnderLine>
              </Hidden>
              <Banner backgroundColor="#F0D7A4">주일예배설교</Banner>
              <Grid fluid style={{padding: 0, marginTop: "2rem"}}>
                <Row>
                  <Col md={7}>
                    <Video src="https://www.youtube.com/embed/B2Gn7SICxz8"></Video>
                    <Text fontSize="1.3rem" style={{marginTop: "2rem"}}>
                      경배하러 왔노라 <br/> 경배하게 하라 [마태복음 2장 1-12절]
                    </Text>
                  </Col>
                  <Col md={5}>
                    <DateTitle
                      backgroundColor="rgba(240, 215, 164, 0.7)"
                      year="주후 2019."
                      date="04.07"
                      title="여리고를 무너뜨리라"
                      word="[히브리서 11장30-31절] / 김성국 목사"
                    />
                    <DateTitle
                      backgroundColor="rgba(240, 215, 164, 0.7)"
                      year="주후 2019."
                      date="04.07"
                      title="여리고를 무너뜨리라"
                      word="[히브리서 11장30-31절] / 김성국 목사"
                    />
                    <DateTitle
                      backgroundColor="rgba(240, 215, 164, 0.7)"
                      year="주후 2019."
                      date="04.07"
                      title="여리고를 무너뜨리라"
                      word="[히브리서 11장30-31절] / 김성국 목사"
                    />
                    <DateTitle
                      backgroundColor="rgba(240, 215, 164, 0.7)"
                      year="주후 2019."
                      date="04.07"
                      title="여리고를 무너뜨리라"
                      word="[히브리서 11장30-31절] / 김성국 목사"
                    />
                  </Col>
                </Row>
                <Row style={{marginTop: "2rem"}}>
                  <Hidden smDown>
                    <Col md={7} style={{paddingTop: "2rem"}}>
                      <Circle><FaRegThumbsUp/></Circle>
                      <Circle style={{marginLeft: "0.5rem"}}><FaShare/></Circle>
                      <Text fontSize="0.8rem" style={{clear: "both", paddingTop: "1rem"}}>2019.02.24</Text>
                    </Col>
                  </Hidden>
                  <Col md={5} style={{borderTop: "1px solid #DFAC44", paddingTop: "2rem"}}>
                    <Grid fluid>
                      <Row>
                        <Col xs={4}>
                          <ButtonWrapper backgroundColor = "#DFAC44">
                            <Button>이전</Button>
                          </ButtonWrapper>
                        </Col>
                        <Col xs={4}>
                          <ButtonWrapper backgroundColor = "#D5D4D2">
                            <Button>다음</Button>
                          </ButtonWrapper>
                        </Col>
                        <Col xs={4}>
                          <ButtonWrapper backgroundColor = "#EFDCB5">
                            <Button>전체보기</Button>
                          </ButtonWrapper>
                        </Col>
                      </Row>
                    </Grid>
                  </Col>
                </Row>
              </Grid>
            </Col>
            <Col sm={1}></Col>
          </Row>
          <Row style={{padding: "0 1rem"}}>
            <Col sm={1}></Col>
            <Col sm={10}>
              <Hidden smDown>
                <Title style={{marginTop: "2.5rem"}}>특별집회</Title>
                <UnderLine style={{color: "#E1B355"}}>- - - - - - - - -</UnderLine>
              </Hidden>
              <Hidden mdUp>
                <Title mobile style={{marginTop: "2.5rem"}}>특별집회</Title>
                <UnderLine style={{color: "#E1B355"}}>---</UnderLine>
              </Hidden>
              <Row>
                <Col md={4}>
                  <Banner backgroundColor="#88BABA">제직회</Banner>
                </Col>
                <Hidden smDown>
                  <Col md={4}>
                    <Banner backgroundColor="rgba(136,186,186,0.5)">사순절</Banner>
                  </Col>
                  <Col md={4}>
                    <Banner>수련회</Banner>
                  </Col>
                </Hidden>
              </Row>
              <Row bottom="xs" style={{marginTop: "2rem"}}>
                <Col md={4}>
                  <Video src="https://www.youtube.com/embed/B2Gn7SICxz8"></Video>
                </Col>
                <Col md={8}>
                  <DateTitle
                    backgroundColor="rgba(136, 186, 186, 0.3)"
                    year="주후 2019."
                    date="04.07"
                    title="여리고를 무너뜨리라"
                    word="[히브리서 11장30-31절] / 김성국 목사"
                  />
                </Col>
              </Row>
              <Row bottom="xs" style={{marginTop: "1rem"}}>
                <Col md={4}>
                  <Video src="https://www.youtube.com/embed/B2Gn7SICxz8"></Video>
                </Col>
                <Col md={8}>
                  <DateTitle
                    backgroundColor="rgba(136, 186, 186, 0.3)"
                    year="주후 2019."
                    date="04.07"
                    title="여리고를 무너뜨리라"
                    word="[히브리서 11장30-31절] / 김성국 목사"
                  />
                </Col>
              </Row>
              <Row bottom="xs" style={{marginTop: "1rem"}}>
                <Col md={4}>
                  <Video src="https://www.youtube.com/embed/B2Gn7SICxz8"></Video>
                </Col>
                <Col md={8}>
                  <DateTitle
                    backgroundColor="rgba(136, 186, 186, 0.3)"
                    year="주후 2019."
                    date="04.07"
                    title="여리고를 무너뜨리라"
                    word="[히브리서 11장30-31절] / 김성국 목사"
                  />
                </Col>
              </Row>
              <Row style={{borderTop: "1px solid #88BABA", marginTop: "1rem"}}>
                <Col xs={12}>
                  <PrimaryButton background = "rgba(136,186,186,0.3)" style={{float: "right"}}>전체보기</PrimaryButton>
                </Col>
              </Row>
            </Col>
            <Col sm={1}></Col>
          </Row>
          <Hidden smDown>
            <Row style={{backgroundColor: "rgba(208,208,208,0.2)"}}>
              <Col sm={1}></Col>
              <Col sm={10}>
                <Title style={{marginTop: "2.5rem"}}>찬양영상</Title>
                <UnderLine style={{color: "#E1B355"}}>- - - - - - - - - </UnderLine>
                <Row style={{margin: "1rem 0"}}>
                  <Col md={6}>
                    <Banner backgroundColor="#88BABA">주일찬양방송</Banner>
                  </Col>
                  <Col md={6}>
                    <Banner>특별찬양방송</Banner>
                  </Col>
                </Row>
                <Row bottom="xs" style={{marginTop: "4rem"}}>
                  <Col md={7}>
                    <Video src="https://www.youtube.com/embed/B2Gn7SICxz8"></Video>
                  </Col>
                  <Col md={5}>
                    <DateTitle
                      backgroundColor="rgba(136, 186, 186, 0.3)"
                      year="주후 2019."
                      date="04.07"
                      title="여리고를 무너뜨리라"
                      word="[히브리서 11장30-31절] / 김성국 목사"
                    />
                  </Col>
                </Row>
                <Row style={{borderTop: "1px solid #88BABA", marginTop: "1rem"}}>
                  <Col xs={12}>
                    <PrimaryButton background = "rgba(136,186,186,0.3)" style={{float: "right"}}>전체보기</PrimaryButton>
                  </Col>
                </Row>
              </Col>
              <Col sm={1}></Col>
            </Row>
            <Row style={{backgroundColor: "#EDE9DE"}}>
              <Col sm={1}></Col>
              <Col sm={10}>
                <Title style={{marginTop: "2.5rem"}}>행사영상</Title>
                <UnderLine style={{color: "#E1B355", marginBottom: "2rem"}}>- - - - - - - - - </UnderLine>
                <Row bottom="xs">
                  <Col md={7}>
                    <Video src="https://www.youtube.com/embed/B2Gn7SICxz8"></Video>
                  </Col>
                  <Col md={5}>
                    <DateTitle
                      backgroundColor="#EFDCB5"
                      year="주후 2019."
                      date="04.07"
                      title="여리고를 무너뜨리라"
                      word="[히브리서 11장30-31절] / 김성국 목사"
                    />
                  </Col>
                </Row>
                <Row style={{borderTop: "1px solid #E6CB93", marginTop: "1rem"}}>
                  <Col xs={12}>
                    <PrimaryButton background = "#EFDCB5" style={{float: "right"}}>전체보기</PrimaryButton>
                  </Col>
                </Row>
              </Col>
              <Col sm={1}></Col>
            </Row>
          </Hidden>
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
