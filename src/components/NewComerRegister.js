import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid'
import Hidden from '@material-ui/core/Hidden'
import { FaUser, FaUsers, FaEllipsisH, FaEllipsisV, FaCircle } from 'react-icons/fa';
import { UnderLine } from './style';

const Paper = styled.div`
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
    background: #fff;
    border-radius: 4px;
`

const MyPaper = styled(Paper)`
    margin: 3rem 0 2rem 0;
    padding-bottom: 2.5rem;
    padding: 1rem 2rem;
`

const Title = styled.h1`
    padding-top: 2rem;
    color: #3D3D3D;
    font-weight: bold;
    font-size: ${props => props.mobile ? '1.3rem' : '3rem'};
    text-align: center;
`

const Message = styled.p`
    text-align: center;
    color: #707070; 
    padding-bottom: 3rem;
    font-size: 0.95rem;
`

const ProcessText = styled.p`
    padding: 0.1rem 0;
    color: #707070;
    font-size: 1rem;
    text-align: center;
`

const Button = styled.div`
    width: 8rem;
    padding: 0.5rem 0;
    color: #fff;
    border-radius: 0.2rem;
    font-size: ${props => props.mobile ? '1rem' : '1.4rem'};
    font-weight: bold;
    text-align: center;
    cursor: pointer;
`

const Circle = styled.div`
    background-color: #439FB2;
    border-radius: 50%;
    margin: auto;
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: #fff;
`

const MoreIcon = styled(FaEllipsisH)`
    margin-top: 1rem;
    font-size: 3rem;
    width: 100%;
    color: #65ACB6;
`

const MoreIconMobile = styled(FaEllipsisV)`
    margin-top: 0.5rem;
    font-size: 2rem;
    width: 100%;
    color: #65ACB6;
`

const CircleIcon = styled(FaCircle)`
    margin-bottom: 1rem;
    font-size: 1.5rem;
    width: 100%;
    color: #65ACB6;
`

function NewComerRegister(props) {
    return (
        <div>
            <MyPaper>
                <Hidden smDown>
                    <Title>새가족 등록안내</Title>
                </Hidden>
                <Hidden mdUp>
                    <Title mobile>새가족 등록안내</Title>
                </Hidden>
                <UnderLine color="#65ACB6">----</UnderLine>
                <Message>
                    새가족 여러분을 새가족학교로 초대합니다!<br/>
                    새가족 여러분만을 위한 새가족교육은 총 7주 동안 진행이 됩니다.<br/>
                    이 과정을 마치시면 퀸즈장로교회의 정식 등록교인이 됩니다.
                </Message>
                <Grid fluid>
                    <Row center="xs">
                        <Col xs={12} lg={1}>
                            <Circle>
                                <FaUser fontSize="2rem"></FaUser>
                            </Circle>
                        </Col>
                        <Hidden mdUp>
                            <Col>
                                <ProcessText style={{fontWeight: "bold", paddingTop: "1rem"}}>교회방문</ProcessText>
                                <ProcessText>교회로비에서 <br/> 안내받기</ProcessText>
                                <MoreIconMobile></MoreIconMobile>
                                <CircleIcon></CircleIcon>
                                <ProcessText style={{fontWeight: "bold"}}>새가족 교육</ProcessText>
                                <ProcessText>1-7 교육참여 <br/> 매주화요일 <br/> 친교실</ProcessText>
                                <MoreIconMobile></MoreIconMobile>
                                <CircleIcon></CircleIcon>
                            </Col>
                        </Hidden>
                        <Hidden smDown>
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
                        </Hidden>
                        <Col xs={12} lg={1}>
                            <Circle>
                                <FaUsers fontSize="2.5rem"></FaUsers>
                            </Circle>
                        </Col>
                        <Hidden mdUp>
                            <Col>
                                <ProcessText style={{fontWeight: "bold", paddingTop: "1rem"}}>공동체생활</ProcessText>
                                <ProcessText style={{marginBottom: "2rem"}}>퀸즈장로교회 등록 <br/> 교인으로 신앙생활</ProcessText>
                                <Button mobile style={{backgroundColor: "rgba(112,112,112,0.78)", margin: "1rem"}}>
                                    새가족FAQ
                                </Button>
                            </Col>
                        </Hidden>
                    </Row>
                </Grid>
                <Hidden smDown>
                    <Grid fluid>
                        <Row center="xs" style={{marginTop: "1rem"}}>
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
                </Hidden>
            </MyPaper>
            <Hidden smDown>
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
            </Hidden>
        </div>
    );
}

export default NewComerRegister;