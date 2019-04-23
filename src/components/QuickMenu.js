import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid'
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

const MyCol = styled(Col)`
  padding: 0 0 1rem 1rem;
`

const MyPaper = styled.div`
  padding: 39% 0 !important;
  width: 100%;
  height: 100%;
`

function QuickMenu(props) {
  const gridItems = props.items.map((menu, i) =>
    <MyCol key={i} xs={6}>
      <MyPaper style={{backgroundColor: menu.backgroundColor}}>
        <h4 style={{fontSize: "2rem", fontWeight: "bold", color: menu.textColor, textAlign: "center"}}>{menu.text}</h4>
      </MyPaper>
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