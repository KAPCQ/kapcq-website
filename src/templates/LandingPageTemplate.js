import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Hidden from '@material-ui/core/Hidden'
import styled from 'styled-components'
import Video from '../components/Video'
import QuickMenu from '../components/QuickMenu'
import Announcement from '../components/Announcement'
import Event from '../components/Event'
import Section from '../components/Section'
import MainTitle from '../components/MainTitle'

const BackgroundVideo = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    filter: opacity(80%);
    z-index: -99;
`

const MainLink = styled.p`
    font-weight: bold;
    color: #3D3D3D;
    font-size: 0.8rem;
    text-align: center;
    padding-left: 1rem;
`

const LandingPageTemplate = ({
    images,
    latestSermon,
    familyWorshipData,
    announcements,
  }) => (
    <div>
        <BackgroundVideo autoPlay loop muted>
            <source src="/img/main-background.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </BackgroundVideo>
        <MainTitle images={images}></MainTitle>
        <Grid fluid style={{paddingTop: "1rem", backgroundColor: "#EDE9DE"}}>
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <Hidden lgUp>
                        <Row style={{paddingBottom: "1rem"}} bottom="xs" between="xs">
                            <Col xs={4}>
                                <Link to='/welcome'>
                                    <h1 style={{color: "#DFAC44", fontSize: "1.2rem"}}>환영합니다</h1>
                                </Link>
                            </Col>
                            <Col xs={8}>
                                <Row end="xs">
                                    <Col xs={4} style={{padding: "0"}}>
                                    <Link to='/welcome'>
                                        <MainLink>새가족안내</MainLink>
                                    </Link>
                                    </Col>
                                    <Col xs={4} style={{padding: "0"}}>
                                    <Link to='/information'>
                                        <MainLink>예배안내</MainLink>
                                    </Link>
                                    </Col>
                                    <Col xs={4} style={{padding: "0"}}>
                                    <Link to='/community'>
                                        <MainLink>금주의 주보</MainLink>
                                    </Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Hidden>
                    <Row>
                        <Col xs={12} xl={7} style={{paddingBottom: "1rem"}}>
                            <Video src={"https://www.youtube.com/embed/" + latestSermon + "?rel=0"}></Video>
                        </Col>
                        <Hidden mdDown>
                            <Col xs={12} lg={5}>
                                <QuickMenu items={[
                                    {text: '새가족안내', path: '/welcome', backgroundColor: 'rgba(243, 247, 248, 0.8)', textColor: '#3D3D3D'},
                                    {text: '예배시간', path: '/information', backgroundColor: 'rgba(220, 157, 30, 0.4)', textColor: '#3D3D3D'},
                                    {text: '금주의 주보', path: '/community', backgroundColor: 'rgba(208, 208, 208, 0.8)', textColor: '#3D3D3D'},
                                    {text: '목양칼럼', path: '/community', backgroundColor: 'rgba(220, 157, 30, 0.8)', textColor: 'white'}
                                    ]}/>
                            </Col>
                        </Hidden>
                    </Row>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Grid>
        <Grid fluid>
            <Announcement items={announcements}></Announcement>
        </Grid>
        <Section data={familyWorshipData}></Section>
        <Event events={[
            {src: "/img/family-sing.png", alt: "family-sing", title: "가족찬양제"},
            {src: "/img/publish-event.png", alt: "publish-event", title: "히즈핑거 출판감사예배"},
            {src: "/img/christian-newspaper.png", alt: "christian-newspaper", title: "미주크리스천 신문사"}
            ]}/>
    </div>
  )
  
  LandingPageTemplate.propTypes = {
    images: PropTypes.array,
    video: PropTypes.string,
    title: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    menuItems: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
  }

export default LandingPageTemplate