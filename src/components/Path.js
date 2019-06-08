import React from 'react';
import { Title, UnderLine, Header, Description } from './style';
import { Grid, Row, Col } from 'react-flexbox-grid'
import Hidden from '@material-ui/core/Hidden'
import { FaRoute } from 'react-icons/fa';

function Path(props) {
    return (
        <div>
            <Hidden smDown>
                <Title style={{marginTop: "3rem"}}>
                    찾아오시는 길 <FaRoute style={{color: "#E1B355"}}></FaRoute>
                </Title>
                <UnderLine style={{color: "#E1B355"}}>- - - -</UnderLine>
            </Hidden>
            <Hidden mdUp>
                <Title mobile style={{marginTop: "3rem"}}>
                    찾아오시는 길 <FaRoute style={{color: "#E1B355"}}></FaRoute>
                </Title>
                <UnderLine style={{color: "#E1B355"}}>----</UnderLine>
            </Hidden>
            <Grid fluid style={{marginBottom: "4rem"}}>
                <Row start="xs" center="lg">
                    <Col md={6}>
                        <Header style={{padding: "2rem 0 1rem 0"}}>대중교통 이용시</Header>
                        <Description>
                            지하철 7호선 플러싱 메인역 도보 11분 <br/>
                            버스 Q12 Q26 Q65 Sanford Av/Bowne St 도보 2분<br/>
                        </Description>
                    </Col>
                    <Col md={6}>
                        <Header style={{padding: "2rem 0 1rem 0"}}>승용차 이용시</Header>
                        <Description>
                            월컴파킹장에 주차하신 후 셔틀버스를 이용해 주시기 바랍니다. <br/>
                            장애우 차량이거나 장애우를 동승한 차량 중 장애인 주차 가능 등록증이 있는 차량은 교회 주차장에 우선 주차 하실 수 있도록 안내해 드립니다.
                            하단의 주차장 버튼을 클릭하시면 교회 주차장과 주변 주차 가능 공간을 안내해드립니다.
                        </Description>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default Path;