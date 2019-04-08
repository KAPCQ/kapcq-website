import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { FaLaughBeam, FaDoorOpen, FaUserPlus, FaHandsHelping } from 'react-icons/fa';
import ArrowForward from '@material-ui/icons/ArrowForward'

const Wrapper = styled(Grid)`
    margin: 3rem 0;
`

const Circle = styled.div`
    background-color: #439FB2;
    border-radius: 50%;
    width: 12rem;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: #fff;
`

const Title = styled(Typography)`
    margin-top: 1rem !important;
    font-weight: bold !important;
`

function WelcomeProcess(props) {
    return (
        <Wrapper container>
            <Grid item md={3}>
                <Grid container>
                    <Grid item md={8}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Circle>
                            <FaLaughBeam></FaLaughBeam>
                        </Circle>
                    </div>
                    <Title variant="h5" align="center" style={{color: "#606060"}}>환영합니다</Title>
                    <Typography variant="title" align="center" style={{color: '#707070', paddingTop: '1rem'}}>
                        퀸즈장로교회에 소중한
                        발걸음을 해주신 새가족을
                        위한 정보를 한눈에!
                    </Typography>
                    </Grid>
                    <Grid item md={4} style={{display: "flex", justifyContent: "center"}}>
                        <ArrowForward style={{color: "#66ADB8", height: "12rem", fontSize: "2.5rem"}}></ArrowForward>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={3}>
                <Grid container>
                    <Grid item md={8}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Circle>
                            <FaDoorOpen></FaDoorOpen>
                        </Circle>
                    </div>
                    <Title variant="h5" align="center" style={{color: "#606060"}}>교회방문하기</Title>
                    <Typography variant="title" align="center" style={{color: '#707070', paddingTop: '1rem'}}>
                        퀸즈장로교회에 오시는 길을 안내합니다.
                    </Typography>
                    </Grid>
                    <Grid item md={4} style={{display: "flex", justifyContent: "center"}}>
                        <ArrowForward style={{color: "#66ADB8", height: "12rem", fontSize: "2.5rem"}}></ArrowForward>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={3}>
                <Grid container>
                    <Grid item md={8}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Circle>
                            <FaUserPlus></FaUserPlus>
                        </Circle>
                    </div>
                    <Title variant="h5" align="center" style={{color: "#606060"}}>새가족 등록하기</Title>
                    <Typography variant="title" align="center" style={{color: '#707070', paddingTop: '1rem'}}>
                        퀸즈장로교회에 교인이 되기 위한 첫 걸음, 새가족 등록에 대한 모든 것
                    </Typography>
                    </Grid>
                    <Grid item md={4} style={{display: "flex", justifyContent: "center"}}>
                        <ArrowForward style={{color: "#66ADB8", height: "12rem", fontSize: "2.5rem"}}></ArrowForward>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={3}>
                <Grid container>
                    <Grid item md={8}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <Circle>
                            <FaHandsHelping></FaHandsHelping>
                        </Circle>
                    </div>
                    <Title variant="h5" align="center" style={{color: "#606060"}}>사역 참여하기</Title>
                    <Typography variant="title" align="center" style={{color: '#707070', paddingTop: '1rem'}}>
                        퀸즈장로교회에 교인이 되었다면 사역에 참여할 준비가 되었습니다.
                    </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Wrapper>
    );
}

export default WelcomeProcess;