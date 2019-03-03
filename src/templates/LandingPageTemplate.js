import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import BackgroundVideo from '../components/BackgroundVideo'
import Video from '../components/Video'
import QuickMenu from '../components/QuickMenu'
import NoticeCard from '../components/NoticeCard'
import SimpleTabs from '../components/SimpleTabs'
import Section from '../components/Section'

export const LandingPageTemplate = ({
    image,
    title,
    heading,
    description,
    video,
    menuItems
  }) => (
    <div>
        <BackgroundVideo src={video} imgSrc={image}></BackgroundVideo>
        
        <div style={{height: "4rem"}}>
            
        </div>
        <Grid container spacing={16} justify="center">
            <Grid item xs={12} md={6}>
                <Video src="https://www.youtube.com/embed/eoxSXZIzCUo"></Video>
            </Grid>
            <Grid item xs={12} md={4}>
                <QuickMenu items={menuItems}></QuickMenu>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h3" align="center" style={{padding: "3rem"}}>교회소식</Typography>
            </Grid>
            <Grid container justify="center" style={{backgroundColor: "#eee"}}>
                <Grid item lg={10} style={{padding: "2rem"}}>
                    <Typography variant="h4" style={{padding: "1rem 0"}}>공지사항</Typography>
                    <Grid container justify="space-evenly">
                        <Grid item lg={4} style={{paddingBottom: "1rem"}}>
                            <NoticeCard title="공지사항1" imageInfo={image}></NoticeCard>
                        </Grid>
                        <Grid item lg={4} style={{paddingBottom: "1rem"}}>
                            <NoticeCard title="공지사항2" imageInfo={image}></NoticeCard>
                        </Grid>
                        <Grid item lg={4} style={{paddingBottom: "1rem"}}>
                            <NoticeCard title="공지사항3" imageInfo={image}></NoticeCard>
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
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    video: PropTypes.string,
    title: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    menuItems: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
  }

export default LandingPageTemplate