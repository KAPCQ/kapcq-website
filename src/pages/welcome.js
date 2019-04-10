import React from 'react'
// import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import WelcomeProcess from '../components/WelcomeProcess'
import NewComerRegister from '../components/NewComerRegister'
import Minstry from '../components/Ministry'

export default class IndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <Grid container style={{backgroundColor: "rgba(230, 202, 144, 0.5)"}}>
                    <Grid item sm={1}>
                    </Grid>
                    <Grid item sm={10}>
                        <Typography variant="display3" style={{color: "#DFAC44", paddingTop: "10rem"}}>환영합니다.</Typography>
                        <Typography variant="title" style={{color: '#707070', paddingTop: '1rem'}}>
                            퀸즈장로교회에 처음 오신 분들을 위한 <br/>
                            교회 방문부터 교인이 되기까지의 과정
                        </Typography>
                        <WelcomeProcess></WelcomeProcess>
                    </Grid>
                    <Grid item sm={1}></Grid>
                </Grid>
                <Grid container style={{backgroundColor: "#EDE9DE"}}>
                    <Grid item sm={1}></Grid>
                    <Grid item sm={10}>
                        <NewComerRegister></NewComerRegister>
                    </Grid>
                    <Grid item sm={1}></Grid>
                </Grid>
                <Grid container>
                    <Grid item sm={1}></Grid>
                    <Grid item sm={10}>
                        <Minstry></Minstry>
                    </Grid>
                    <Grid item sm={1}></Grid>
                </Grid>
            </Layout>
        )
    }
}