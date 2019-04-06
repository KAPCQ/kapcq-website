import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import Video from '../components/Video'
import QuickMenu from '../components/QuickMenu'
import Announcement from '../components/Announcement'
import SimpleTabs from '../components/SimpleTabs'
import Section from '../components/Section'

const BackgroundVideo = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    filter: opacity(80%);
    z-index: -99;
`

const Wrapper = styled(Grid)`
    width: 100vw;
    height: 100vh;
    display: block;
    position: relative;
`

const LandingPageTemplate = ({
    images,
    title,
    heading,
    description,
    video,
    menuItems
  }) => (
    <div>
        <BackgroundVideo autoPlay loop muted>
            <source src="/img/new_york.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </BackgroundVideo>
        <Wrapper container alignItems="center">
            <Grid item sm={1}></Grid>
            <Grid item sm={11}>
                <Typography variant="h1" style={{color: "white"}}>
                    말씀으로 자신과 세상을 <br></br> 변화시키는 <span style={{color: "#DC9D1E"}}>교회</span>
                </Typography>
                <Typography variant="display1" style={{color: "white"}}>하나님 중심, 말씀 중심, 교회 중심</Typography>
            </Grid>
        </Wrapper>
        <Grid container justify="center" style={{paddingTop: "3rem", backgroundColor: "#EDE9DE"}}>
            <Grid item xs={12} md={6}>
                <Video src="https://www.youtube.com/embed/UEiH3ToDreU"></Video>
            </Grid>
            <Grid item xs={12} md={4}>
                <QuickMenu items={[
                    {text: '새가족안내', backgroundColor: 'rgba(243, 247, 248, 0.8)', textColor: '#3D3D3D'},
                    {text: '예배시간', backgroundColor: 'rgba(220, 157, 30, 0.4)', textColor: '#3D3D3D'},
                    {text: '금주의 주보', backgroundColor: 'rgba(208, 208, 208, 0.8)', textColor: '#3D3D3D'},
                    {text: '목양칼럼', backgroundColor: 'rgba(220, 157, 30, 0.8)', textColor: 'white'}
                    ]}></QuickMenu>
            </Grid>
            <Announcement items={[1,2,3]}></Announcement>
            <Grid container justify="center" style={{backgroundColor: "#eee"}}>
                <Grid item xs={12} style={{backgroundColor: "rgba(208, 208, 208, 0.1)"}}>
                    <Section></Section>
                </Grid>
                <Grid item xs={12} lg={10} style={{padding: "2rem"}}>
                    <SimpleTabs
                        tabs={
                            [
                                {name: "행사사진1", item: (<div>test1</div>)},
                                {name: "행사사진2", item: (<div>test2</div>)},
                                {name: "행사사진3", item: (<div>test3</div>)},
                            ]
                        }
                    />
                </Grid>
            </Grid>
        </Grid>
    </div>
  )
  
  LandingPageTemplate.propTypes = {
    images: PropTypes.array,
    video: PropTypes.string,
    title: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    menuItems: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
  }

class LandingPage extends React.Component {
    render() {
        return (
            <LandingPageTemplate></LandingPageTemplate>
        );
    }
}

export default LandingPage