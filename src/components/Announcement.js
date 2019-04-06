import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LeftArrow from '@material-ui/icons/KeyboardArrowLeft'
import RightArrow from '@material-ui/icons/KeyboardArrowRight'

const Wrapper = styled(Grid)`
    background-color: #fff;
    margin-top: 2rem !important;
    padding: 2rem 0;
`

const MyPaper = styled(Paper)`
    padding: 0 1.5rem 1.5rem 1.5rem;
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

const MyLeftArrow = styled(LeftArrow)`
    font-size: 7rem !important;
    color: rgba(223, 172, 68, 0.8);
    float: right;
`

const MyRightArrow = styled(RightArrow)`
    font-size: 7rem !important;
    color: rgba(223, 172, 68, 0.8);
    float: left;
`

const Title = styled(Typography)`
    font-weight: bold;
    color: #666666 !important;
`

const Body = styled(Typography)`
    color: #95989a !important;
    padding: 1rem 0;
`

function Announcement(props) {
  const gridItems = props.items.map((menu, i) =>
    <Grid item md={3}>
        <MyPaper elevation={1}>
            <Flag elevation={1} square={true}>진행중</Flag>
            <div style={{paddingTop: "3.5rem"}}>
                <Title variant="title">
                    제32회 사순절 서원 새벽기도회 <br/>
                    3월 11일(월) - 4월 20일(토)
                </Title>
                <Body component="p">
                    기대하라! 하나님의 위대하심과 놀라운 회복과...<br/>
                    기대하라! 하나님의 위대하심과 놀라운 회복과...
                </Body>
            </div>
        </MyPaper>
    </Grid>
  );

  return (
        <Wrapper container spacing={16} justify="center" alignItems="center">
            <Grid item md={1}>
                <MyLeftArrow></MyLeftArrow>
            </Grid>
            {gridItems}
            <Grid item md={1}>
                <MyRightArrow></MyRightArrow>
            </Grid>
        </Wrapper>
  );
}

export default Announcement;