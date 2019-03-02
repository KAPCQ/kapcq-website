import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

const Wrapper = styled(Grid)`
    flex-grow: 1;
    background: black;
    padding: 2rem;
`

const MyText = styled(Typography)`
    color: white !important;
    text-align: right;
`

function Footer() {
    return (
        <Wrapper container justify="center">
            <Grid item md={10}>
                <MyText variant="subtitle1">The Korean American Presbyterian Church of Queens</MyText>
                <MyText>143-17 Franklin Ave. Flushing, NY 11355</MyText>
                <MyText>Tel: (718) 886-4040,4340,4347 Fax: (718) 886-5555</MyText>
                <MyText>Copyright 2006-2019 KAPCQ. All Rights Reserved</MyText>
            </Grid>
        </Wrapper>
    )
}

export default Footer