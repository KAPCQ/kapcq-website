import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'gatsby'

const MyCol = styled(Col)`
  padding: 0 0 1rem 1rem;
`

const MyPaper = styled.div`
  padding: 39% 0 !important;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`

function QuickMenu(props) {
  const gridItems = props.items.map((menu, i) =>
    <MyCol key={i} xs={6}>
      <Link to={menu.path}>
        <MyPaper style={{backgroundColor: menu.backgroundColor}}>
          <h4 style={{fontSize: "2rem", fontWeight: "bold", color: menu.textColor, textAlign: "center"}}>{menu.text}</h4>
        </MyPaper>
      </Link>
    </MyCol>
  );

  return (
    <Grid fluid>
      <Row>
        {gridItems}
      </Row>
    </Grid>
  );
}

export default QuickMenu;