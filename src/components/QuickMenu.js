import React from 'react';
import styled from 'styled-components';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

const MyGrid = styled(Grid)`
  padding: 0 0 1rem 1rem;
`

const MyPaper = styled.div`
  padding: 39% 0 !important;
  width: 100%;
  height: 100%;
`

function QuickMenu(props) {
  const gridItems = props.items.map((menu, i) =>
    <MyGrid key={i} item xs={6}>
      <MyPaper style={{backgroundColor: menu.backgroundColor}}>
        <Typography align="center" variant="h4" style={{fontWeight: "bold", color: menu.textColor}}>{menu.text}</Typography>
      </MyPaper>
    </MyGrid>
  );

  return (
    <Grid container justify="center">
        {gridItems}
    </Grid>
  );
}

export default QuickMenu;