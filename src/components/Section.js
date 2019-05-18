import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FaUserFriends } from 'react-icons/fa';
import Hidden from '@material-ui/core/Hidden';
import { MobileTitle, UnderLine } from './style';

const Wrapper = styled(Grid)`
    background-color: #eeeeee;
`

const Title = styled.h2`
    float: left;
    font-weight: bold !important;
    font-size: 3.2rem;
    color: #3d3d3d !important;
`

const MyText = styled.p`
    padding-top: 2rem;
    color: #fff !important;
    font-size: 1rem;
    text-align: left;
    @media only screen and (min-width: 768px) {
        font-size: 1.2rem;
    }
`

const GroupIcon = styled(FaUserFriends)`
    font-size: 5rem !important;
    padding: 0.5rem !important;
    color: #e6ca90;
`

const MobileGroupIcon = styled(FaUserFriends)`
    font-size: 2rem;
    padding-top: 1rem;
    color: #e6ca90;
`

const Board = styled.div`
    padding: 1rem;
    background-color: rgba(223, 172, 68, 0.9);
    border-top-left-radius: 1rem;
    @media only screen and (min-width: 768px) {
        padding: 2rem;
    }
`

const Word = styled.h4`
    font-size: ${props => props.fontSize};
    font-weight: bold !important;
    color: #fff !important;
    text-align: left;
`

const Detail = styled.h6`
    text-align:right;
    font-size: ${props => props.fontSize};
    font-weight: bold;
    padding-top: 0.5rem;
    color: #fff;
`

const More = styled.p`
    text-align: right;
    color: #ffffff;
`

export default function Section(props) {
    let data = {
        title: '',
        reference: '',
        content: ''
    };

    if (props.data !== undefined) {
        data = props.data
    }

    return (
        <Wrapper fluid style={{padding: "2rem 0 0 0"}}>
            <Row center="xs" start="md">
                <Col md={1}></Col>
                <Col md={11}>
                    <Hidden mdUp>
                        <MobileTitle>
                            가정예배 <MobileGroupIcon></MobileGroupIcon>
                        </MobileTitle>
                        <UnderLine style={{color: "#E1B355"}}>------</UnderLine>
                    </Hidden>
                    <Hidden smDown>
                        <Title>가정예배</Title>
                        <GroupIcon></GroupIcon>
                    </Hidden>
                </Col>
                <Col xs={1} md={2}></Col>
                <Col xs={11} md={10}>
                    <Board>
                        <Col xs={12} md={11}>
                            <Row>
                                <Col lg={5}>
                                    <Hidden smDown>
                                        <Word fontSize="2rem">
                                            {data.title}
                                        </Word>
                                    </Hidden>
                                    <Hidden mdUp>
                                        <Word fontSize="1.5rem">
                                            {data.title}
                                        </Word>
                                    </Hidden>
                                </Col>
                                <Col lg={7}>
                                    <Hidden smDown>
                                        <Detail fontSize="1.2rem">
                                            {data.reference}
                                        </Detail>
                                    </Hidden>
                                    <Hidden mdUp>
                                        <Detail fontSize="0.8rem">
                                            {data.reference}
                                        </Detail>
                                    </Hidden>
                                </Col>
                            </Row>
                            <MyText>
                                {data.content}
                                <br/><br/>
                                합심기도 / 주기도문
                            </MyText>
                            <More>
                                더보기...
                            </More>
                        </Col>
                    </Board>
                </Col>
            </Row>
        </Wrapper>
    );
}