import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FaUser, FaUsers } from 'react-icons/fa';
import More from '@material-ui/icons/MoreHoriz'

const MyPaper = styled(Paper)`
    margin: 3rem 0 2rem 0;
    padding-bottom: 2.5rem;
`

const Title = styled(Typography)`
    padding-top: 2rem;
    color: #3D3D3D !important;
    font-weight: bold !important;
`

const UnderLine = styled.div`
    margin: auto;
    width: 5rem;
    font-size: 2rem;
    margin-top: -1rem;
    color: #65ACB6;
`

const Button = styled.div`
    width: 8rem;
    padding: 0.2rem 0;
    color: #fff;
    border-radius: 0.2rem;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
`

const Circle = styled.div`
    background-color: #439FB2;
    border-radius: 50%;
    margin: auto;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: #fff;
`

const ProcessText = styled(Typography)`
    padding: 0.1rem 0;
    color: #707070 !important;
    font-size: 1rem !important;
`

const MoreIcon = styled(More)`
    font-size: 4rem !important;
    width: 100% !important;
    color: #65ACB6;
`


function NewComerRegister(props) {
    return (
        <div>
            <MyPaper>
            <Title variant="h2" align="center">새가족 등록안내</Title>
            <UnderLine>- - - -</UnderLine>
            <Typography variant="title" align="center" style={{color: "#707070", padding: "1rem 0 3rem 0"}}>
                새가족 여러분을 새가족학교로 초대합니다!<br/>
                새가족 여러분만을 위한 새가족교육은 총 7주 동안 진행이 됩니다.<br/>
                이 과정을 마치시면 퀸즈장로교회의 정식 등록교인이 됩니다.
            </Typography>
            <Grid container spacing={16} justify="center">
                <Grid item sm={1}>
                    <Circle>
                        <FaUser fontSize="2rem"></FaUser>
                    </Circle>
                </Grid>
                <Grid item sm={1}>
                    <MoreIcon></MoreIcon>
                </Grid>
                <Grid item sm={1}>
                    <MoreIcon></MoreIcon>
                </Grid>
                <Grid item sm={1}>
                    <MoreIcon></MoreIcon>
                </Grid>
                <Grid item sm={1}>
                    <MoreIcon></MoreIcon>
                </Grid>
                <Grid item sm={1}>
                    <MoreIcon></MoreIcon>
                </Grid>
                <Grid item sm={1}>
                    <MoreIcon></MoreIcon>
                </Grid>
                <Grid item sm={1}>
                    <MoreIcon></MoreIcon>
                </Grid>
                <Grid item sm={1}>
                    <Circle>
                        <FaUsers fontSize="2.5rem"></FaUsers>
                    </Circle>
                </Grid>
            </Grid>
            <Grid container spacing={16} justify="center">
                <Grid item sm={1}>
                    <ProcessText align="center" style={{fontWeight: "bold"}}>교회방문</ProcessText>
                    <ProcessText align="center">교회로비에서 안내받기</ProcessText>
                </Grid>
                <Grid item sm={1}>
                    <ProcessText align="center" style={{fontWeight: "bold"}}>새가족 교육</ProcessText>
                    <ProcessText align="center">1-7 교육참여 매주 화요일 친교실</ProcessText>
                </Grid>
                <Grid item sm={1}>
                    <ProcessText align="center" style={{fontWeight: "bold"}}>새가족 교육</ProcessText>
                    <ProcessText align="center">1-7 교육참여 매주 화요일 친교실</ProcessText>
                </Grid>
                <Grid item sm={1}>
                    <ProcessText align="center" style={{fontWeight: "bold"}}>새가족 교육</ProcessText>
                    <ProcessText align="center">1-7 교육참여 매주 화요일 친교실</ProcessText>
                </Grid>
                <Grid item sm={1}>
                    <ProcessText align="center" style={{fontWeight: "bold"}}>새가족 교육</ProcessText>
                    <ProcessText align="center">1-7 교육참여 매주 화요일 친교실</ProcessText>
                </Grid>
                <Grid item sm={1}>
                    <ProcessText align="center" style={{fontWeight: "bold"}}>새가족 교육</ProcessText>
                    <ProcessText align="center">1-7 교육참여 매주 화요일 친교실</ProcessText>    
                </Grid>
                <Grid item sm={1}>                    
                    <ProcessText align="center" style={{fontWeight: "bold"}}>새가족 교육</ProcessText>
                    <ProcessText align="center">1-7 교육참여 매주 화요일 친교실</ProcessText>
                </Grid>
                <Grid item sm={1}>                    
                    <ProcessText align="center" style={{fontWeight: "bold"}}>새가족 교육</ProcessText>
                    <ProcessText align="center">1-7 교육참여 매주 화요일 친교실</ProcessText>
                </Grid>
                <Grid item sm={1}>
                    <ProcessText align="center" style={{fontWeight: "bold"}}>공동체 생활</ProcessText>
                    <ProcessText align="center">퀸즈장로교회 등록 교인으로 신앙생활</ProcessText>
                </Grid>
            </Grid>
            </MyPaper>
            <Grid container spacing={16} justify="center" style={{padding: "1rem 0 5rem 0"}}>
                <Grid item>
                    <Button style={{backgroundColor: "#DFAC44"}}>
                        등록하기
                    </Button>
                </Grid>
                <Grid item>
                    <Button style={{backgroundColor: "rgba(112,112,112,0.78)"}}>
                    새가족FAQ
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default NewComerRegister;