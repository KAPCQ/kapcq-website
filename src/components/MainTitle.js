import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'
import './all.sass'

const Wrapper = styled(Grid)`
    width: 100vw;
    height: 100vh;
`

function MainTitle(props) {

    const [imgIndex, setIndex] = React.useState(0);
    const [showImage, setOpen] = React.useState(true);

    setTimeout(() => {
        if (imgIndex >= props.images.length - 1) {
            setIndex(0);
        } else {
            setIndex(imgIndex + 1);
        }
    }, 6000);

    setTimeout(() => {
        setOpen(!showImage);
    }, 3000);

    return (
        <Wrapper container justify="center" alignItems="center">
            <Grid item>
                <img className={showImage ? "fadeIn" : "fadeOut"} src={props.images[imgIndex]} alt=""></img>
            </Grid>
        </Wrapper>
    )
}

export default MainTitle