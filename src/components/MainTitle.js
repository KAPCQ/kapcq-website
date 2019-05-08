import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import './all.sass'

const Image = styled.img`
    width: 100%;
    max-width: 1000px;
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
        <Grid fluid>
            <Row center="xs" middle="xs" style={{height: "100vh"}}>
                <Col md={6}>
                {props.images ? <Image 
                    className={showImage ? "fadeIn" : "fadeOut"} 
                    src={props.images[imgIndex]} alt=""></Image> : <div></div>} 
                </Col>
            </Row>
        </Grid>
    )
}

export default MainTitle;