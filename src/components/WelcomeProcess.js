import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid'
import { FaLaughBeam, FaDoorOpen, FaUserPlus, FaHandsHelping, FaArrowRight } from 'react-icons/fa';

const Wrapper = styled(Grid)`
    margin: 3rem 0;
`

const Circle = styled.div`
    background-color: #439FB2;
    border-radius: 50%;
    width: 12rem;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: #fff;
`

const Title = styled.h1`
    margin-top: 1rem;
    font-weight: bold;
    color: #606060;
    font-size: 3.75rem;
    text-align: center;
    font-size: 1.5rem;
`

const Text = styled.p`
    text-align: center;
    color: #707070;
    padding-top: 1rem;
    font-size: 1.25rem;
`

const ArrowForward = styled(FaArrowRight)`
    color: #66ADB8; 
    height: 12rem;
    font-size: 2.5rem;
`

function WelcomeProcess(props) {
    return (
        <Wrapper fluid>
            <Row>
                <Col md={3}>
                    <Row>
                        <Col md={8}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Circle>
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
                    </Row>
                </Col>
                <Col md={3}>
                    <Row>
                        <Col md={8}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Circle>
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
                    </Row>
                </Col>
                <Col md={3}>
                    <Row>
                        <Col md={8}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Circle>
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
                    </Row>
                </Col>
                <Col md={3}>
                    <Row>
                        <Col md={8}>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <Circle>
                                <FaHandsHelping></FaHandsHelping>
                            </Circle>
                        </div>
                        <Title>사역 참여하기</Title>
                        <Text>
                            퀸즈장로교회에 교인이 되었다면 사역에 참여할 준비가 되었습니다.
                        </Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Wrapper>
    );
}

export default WelcomeProcess;