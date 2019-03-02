import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const Container = styled.div`
    object-fit: fill;
`
 
function YoutubeVideo(props) {
    const opts = {
      width: '100%',
      height: 240,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        // autoplay: 1
      }
    };
 
    return (
        <Container>
            <YouTube
                style={{objectFit: "fill"}}
                videoId={props.id}
                opts={opts}
            />
        </Container>
    );
}


export default YoutubeVideo