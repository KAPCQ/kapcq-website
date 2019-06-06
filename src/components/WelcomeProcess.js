import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid'
import Hidden from '@material-ui/core/Hidden'
import { FaLaughBeam, FaDoorOpen, FaUserPlus, FaHandsHelping, FaArrowRight, FaArrowDown, FaArrowLeft } from 'react-icons/fa';

const Wrapper = styled(Grid)`
    margin: 3rem 0;
`

const Circle = styled.div`
    background-color: ${props => 'rgba(67, 159, 178, ' + props.alpha + ')' };
    border-radius: 50%;
    width: ${props => props.mobile ? '8.5rem' : '12rem'};
    height: ${props => props.mobile ? '8.5rem' : '12rem'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: #fff;
`

const Title = styled.h1`
    margin-top: ${props => props.mobile ? '' : '1rem'};
    font-weight: bold;
    color: ${props => props.mobile ? '#ffffff' : '#606060'};
    text-align: center;
    font-size: ${props => props.mobile ? '0.8rem' : '1.5rem'};
    padding: ${props => props.mobile ? '0.5rem' : ''};
`

const Text = styled.p`
    text-align: center;
    color: ${props => props.mobile ? '#ffffff' : '#707070'};
    padding: 1rem;
    font-size: ${props => props.mobile ? '0.7rem' : '1.25rem'};
`

const ArrowForward = styled(FaArrowRight)`
    color: #66ADB8; 
    height: ${props => props.mobile ? '9rem' : '12rem'};
    font-size: ${props => props.mobile ? '1.5rem' : '2.5rem'};
`

const ArrowDown = styled(FaArrowDown)`
    color: #66ADB8; 
    font-size: 1.5rem;
    height: 4rem;
`

const ArrowLeft = styled(FaArrowLeft)`
    color: #66ADB8; 
    font-size: 1.5rem;
    height: 9rem;
`

function WelcomeProcess(props) {
    return (
        <Wrapper fluid>
            <Row center="xs">
                <Col xs={5} lg={3}>
                    <Row center="xs">
                        <Hidden smDown>
                            <Col md={8}>
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <Circle alpha="0.25">
                                    <FaLaughBeam></FaLaughBeam>
                                </Circle>
                            </div>
                            <Title>환영합니다</Title>
                            <Text>
                                퀸즈장로교회에 소중한
                                발걸음을 해주신 새가족을
                                위한 정보를 한눈에!
                            </Text>
                            </Col>
                            <Col md={4} style={{display: "flex", justifyContent: "center"}}>
                                <ArrowForward/>
                            </Col>
                        </Hidden>
                        <Hidden mdUp>
                            <Circle mobile alpha="0.25">
                                <Text mobile>
                                    <Title mobile>환영합니다</Title>
                                    퀸즈장로교회에 소중한
                                    발걸음을 해주신 새가족을
                                    위한 정보를 한눈에!
                                </Text>
                            </Circle>
                        </Hidden>
                    </Row>
                </Col>
                <Hidden mdUp>
                    <Col xs={2}>
                        <ArrowForward mobile/>
                    </Col>
                </Hidden>
                <Col xs={5} lg={3}>
                    <Row center="xs">
                        <Hidden smDown>
                            <Col md={8}>
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <Circle alpha="0.5">
                                    <FaDoorOpen></FaDoorOpen>
                                </Circle>
                            </div>
                            <Title>교회방문하기</Title>
                            <Text>
                                퀸즈장로교회에 오시는 길을 안내합니다.
                            </Text>
                            </Col>
                            <Col md={4} style={{display: "flex", justifyContent: "center"}}>
                                <ArrowForward/>
                            </Col>
                        </Hidden>
                        <Hidden mdUp>
                            <Circle mobile alpha="0.5">
                                <Text mobile>
                                <Title mobile>교회방문하기</Title>
                                    퀸즈장로교회에 오시는 길을 안내합니다.
                                </Text>
                            </Circle>
                        </Hidden>
                    </Row>
                    <Hidden mdUp>
                        <Row center="xs">
                            <Col>
                                <ArrowDown/>
                            </Col>
                        </Row>
                    </Hidden>
                </Col>
                <Col xs={5} lg={3}>
                    <Row center="xs">
                        <Hidden smDown>
                            <Col md={8}>
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <Circle alpha="0.75">
                                    <FaUserPlus></FaUserPlus>
                                </Circle>
                            </div>
                            <Title>새가족 등록하기</Title>
                            <Text>
                                퀸즈장로교회에 교인이 되기 위한 첫 걸음, 새가족 등록에 대한 모든 것
                            </Text>
                            </Col>
                            <Col md={4} style={{display: "flex", justifyContent: "center"}}>
                                <ArrowForward/>
                            </Col>
                        </Hidden>
                        <Hidden mdUp>
                            <Circle mobile alpha="1">
                                <Text mobile>
                                <Title mobile>사역 참여하기</Title>
                                    퀸즈장로교회에 교인이 되었다면 사역에 참여할 준비가 되었습니다.
                                </Text>
                            </Circle>
                        </Hidden>
                    </Row>
                </Col>
                <Hidden mdUp>
                    <Col xs={2}>
                        <ArrowLeft mobile/>
                    </Col>
                </Hidden>
                <Col xs={5} lg={3}>
                    <Row center="xs">
                        <Hidden smDown>
                            <Col md={8}>
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <Circle alpha="1">
                                    <FaHandsHelping></FaHandsHelping>
                                </Circle>
                            </div>
                            <Title>사역 참여하기</Title>
                            <Text>
                                퀸즈장로교회에 교인이 되었다면 사역에 참여할 준비가 되었습니다.
                            </Text>
                            </Col>
                        </Hidden>
                        <Hidden mdUp>
                            <Circle mobile alpha="0.75">
                                <Text mobile>
                                <Title mobile>새가족 등록하기</Title>
                                    퀸즈장로교회에 교인이 되기 위한 첫 걸음, 새가족 등록에 대한 모든 것
                                </Text>
                            </Circle>
                        </Hidden>
                    </Row>
                </Col>
            </Row>
        </Wrapper>
    );
}

export default WelcomeProcess;