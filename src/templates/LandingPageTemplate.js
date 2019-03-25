import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
// import BackgroundVideo from '../components/BackgroundVideo'
// import MainSlider from '../components/MainSlider'
import MainTitle from '../components/MainTitle'
// import styled from 'styled-components';
import Video from '../components/Video'
import QuickMenu from '../components/QuickMenu'
import NoticeCard from '../components/NoticeCard'
import SimpleTabs from '../components/SimpleTabs'
import Section from '../components/Section'

const LandingPageTemplate = ({
    images,
    title,
    heading,
    description,
    video,
    menuItems
  }) => (
    <div>
        {/* <BackgroundVideo src={video}></BackgroundVideo> */}
        {/* <MainSlider></MainSlider> */}
        <MainTitle images={['/img/bannerText.png']}></MainTitle>
        {/* <BackgroundImage></BackgroundImage> */}
        <Grid container justify="center" style={{marginTop: "5rem"}}>
            <Grid item xs={12} md={6}>
                <Video src="https://www.youtube.com/embed/UEiH3ToDreU"></Video>
            </Grid>
            <Grid item xs={12} md={4}>
                <QuickMenu items={['새가족안내', '예배시간', '금주의 주보', '목양칼럼']}></QuickMenu>
            </Grid>
            <Grid container justify="center" style={{backgroundColor: "#eee"}}>
                <Grid item lg={10}>
                    <Typography variant="h4" style={{padding: "1rem 0"}}>공지사항</Typography>
                    <Grid container justify="space-evenly">
                        <Grid item lg={4} style={{paddingBottom: "1rem"}}>
                            <NoticeCard title="공지사항1"></NoticeCard>
                        </Grid>
                        <Grid item lg={4} style={{paddingBottom: "1rem"}}>
                            <NoticeCard title="공지사항2"></NoticeCard>
                        </Grid>
                        <Grid item lg={4} style={{paddingBottom: "1rem"}}>
                            <NoticeCard title="공지사항3"></NoticeCard>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
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