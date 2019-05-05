import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'
import Video from '../components/Video'
import QuickMenu from '../components/QuickMenu'
import Announcement from '../components/Announcement'
import Event from '../components/Event'
import Section from '../components/Section'

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
    display: block;
    position: relative;
`

const LandingPageTemplate = ({
    images,
    title,
    heading,
    description,
    video,
    menuItems
  }) => (
    <div>
        <BackgroundVideo autoPlay loop muted>
            <source src="/img/main-background.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </BackgroundVideo>
        <Wrapper fluid>
            <Row middle="xs" style={{height: "100vh"}}>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <h1 style={{color: "white", fontSize: "5rem", lineHeight: "1", marginTop: "20rem"}}>
                        말씀으로 자신과 세상을 <br></br> 변화시키는 <span style={{color: "#DC9D1E"}}>교회</span>
                    </h1>
                    <h4 variant="h4" style={{color: "white", padding: "0.5rem", fontSize: "1.5rem"}}>하나님 중심, 말씀 중심, 교회 중심</h4>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Wrapper>
        <Grid fluid style={{paddingTop: "3rem", backgroundColor: "#EDE9DE"}}>
            <Row>
                <Col sm={1}></Col>
                <Col xs={12} sm={6}>
                    <Video src="https://www.youtube.com/embed/UEiH3ToDreU"></Video>
                </Col>
                <Col xs={12} sm={4}>
                    <QuickMenu items={[
                        {text: '새가족안내', path: '/welcome', backgroundColor: 'rgba(243, 247, 248, 0.8)', textColor: '#3D3D3D'},
                        {text: '예배시간', path: '/information', backgroundColor: 'rgba(220, 157, 30, 0.4)', textColor: '#3D3D3D'},
                        {text: '금주의 주보', path: '/community', backgroundColor: 'rgba(208, 208, 208, 0.8)', textColor: '#3D3D3D'},
                        {text: '목양칼럼', path: '/community', backgroundColor: 'rgba(220, 157, 30, 0.8)', textColor: 'white'}
                        ]}/>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </Grid>
        <Grid fluid>
            <Announcement items={[1,2,3]}></Announcement>
        </Grid>
        <Section></Section>
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

class LandingPage extends React.Component {
    render() {
        return (
            <LandingPageTemplate></LandingPageTemplate>
        );
    }
}

export default LandingPage