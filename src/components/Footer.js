import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Wrapper = styled(Grid)`
    flex-grow: 1;
    background: #1D1D1D;
    padding: 2rem;
`

const OtherLinks = styled(Grid)`
    background-color: #F3F7F8;
    padding: 2rem;
`

const SiteLink = styled(Typography)`
    font-weight: bold !important;
    color: #B6C5CB !important;
`

const FooterText = styled(Typography)`
    color: #fff !important;
    padding: 0.5rem 0;
`

function Footer() {
    const siteLinks = ['QPEM', 'KAPCQM', '동부개혁장로회신학교', '히즈핑거 출판사', '장영춘 원로목사']

    const links = siteLinks.map((link, i) =>
        <Grid key={i} item>
            <SiteLink>{link}</SiteLink>
        </Grid>
    );
    return (
        <div>
            <OtherLinks container justify="space-around">
                {links}
            </OtherLinks>
            <Wrapper container justify="center">
                <Grid item md={11}>
                    <Typography variant="h5" style={{color: "#fff", fontWeight: "bold", height: "5rem"}}>퀸즈장로교회</Typography>
                    <Grid container>
                        <Grid item md={4}>
                            <FooterText variant="body1">The Korean American Presbyterian Church of Queens</FooterText>
                            <FooterText variant="body1">143-17 Franklin Ave. Flushing, NY 11355</FooterText>
                            <FooterText variant="body1">Tel: (718) 886-4040,4340,4347</FooterText>
                        </Grid>
                        <Grid md={4}>
                            <FooterText variant="body1">교회학교</FooterText>
                            <FooterText variant="body1">AGAPE</FooterText>
                            <FooterText variant="body1">퀸장달력</FooterText>
                        </Grid>
                    </Grid>
                    <Typography align="right" style={{color: "#fff", fontSize: "1.2rem"}}>
                        <FaFacebookF style={{margin: "1rem"}}></FaFacebookF>
                        <FaTwitter style={{margin: "1rem"}}></FaTwitter>
                        <FaInstagram style={{margin: "1rem"}}></FaInstagram>
                        <FaLinkedinIn style={{margin: "1rem"}}></FaLinkedinIn>
                    </Typography>
                    <Typography variant="body1" align="center" style={{margin: "2rem 0", color: "#707070"}}>Copyright 2006-2019 KAPCQ. All Rights Reserved</Typography>
                </Grid>
            </Wrapper>
        </div>
    )
}

export default Footer