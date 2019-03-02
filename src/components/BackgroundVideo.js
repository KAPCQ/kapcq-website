import React from 'react';
import styled from 'styled-components';
import MainSlider from './MainSlider';
import MainTitle from '../components/MainTitle'

const Video = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    filter: opacity(80%);
    z-index: -99;
`

const textArray = ['Welcome to KAPCQ', '퀸즈장로교회에 오신 것을 환영합니다', '欢迎来到KAPCQ', 'Добро пожаловать в KAPCQ'];

function BackgroundVideo(props) {
    const videoRef = React.createRef();
    const [showVideo, setOpen] = React.useState(true);
    const [textIndex, setIndex] = React.useState(0);

    function handleTimeUpdate() {
        let currentTime = Math.floor(videoRef.current.currentTime);

        if (currentTime > 15) {
            setOpen(false);
        }
    }

    setTimeout(() => {
        if (textIndex >= textArray.length - 1) {
            setIndex(0);
        } else {
            setIndex(textIndex + 1);
        }
    }, 4000);

    return (
        <div>
            {
                showVideo ? 
                <div>
                    <Video ref={videoRef} autoPlay loop muted onTimeUpdate={handleTimeUpdate}>
                    <source src={props.src} type="video/mp4"/>
                    Your browser does not support the video tag.
                    </Video> <MainTitle text={textArray[textIndex]}></MainTitle> 
                </div> : <MainSlider></MainSlider> 
            }
        </div>
    )
}

export default BackgroundVideo