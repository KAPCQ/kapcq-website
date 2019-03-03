import React from 'react';
import styled from 'styled-components';

const Video = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    filter: opacity(80%);
    z-index: -99;
`

// const imgArray = ['/img/meeting-space.png', '/img/tutorials.png']

function BackgroundVideo(props) {
    const videoRef = React.createRef();

    return (
        <div>
            <Video ref={videoRef} 
                autoPlay loop muted 
            >
            <source src={props.src} type="video/mp4"/>
            Your browser does not support the video tag.
            </Video>
        </div>
    )
}

export default BackgroundVideo