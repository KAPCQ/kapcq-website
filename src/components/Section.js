import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Wrapper = styled(Grid)`
    flex-grow: 1;
    background-image: url("https://images.unsplash.com/photo-1545321905-1d5d7f67faa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding: 2rem;
`

const MyText = styled(Typography)`
    padding: 2rem
`

export default function Section(props) {

    return (
        <Wrapper container spacing={16} justify="center">
            <Grid item md={8}>
                <MyText variant="display2" align="center">2019년 1월 14일(월) 가정예배</MyText>
                <Typography variant="title" align="center">
                    사도신경 | 사도행전 7:17-43 찬송가 436장
                </Typography>
                <MyText variant="headline" align="center">
                    스데반은 하나님의 존재성을 예루살렘 성전에 가두어 버린 이스라엘 종교 지도자 들을 비판합니다.<br/>
                    그곳에 율법이란 이름으로 종교적 행위는 번지르르하게 행해지 지만 하나님을 ...
                </MyText>
                <MyText align="center">
                    <Button variant="contained" color="primary" size="large">바로가기</Button>
                </MyText>
            </Grid>
        </Wrapper>
    );
}