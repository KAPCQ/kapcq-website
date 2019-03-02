import React from 'react';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const MyImageGallery = styled(ImageGallery)`

`

function MainSlider(props) {

    const images = [
        {
            original: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        },
        {
            original: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
        },
        {
            original: 'https://images.unsplash.com/photo-1536704382439-da99b6ccc0cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
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