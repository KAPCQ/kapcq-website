import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

const Wrapper = styled(Grid)`
    padding: 1rem;
    background-color: #fff;
`

const Title = styled(Typography)`
    position: absolute;
    bottom: 3rem;
    left: 2rem;
    color: #fff !important;
    font-weight: bold !important;
`

const Image = styled.img`
    width: 100%;
`

function Event(props) {
    const events = props.events.map((event, i) =>
        <Grid key={i} item md={4} style={{position: "relative"}}>
            <Image src={event.src} alt={event.alt}></Image>
            <Title variant="h4">{event.title}</Title>
        </Grid>
    );

    return (
        <Wrapper container spacing={16} style={{padding: "1rem", backgroundColor: "#fff"}}>
            {events}
            <Grid item xs={11}>
                <Typography align="right">더보기...</Typography>
            </Grid>
        </Wrapper>
    );
}

export default Event;