import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Hidden from '@material-ui/core/Hidden'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { UnderLine } from './style';
import AnnouncementList from './AnnouncementList';
import './all.sass';

const Wrapper = styled(Row)`
    background-color: #fff;
    padding: 2rem 0;
`

const MyLeftArrow = styled(FaChevronLeft)`
    font-size: 4.5rem !important;
    color: rgba(223, 172, 68, 0.8);
    float: right;
    cursor: pointer;
`

const MyRightArrow = styled(FaChevronRight)`
    font-size: 4.5rem !important;
    color: rgba(223, 172, 68, 0.8);
    float: left;
    cursor: pointer;
`

const MainTitle = styled.h1`
    color: #3D3D3D;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
` 

function Announcement(props) {
    const [index, setIndex] = React.useState(0);
    const [leftClicked, setLeft] = React.useState(false);
    const [rightClicked, setRight] = React.useState(false);

    let announcementList = props.items.slice(index, index+3);

    function handleLeftClick() {
        if (index === 0) return;
        setLeft(true);
        setTimeout(() => {
            setIndex(index - 1);
            setLeft(false);
        }, 500);
    }

    function handleRightClick() {
        if (index+3 >= props.items.length) return;
        setRight(true);
        setTimeout(() => {
            setIndex(index + 1);
            setRight(false);
        }, 500);
    }

    return (
        <Wrapper center="xs" middle="xs">
            <Hidden mdUp>
                <Col xs={12}>
                    <MainTitle>교회소식</MainTitle>
                    <UnderLine style={{color: "#E1B355"}}>----</UnderLine>
                </Col>
            </Hidden>
            <Hidden smDown>
                <Col md={1}>
                    <MyLeftArrow onClick={handleLeftClick}></MyLeftArrow>
                </Col>
            </Hidden>
            <Col md={10}>
                <AnnouncementList items={announcementList} className={leftClicked ? 'moveLeft' : rightClicked ? 'moveRight' : ''}></AnnouncementList>
            </Col>
            <Hidden smDown>
                <Col md={1}>
                    <MyRightArrow onClick={handleRightClick}></MyRightArrow>
                </Col>
            </Hidden>
        </Wrapper>
    );
}

export default Announcement;