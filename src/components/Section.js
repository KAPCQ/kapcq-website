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
                                            [월]_사도행전 16:6-10
                                        </Word>
                                    </Hidden>
                                    <Hidden mdUp>
                                        <Word fontSize="1.5rem">
                                            [월]_사도행전 16:6-10
                                        </Word>
                                    </Hidden>
                                </Col>
                                <Col lg={7}>
                                    <Hidden smDown>
                                        <Detail fontSize="1.2rem">
                                            사도신경 / 찬송가382장 / 하이델베르크 요리문답
                                        </Detail>
                                    </Hidden>
                                    <Hidden mdUp>
                                        <Detail fontSize="0.8rem">
                                            사도신경 / 찬송가382장 / 하이델베르크 요리문답
                                        </Detail>
                                    </Hidden>
                                </Col>
                            </Row>
                            <MyText>
                                때론 하나님께서 우리 계획을 막으시는 것은 그분의 계획이 있기 때문입니다. 아시아에서 말씀을 전하려는 바울의 계획을 성령이 막으시고,
                                항구 도시 드로아에서 하나님의 뜻을 알려 주십니다. 만일 바울이 자신의 계획을 계속 고집했다면,
                                건너와서 도우라는 마게도냐 사람의 환상을 보고도 무시했을 것입니다. 그러나 바울은 마게도냐로 건너가 유럽 선교에
                                힘쓰는 것이 하나님의 뜻임을 인정하고 부르심에 순종합니다. 하나님이 원하지 않으시면, 내가 아무리 좋은 계획을 세웠어도
                                과감히 포기할 수 있어야 합니다. 생각하지 못한 곳, 예상하지 못한 일에 부르시더라도 즉각 순종하는 우리가 됩시다.
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