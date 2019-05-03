import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Wrapper = styled(Row)`
    background: ${props => props.background};
    padding: 2rem 0;
`

const MyLeftArrow = styled(FaChevronLeft)`
    font-size: 3rem !important;
    color: rgba(223, 172, 68, 0.8);
    float: right;
`

const MyRightArrow = styled(FaChevronRight)`
    font-size: 3rem !important;
    color: rgba(223, 172, 68, 0.8);
    float: left;
`

const Image = styled.div`
    height: 0;
    padding-top: 56.25%;
    display: block;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

function Slider(props) {
  const gridItems = props.items ? props.items.map((item, i) =>
    <Col key={i} md={4} style={{padding: 0}}>
        <Image image={item} alt={i}></Image>
    </Col>
  ) : <div></div>;

  return (
        <Wrapper center="xs" middle="xs" background={props.background}>
            <Col md={1}>
                <MyLeftArrow></MyLeftArrow>
            </Col>
            <Col md={10}>
                <Row>
                    {gridItems}
                </Row>
            </Col>
            <Col md={1}>
                <MyRightArrow></MyRightArrow>
            </Col>
        </Wrapper>
  );
}

export default Slider;