import React from 'react'
import Layout from '../components/Layout'
import { Grid, Row, Col } from 'react-flexbox-grid'
import styled from 'styled-components'
import WelcomeProcess from '../components/WelcomeProcess'
import NewComerRegister from '../components/NewComerRegister'
import Minstry from '../components/Ministry'
import Path from '../components/Path'
import Facility from '../components/Facility'

const Header = styled.h1`
    color: #DFAC44;
    padding-top: 10rem;
    font-size: 3.75rem;
    text-align: left;
`

const Message = styled.p`
    color: #707070;
    padding-top: 1rem;
    text-align: left;
    font-size: 1.25rem;
`

export default class IndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <Grid fluid style={{backgroundColor: "rgba(230, 202, 144, 0.5)"}}>
                    <Row center="xs">
                        <Col sm={10}>
                            <Header>환영합니다.</Header>
                            <Message>퀸즈장로교회에 처음 오신 분들을 위한 교회 방문부터 교인이 되기까지의 과정</Message>
                            <WelcomeProcess></WelcomeProcess>
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid style={{backgroundColor: "#EDE9DE"}}>
                    <Row center="xs">
                        <Col sm={10}>
                            <NewComerRegister></NewComerRegister>
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid>
                    <Row center="xs">
                        <Col sm={10}>
                            <Minstry></Minstry>
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid style={{backgroundColor: "rgba(208, 208, 208, 0.2)"}}>
                    <Row center="xs">
                        <Col sm={10}>
                            <Path></Path>
                        </Col>
                    </Row>
                </Grid>
                <Grid fluid>
                    <Row center="xs">
                        <Col sm={10}>
                            <Facility></Facility>
                        </Col>
                    </Row>
                </Grid>
            </Layout>
        )
    }
}