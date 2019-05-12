import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Hidden from '@material-ui/core/Hidden'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { UnderLine } from './style';

const Wrapper = styled(Row)`
    background-color: #fff;
    padding: 2rem 0;
`

const Paper = styled.div`
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
`

const MyPaper = styled(Paper)`
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

const MyLeftArrow = styled(FaChevronLeft)`
    font-size: 4.5rem !important;
    color: rgba(223, 172, 68, 0.8);
    float: right;
`

const MyRightArrow = styled(FaChevronRight)`
    font-size: 4.5rem !important;
    color: rgba(223, 172, 68, 0.8);
    float: left;
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

const MainTitle = styled.h1`
    color: #3D3D3D;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
` 

function Announcement(props) {
  const gridItems = props.items ? props.items.map((menu, i) =>
    <Col key={i} lg={3}>
        <MyPaper elevation={1}>
            <Flag elevation={1} square={true}>진행중</Flag>
            <div style={{paddingTop: "3.5rem", margin: "1rem 0"}}>
                <Title>
                    제32회 사순절 서원 새벽기도회 <br/>
                    3월 11일(월) - 4월 20일(토)
                </Title>
                <Body>
                    기대하라! 하나님의 위대하심과 놀라운 회복과...<br/>
                    기대하라! 하나님의 위대하심과 놀라운 회복과...
                </Body>
            </div>
        </MyPaper>
    </Col>
  ) : <div></div>;

  return (
        <Wrapper center="xs" middle="xs">
            <Hidden mdUp>
                <Col xs={12}>
                    <MainTitle>교회소식</MainTitle>
                    <UnderLine style={{color: "#E1B355"}}>----</UnderLine>
                </Col>
            </Hidden>
            <Hidden smDown>
                <Col md={1}>
                    <MyLeftArrow></MyLeftArrow>
                </Col>
            </Hidden>
            {gridItems}
            <Hidden smDown>
                <Col md={1}>
                    <MyRightArrow></MyRightArrow>
                </Col>
            </Hidden>
        </Wrapper>
  );
}

export default Announcement;