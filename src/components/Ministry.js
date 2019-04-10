import React from 'react';
import { Title, Description, Button } from './style';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const Wrapper = styled.div`
    background-color: #E1B355;
    padding: 1rem 0;
`

const CardTitle = styled(Typography)`
    color: #FFFFFF !important;
    font-weight: bold !important;
`

function Ministry(props) {
    return (
        <div>
            <Title variant="h2" align="center" style={{marginTop: "3rem"}}>사역안내</Title>
            <Description variant="title" align="center" style={{marginTop: "3rem"}}>
                사역에 대한 설명과 어떠한 사역을 하고 있는지를 간략하게 설명할 문구가 필요합니다.
            </Description>
            <Grid container spacing={40} justify="center" style={{marginTop: "3rem"}}>
                <Grid item>
                    <Paper>
                        <img src="/img/elder-group.png" alt="elder group"></img>
                        <Wrapper>
                            <CardTitle variant="h5" align="center">장년선교회</CardTitle>
                        </Wrapper>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper>
                        <img src="/img/Gods-will.png" alt="God's Will"></img>
                        <Wrapper>
                            <CardTitle variant="h5" align="center">갓즈윌 선교회</CardTitle>
                        </Wrapper>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper>
                        <img src="/img/young-adult.png" alt="Young Adult"></img>
                        <Wrapper>
                            <CardTitle variant="h5" align="center">청년선교회</CardTitle>
                        </Wrapper>
                    </Paper>
                </Grid>
            </Grid>
            <div style={{display: "flex", justifyContent: "center", margin: "3rem 0"}}>
                <Button style={{backgroundColor: "rgba(112, 112, 112, 0.78)"}}>사역 참여하기</Button> 
            </div>
        </div>
    );
}

export default Ministry;