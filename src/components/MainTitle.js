import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;

    h2 {
        text-align: center;
        padding-top: 40vh;
        color: white;
    }
`

function MainTitle(props) {
    return (
        <Wrapper>
            <h2 className="has-text-weight-bold is-size-1">{props.text}</h2>
        </Wrapper>
    )
}

export default MainTitle