import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { SubHeader } from './style'; 

const DateBox = styled.div`
    background-color: #F0D7A4;
    margin: 0 1rem 1rem 1rem;
    border-radius: 0.5rem;
    padding: 0.5rem 0;
`

function DateTitle(props) {
    return (
        <Grid container>
            <Grid item xs={4}>
            <DateBox>
                <SubHeader variant="h6" align="center" style={{fontWeight: "bold"}}>{props.year}</SubHeader>
                <SubHeader align="center" style={{fontSize: "2.3rem", fontWeight: "bold"}}>{props.date}</SubHeader>
            </DateBox>
            </Grid>
            <Grid item xs={8} style={{position: "relative"}}>
                <SubHeader style={{fontSize: "1.3rem", fontWeight: "bold"}}>
                {props.title}
                </SubHeader>
                <SubHeader style={{position: "absolute", bottom: "1rem"}}>
                {props.word}
                </SubHeader>
            </Grid>
        </Grid>
    );
}

export default DateTitle