import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Text } from '../components/style';

const DateBox = styled.div`
    background-color: ${props => props.backgroundColor};
    margin: 0.5rem 0;
    border-radius: 0.5rem;
    padding: 0.5rem 0;
`

function DateTitle(props) {
    return (
        <Grid fluid style={{padding: "0"}}>
            <Row>
                <Col xs={4}>
                    <DateBox backgroundColor={props.backgroundColor}>
                        <Text center fontSize="1.3rem">{props.year}</Text>
                        <Text center fontSize="2.3rem">{props.date}</Text>
                    </DateBox>
                </Col>
                <Col xs={8} style={{position: "relative", marginTop: "0.5rem"}}>
                    <Text fontSize="1.3rem">
                    {props.title}
                    </Text>
                    <Text fontSize="0.8rem" style={{position: "absolute", bottom: "1rem"}}>
                    {props.word}
                    </Text>
                </Col>
            </Row>
        </Grid>
    );
}

export default DateTitle