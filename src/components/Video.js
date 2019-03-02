import React from 'react';
import styled from 'styled-components';

const VideoWrapper = styled.div`
    position: relative;
    padding-bottom: 56.5%; /* 16:9 */
    padding-top: 25px;
    height: 0;
    border-radius: 0.125rem;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

function Video(props) {
    return (
        <VideoWrapper>
            <iframe title="mainVideo" width="560" height="315" src={props.src} allow='autoplay' frameBorder="0" allowFullScreen></iframe>
        </VideoWrapper>
    )
}

export default Video