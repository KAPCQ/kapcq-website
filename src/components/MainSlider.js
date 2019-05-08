import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const MyImageGallery = styled(ImageGallery)`

`

function MainSlider(props) {

    const images = [
        {
            original: '/img/bannerText.png',
        }
    ]

    return (
        <MyImageGallery 
            items={images} 
            showThumbnails={false}
            autoPlay={true}
            showFullscreenButton={false}
            slideDuration={500}
            slideInterval={5000}
        />
    )
}

export default MainSlider