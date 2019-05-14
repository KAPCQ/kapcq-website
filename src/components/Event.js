import React from 'react';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Title = styled.h4`
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    color: #fff !important;
    font-weight: bold !important;
    font-size: 1.5rem;
`

const Image = styled.img`
    width: 100%;
`

function Event(props) {
    const events = props.events.map((event, i) =>
        <Col key={i} md={4} style={{position: "relative"}}>
            <Image src={event.src} alt={event.alt}></Image>
            <Title>{event.title}</Title>
        </Col>
    );

    return (
        <Grid fluid style={{padding: "1rem", backgroundColor: "#fff"}}>
            <Row>
                {events}
            </Row>
            <Hidden smDown>
                <h4 style={{textAlign: "right"}}>더보기...</h4>
            </Hidden>
        </Grid>
    );
}

export default Event;