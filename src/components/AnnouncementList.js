import React from 'react'
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';

const Paper = styled.div`
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
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

const MyPaper = styled(Paper)`
    padding: 0 1.5rem 1.5rem 1.5rem;
    border-radius: 4px;
    position: relative;
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

function AnnouncementList(props) {
    let gridItems = props.items.map((item, i) =>
        <Col key={i} lg={4}>
            <MyPaper className={props.className}>
                <Flag>진행중</Flag>
                <div style={{paddingTop: "3.5rem", margin: "1rem 0"}}>
                    <Title>
                        {item.title}<br/>
                        {item.period}
                    </Title>
                    <Body>
                        {item.description}
                    </Body>
                </div>
            </MyPaper>
        </Col>
    );
    return (
        <Row>
            {gridItems}
        </Row>
    )
}

export default AnnouncementList;