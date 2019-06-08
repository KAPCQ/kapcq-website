import React from 'react';
import { Title, UnderLine, Header, Description, Button } from './style';
import { Grid, Row, Col } from 'react-flexbox-grid'
import Hidden from '@material-ui/core/Hidden'
import { FaChurch } from 'react-icons/fa';
import styled from 'styled-components'

const ChapelImage = styled.div`
    background-image: url("/img/chapel.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 15rem;
`

const ButtonDiv = styled.div`
    margin: 0.5rem;
    padding: 0.25rem;
    border-radius: 0.2rem;
`

function Facility(props) {
    return (
        <div>
            <Hidden smDown>
                <Title style={{marginTop: "3rem"}}>
                    교회시설 안내 <FaChurch style={{color: "#E1B355"}}></FaChurch>
                </Title>
                <UnderLine style={{color: "#E1B355", marginBottom: "1rem"}}>- - - -</UnderLine>
            </Hidden>
            <Hidden mdUp>
                <Title mobile style={{marginTop: "2rem"}}>
                    교회시설 안내 <FaChurch style={{color: "#E1B355"}}></FaChurch>
                </Title>
                <UnderLine style={{color: "#E1B355"}}>----</UnderLine>
            </Hidden>
            <Grid fluid style={{marginBottom: "2rem"}}>
                <Row start="xs" center="lg">
                    <Col md={8} lg={6}>
                        <Hidden smDown>
                            <Header style={{padding: "2rem 0 1rem 0"}}>
                                퀸즈장로교회에는 성도님들을 위한 친교실, <br/> 
                                도서관등의 다양한 편의시설이 있습니다.
                            </Header>
                        </Hidden>
                        <Hidden mdUp>
                            <Header mobile>
                                퀸즈장로교회에는 성도님들을 위한 친교실, <br/> 
                                도서관등의 다양한 편의시설이 있습니다.
                            </Header>
                        </Hidden>
                        <Description style={{marginTop: "1rem"}}>
                            새가족 여러분도 교회친교실에서 커피 한잔하시면서 성도간에 귀중한 교제를 나누어 보세요.
                        </Description>
                    </Col>
                    <Hidden smDown>
                        <Col md={6} style={{padding: "1rem"}}>
                            <img src="/img/chapel.png" alt="chapel"></img>
                        </Col>
                        <Col md={6}>
                            <div style={{marginTop: "2rem"}}>
                                <Button style={{backgroundColor: "rgba(112, 112, 112, 0.78)"}}>퀸장 내부도 보기</Button> 
                            </div>
                        </Col>
                        <Col md={6}>
                            <div style={{marginTop: "2rem"}}>
                                <Button style={{backgroundColor: "#DFAC44", marginRight: "1rem"}}>주차장 안내</Button>
                                <Button style={{backgroundColor: "#DFAC44"}}>교회버스 운행</Button> 
                            </div>
                        </Col>
                    </Hidden>
                </Row>
            </Grid>
            <Hidden mdUp>
                <Grid fluid style={{padding: "0"}}>
                    <Row center="xs" style={{marginBottom: "2rem"}}>
                        <Col>
                            <ChapelImage/>
                        </Col>
                        <Col xs={7} style={{marginTop: "1rem"}}>
                            <ButtonDiv style={{backgroundColor: "#DFAC44"}}>
                                <Button mobile>주차장 안내</Button>
                            </ButtonDiv>
                            <ButtonDiv style={{backgroundColor: "#DFAC44"}}>
                                <Button mobile>교회버스 운행</Button>
                            </ButtonDiv>
                            <ButtonDiv style={{backgroundColor: "rgba(112, 112, 112, 0.78)"}}>
                                <Button mobile>퀸장 내부도 보기</Button>
                            </ButtonDiv>
                        </Col>
                    </Row>
                </Grid>
            </Hidden>
        </div>
    );
}

export default Facility;