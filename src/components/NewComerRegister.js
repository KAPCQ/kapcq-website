import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid'
import { FaUser, FaUsers, FaEllipsisH } from 'react-icons/fa';

const Paper = styled.div`
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
    background: #fff;
    border-radius: 4px;
`

const MyPaper = styled(Paper)`
    margin: 3rem 0 2rem 0;
    padding-bottom: 2.5rem;
`

const Title = styled.h1`
    padding-top: 2rem;
    color: #3D3D3D;
    font-weight: bold;
    font-size: 3rem;
    text-align: center;
`

const Message = styled.p`
    text-align: center;
    color: #707070; 
    padding: 1rem 0 3rem 0;
    font-size: 1.25rem;
`

const ProcessText = styled.p`
    padding: 0.1rem 0;
    color: #707070;
    font-size: 1rem;
    text-align: center;
`

const UnderLine = styled.div`
    margin: auto;
    width: 5rem;
    font-size: 2rem;
    margin-top: -1rem;
    color: #65ACB6;
`

const Button = styled.div`
    width: 8rem;
    padding: 0.2rem 0;
    color: #fff;
    border-radius: 0.2rem;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
`

const Circle = styled.div`
    background-color: #439FB2;
    border-radius: 50%;
    margin: auto;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: #fff;
`

const MoreIcon = styled(FaEllipsisH)`
    font-size: 3rem;
    width: 100%;
    color: #65ACB6;
`


function NewComerRegister(props) {
    return (
        <div>
            <MyPaper>
            <Title>새가족 등록안내</Title>
            <UnderLine>- - - -</UnderLine>
            <Message>
                새가족 여러분을 새가족학교로 초대합니다!<br/>
                새가족 여러분만을 위한 새가족교육은 총 7주 동안 진행이 됩니다.<br/>
                이 과정을 마치시면 퀸즈장로교회의 정식 등록교인이 됩니다.
            </Message>
            <Grid fluid>
                <Row center="xs">
                    <Col sm={1}>
                        <Circle>
                            <FaUser fontSize="2rem"></FaUser>
                        </Circle>
                    </Col>
                    <Col sm={1}>
                        <MoreIcon></MoreIcon>
                    </Col>
                    <Col sm={1}>
                        <MoreIcon></MoreIcon>
                    </Col>
                    <Col sm={1}>
                        <MoreIcon></MoreIcon>
                    </Col>
                    <Col sm={1}>
                        <MoreIcon></MoreIcon>
                    </Col>
                    <Col sm={1}>
                        <MoreIcon></MoreIcon>
                    </Col>
                    <Col sm={1}>
                        <MoreIcon></MoreIcon>
                    </Col>
                    <Col sm={1}>
                        <MoreIcon></MoreIcon>
                    </Col>
                    <Col sm={1}>
                        <Circle>
                            <FaUsers fontSize="2.5rem"></FaUsers>
                        </Circle>
                    </Col>
                </Row>
            </Grid>
            <Grid fluid>
                <Row center="xs">
                    <Col sm={1}>
                        <ProcessText style={{fontWeight: "bold"}}>교회방문</ProcessText>
                        <ProcessText>교회로비에서 안내받기</ProcessText>
                    </Col>
                    <Col sm={1}>
                        <ProcessText style={{fontWeight: "bold"}}>새가족 교육</ProcessText>
                        <ProcessText>1-7 교육참여 매주 화요일 친교실</ProcessText>
                    </Col>
                    <Col sm={1}>
                        <ProcessText style={{fontWeight: "bold"}}>새가족 교육</ProcessText>
                        <ProcessText>1-7 교육참여 매주 화요일 친교실</ProcessText>
                    </Col>
                    <Col sm={1}>
                        <ProcessText style={{fontWeight: "bold"}}>새가족 교육</ProcessText>
                        <ProcessText>1-7 교육참여 매주 화요일 친교실</ProcessText>
                    </Col>
                    <Col sm={1}>
                        <ProcessText style={{fontWeight: "bold"}}>새가족 교육</ProcessText>
                        <ProcessText>1-7 교육참여 매주 화요일 친교실</ProcessText>
                    </Col>
                    <Col sm={1}>
                        <ProcessText style={{fontWeight: "bold"}}>새가족 교육</ProcessText>
                        <ProcessText>1-7 교육참여 매주 화요일 친교실</ProcessText>    
                    </Col>
                    <Col sm={1}>                    
                        <ProcessText style={{fontWeight: "bold"}}>새가족 교육</ProcessText>
                        <ProcessText>1-7 교육참여 매주 화요일 친교실</ProcessText>
                    </Col>
                    <Col sm={1}>                    
                        <ProcessText style={{fontWeight: "bold"}}>새가족 교육</ProcessText>
                        <ProcessText>1-7 교육참여 매주 화요일 친교실</ProcessText>
                    </Col>
                    <Col sm={1}>
                        <ProcessText style={{fontWeight: "bold"}}>공동체 생활</ProcessText>
                        <ProcessText>퀸즈장로교회 등록 교인으로 신앙생활</ProcessText>
                    </Col>
                </Row>
            </Grid>
            </MyPaper>
            <Grid fluid>
                <Row center="xs" style={{padding: "1rem 0 5rem 0"}}>
                    <Col>
                        <Button style={{backgroundColor: "#DFAC44", margin: "0 1rem"}}>
                            등록하기
                        </Button>
                    </Col>
                    <Col>
                        <Button style={{backgroundColor: "rgba(112,112,112,0.78)", margin: "0 1rem"}}>
                        새가족FAQ
                        </Button>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default NewComerRegister;