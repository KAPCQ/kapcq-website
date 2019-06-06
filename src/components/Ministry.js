import React from 'react';
import { Title, Description, Button, Paper, UnderLine } from './style';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid'
import Hidden from '@material-ui/core/Hidden'

const Wrapper = styled.div`
    background-color: #E1B355;
    padding: 1rem 0;
`

const CardTitle = styled.h2`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
`

const MyPaper = styled(Paper)`
    margin: 0.5rem 1rem;
`

function Ministry(props) {
    return (
        <div>
            <Hidden smDown>
                <Title style={{marginTop: "3rem"}}>사역안내</Title>
            </Hidden>
            <Hidden mdUp>
                <Title mobile style={{marginTop: "3rem"}}>사역안내</Title>
            </Hidden>
            <UnderLine color="#65ACB6">----</UnderLine>
            <Description style={{marginTop: "1rem", textAlign:"center"}}>
                사역에 대한 설명과 어떠한 사역을 하고 있는지를 간략하게 설명할 문구가 필요합니다.
            </Description>
            <Grid fluid style={{marginTop: "3rem"}}>
                <Row center="xs">
                    <Col>
                        <MyPaper>
                            <img src="/img/elder-group.png" alt="elder group"></img>
                            <Wrapper>
                                <CardTitle>장년선교회</CardTitle>
                            </Wrapper>
                        </MyPaper>
                    </Col>
                    <Col>
                        <MyPaper>
                            <img src="/img/Gods-will.png" alt="God's Will"></img>
                            <Wrapper>
                                <CardTitle>갓즈윌 선교회</CardTitle>
                            </Wrapper>
                        </MyPaper>
                    </Col>
                    <Col>
                        <MyPaper>
                            <img src="/img/young-adult.png" alt="Young Adult"></img>
                            <Wrapper>
                                <CardTitle>청년선교회</CardTitle>
                            </Wrapper>
                        </MyPaper>
                    </Col>
                </Row>
            </Grid>
            <div style={{display: "flex", justifyContent: "center", margin: "3rem 0"}}>
                <Hidden smDown>
                    <Button style={{backgroundColor: "rgba(112, 112, 112, 0.78)"}}>사역 참여하기</Button> 
                </Hidden>
                <Hidden mdUp>
                    <Button mobile style={{backgroundColor: "rgba(112, 112, 112, 0.78)"}}>사역 참여하기</Button> 
                </Hidden>
            </div>
        </div>
    );
}

export default Ministry;