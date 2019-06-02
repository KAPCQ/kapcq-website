import React from 'react';
import { Title, UnderLine, Header, Description, Button } from './style';
import { Grid, Row, Col } from 'react-flexbox-grid'
import { FaChurch } from 'react-icons/fa';

function Facility(props) {
    return (
        <div>
            <Title variant="h3" align="center" style={{marginTop: "3rem"}}>
                교회시설 안내 <FaChurch style={{color: "#E1B355"}}></FaChurch>
            </Title>
            <UnderLine style={{color: "#E1B355", marginBottom: "1rem"}}>- - - -</UnderLine>
            <Grid fluid style={{marginBottom: "4rem"}}>
                <Row center="xs">
                    <Col md={6} style={{padding: "1rem"}}>
                        <Header variant="h5" style={{padding: "3rem 0 1rem 0"}}>
                            퀸즈장로교회에는 성도님들을 위한 친교실, <br/> 
                            도서관등의 다양한 편의시설이 있습니다.
                        </Header>
                        <Description variant="subheading">
                            새가족 여러분도 교회친교실에서 커피 한잔하시면서 성도간에 귀중한 교제를 나누어 보세요.
                        </Description>
                    </Col>
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
                </Row>
            </Grid>
        </div>
    );
}

export default Facility;