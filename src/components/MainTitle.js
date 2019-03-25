import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'
import './all.sass'
// import { Typography } from '@material-ui/core';

// const styles = {
//     wrapper: {
//         width: '100vw',
//         height: '100vh',
//         position: 'relative',
//         '&::after': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             bottom: 0,
//             right: 0,
//             zIndex: -1,
//             backgroundImage: 'url("/img/1queenjang1.png")',
//             backgroundAttachment: 'fixed',
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center center',
//             opacity: '0.7'
//         }
//     },
//     image: {
//         width: '100%',
//         maxWidth: '1000px'
//     },
// };

const Wrapper = styled(Grid)`
    width: 100vw;
    height: 100vh;
    display: block;
    position: relative;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background-image: url("/img/1queenjang1.png");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        opacity: 0.7;
    }
`

const Image = styled.img`
    max-width: 700px;
`

function MainTitle(props) {
    // const [imgIndex, setIndex] = React.useState(0);
    // const [showImage, setOpen] = React.useState(true);

    // setTimeout(() => {
    //     if (imgIndex >= props.images.length - 1) {
    //         setIndex(0);
    //     } else {
    //         setIndex(imgIndex + 1);
    //     }
    // }, 6000);

    // setTimeout(() => {
    //     setOpen(!showImage);
    // }, 3000);

    return (
        <Wrapper container justify="center" alignItems="center">
            <Grid item sm={1}></Grid>
            <Grid item sm={11}>
                {props.images ? <Image 
                    // className={showImage ? "fadeIn" : "fadeOut"} 
                    src={props.images[0]} alt=""></Image> : <div></div>} 
            </Grid>
            {/* <Grid item sm={11}>
                <Typography>말씀으로 자신과 세상을 변화시키는 교회</Typography>
            </Grid> */}
        </Wrapper>
    )
}

export default MainTitle;