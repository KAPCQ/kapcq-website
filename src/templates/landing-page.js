import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  max-width: 300px !important;
`

const LandingPage = (props) => {

  return (
    <div>
      <Image className="preview-image" src={props.images[0]} alt="image1"></Image>
      Test
    </div>
  )
}

export default LandingPage
