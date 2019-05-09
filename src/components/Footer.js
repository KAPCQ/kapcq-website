import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Text } from './style'

const OtherLinks = styled(Row)`
    background-color: #F3F7F8;
    padding: 1rem;
`

const SiteLink = styled.a`
    font-weight: bold;
    color: #B6C5CB;
    cursor: pointer;
    &:hover {
        color: #9caaaf;
    }
`

const FooterText = styled.h2`
    color: #ffffff;
    padding: 0.5rem 0;
`

function Footer() {
    const siteLinks = [
        { title: 'QPEM', link: 'https://www.qpem.org/' }, 
        { title: 'KAPCQM', link: 'http://www.kapcqcm.org/'},
        { title: '동부개혁장로회신학교', link: 'https://www.rptseast.org/'},
        { title: '히즈핑거 출판사', link: ''},
        { title: '장영춘 원로목사', link: 'http://pastorchang.kapcq.org/'},
    ]

    const links = siteLinks.map((item, i) =>
        <Col key={i} xs={12} lg={2}>
            <div style={{padding: "0.2rem 0"}}>
                <SiteLink href={item.link} target="_blank">{item.title}</SiteLink>
            </div>
        </Col>
    );
    return (
        <div>
            <Grid fluid style={{padding: "0"}}>
                <OtherLinks around="xs" center="xs">
                    {links}
                </OtherLinks>
            </Grid>
            <Grid fluid style={{padding: "0"}}>
                <Row style={{background: "#1D1D1D", padding: "2rem 0"}}>
                    <Col xsOffset={1} xs={10}>
                        <h1 style={{color: "#fff", fontWeight: "bold", fontSize: "1.5rem", height: "5rem"}}>퀸즈장로교회</h1>
                        <Row>
                            <Col sm={6}>
                                <FooterText>The Korean American Presbyterian Church of Queens</FooterText>
                                <FooterText>143-17 Franklin Ave. Flushing, NY 11355</FooterText>
                                <FooterText>Tel: (718) 886-4040,4340,4347</FooterText>
                            </Col>
                            <Col sm={6}>
                                <FooterText>교회학교</FooterText>
                                <FooterText>AGAPE</FooterText>
                                <FooterText>퀸장달력</FooterText>
                            </Col>
                        </Row>
                        <Text style={{color: "#fff", fontSize: "1.2rem", textAlign: "right"}}>
                            <FaFacebookF style={{margin: "1rem"}}></FaFacebookF>
                            <FaTwitter style={{margin: "1rem"}}></FaTwitter>
                            <FaInstagram style={{margin: "1rem"}}></FaInstagram>
                            <FaLinkedinIn style={{margin: "1rem"}}></FaLinkedinIn>
                        </Text>
                        <h2 style={{margin: "2rem 0", color: "#707070", textAlign: "center"}}>2006-2019 KAPCQ. All Rights Reserved</h2>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default Footer