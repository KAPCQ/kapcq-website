import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Wrapper = styled(Grid)`
    flex-grow: 1;
    padding: 2rem;
`

const MyText = styled(Typography)`
    padding: 2rem;
`

export default function Section(props) {
    return (
        <Wrapper container>
            <Grid item md={1}></Grid>
            <Grid item xs={11}>
                <Typography variant="display3">가정예배 ()</Typography>
            </Grid>
            <Grid item md={2}></Grid>
            <Grid item xs={10}>
                <Paper>
                    <MyText variant="h4">
                        [월]_사도행전 16:6-10
                    </MyText>
                    <MyText variant="h6">
                         사도신경/찬송가382장/하이델베르크 요리문답/사도행전 16:6-10
                    </MyText>
                    <MyText variant="headline">
                        스데반은 하나님의 존재성을 예루살렘 성전에 가두어 버린 이스라엘 종교 지도자 들을 비판합니다.<br/>
                        그곳에 율법이란 이름으로 종교적 행위는 번지르르하게 행해지 지만 하나님을 ...
                    </MyText>
                    <MyText>
                        <Button variant="contained" color="primary" size="large">바로가기</Button>
                    </MyText>
                </Paper>
            </Grid>
        </Wrapper>
    );
}