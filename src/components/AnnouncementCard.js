import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid'

const Paper = styled.div`
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
`

const MyPaper = styled(Paper)`
    background: #FFFFFF;
    padding: 0 1.5rem 1.5rem 1.5rem;
    border-radius: 4px;
`

const Flag = styled(Paper)`
    float: right;
    width: 4rem;
    text-align: center;
    font-size: 0.8rem;
    padding: 0.7rem 0;
    background-color: #e6ca90 !important;
    color: #fff;
`

const Title = styled.h6`
    font-size: 1.3rem;
    font-weight: bold;
    color: #666666 !important;
`

const Body = styled.p`
    color: #95989a !important;
    padding: 1rem 0;
    font-size: 0.8em;
`

function AnnouncementCard(props) {
    return (
        <MyPaper elevation={1} style={{margin: "1rem 0"}}>
            <Flag elevation={1} square={true}>진행중</Flag>
            <Grid>
                <Row style={{paddingTop: "3rem"}}>
                    <Col md={5}>
                        <Title>
                            제32회 사순절 서원 새벽기도회 <br/>
                            3월 11일(월) - 4월 20일(토)
                        </Title>
                    </Col>
                    <Col md={7}>
                        <Body>
                            기대하라! 하나님의 위대하심과 놀라운 회복과...<br/>
                            기대하라! 하나님의 위대하심과 놀라운 회복과...
                        </Body>
                    </Col>
                </Row>
            </Grid>
        </MyPaper>
  );
}

export default AnnouncementCard;