import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Group from '@material-ui/icons/Group';

const Wrapper = styled(Grid)`
    flex-grow: 1;
    padding-top: 2rem;
`

const MyText = styled(Typography)`
    padding-top: 2rem;
    color: #fff !important;
`

const Title = styled(Typography)`
    float: left;
    font-weight: bold !important;
    color: #3d3d3d !important;
`

const GroupIcon = styled(Group)`
    font-size: 5rem !important;
    height: 0.9em !important;
    color: #e6ca90;
`

const Board = styled.div`
    padding: 2rem;
    background-color: rgba(223, 172, 68, 0.9);
    border-top-left-radius: 1rem;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

const Word = styled(Typography)`
    font-weight: bold !important;
    color: #fff !important;
`

export default function Section(props) {
    return (
        <Wrapper container alignItems="center">
            <Grid item md={1}></Grid>
            <Grid item xs={11}>
                <Title variant="h2" inline={true}>가정예배</Title>
                <GroupIcon></GroupIcon>
            </Grid>
            <Grid item md={2}></Grid>
            <Grid item xs={10}>
                <Board>
                    <Grid item xs={11}>
                        <Header>
                            <Word variant="h4" inline={true}>
                                [월]_사도행전 16:6-10
                            </Word>
                            <Typography variant="h6" inline={true} style={{paddingTop: "0.5rem", color: "#fff"}}>
                                사도신경/찬송가382장/하이델베르크 요리문답/사도행전 16:6-10
                            </Typography>
                        </Header>
                        <MyText variant="p">
                            때론 하나님께서 우리 계획을 막으시는 것은 그분의 계획이 있기 때문입니다. 아시아에서 말씀을 전하려는 바울의 계획을 성령이 막으시고,
                            항구 도시 드로아에서 하나님의 뜻을 알려 주십니다. 만일 바울이 자신의 계획을 계속 고집했다면,
                            건너와서 도우라는 마게도냐 사람의 환상을 보고도 무시했을 것입니다. 그러나 바울은 마게도냐로 건너가 유럽 선교에
                            힘쓰는 것이 하나님의 뜻임을 인정하고 부르심에 순종합니다. 하나님이 원하지 않으시면, 내가 아무리 좋은 계획을 세웠어도
                            과감히 포기할 수 있어야 합니다. 생각하지 못한 곳, 예상하지 못한 일에 부르시더라도 즉각 순종하는 우리가 됩시다.
                            <br/><br/>
                            합심기도 / 주기도문
                        </MyText>
                        <Typography align="right" style={{color: "#fff"}}>
                            더보기...
                        </Typography>
                    </Grid>
                </Board>
            </Grid>
        </Wrapper>
    );
}