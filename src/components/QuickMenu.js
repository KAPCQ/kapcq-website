import React from 'react';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

const styles = {
  grid: {
    padding: '0 0 1rem 1rem'
  },
  paper: {
    padding: '39% 0 !important',
    width: '100%',
    height: '100%',
    backgroundColor: '#eeeeee !important'
  }
}

// const MyGrid = styled(Grid)`
//   padding: 0 0 1rem 1rem;
// `

// const MyPaper = styled(Paper)`
//   padding: 39% 0 !important;
//   width: 100%;
//   height: 100%;
//   background-color: #eeeeee !important;
// `

function QuickMenu(props) {
  const { classes } = props;
  const gridItems = props.items.map((item, i) =>
    <Grid className={classes.grid} key={i} item xs={6}>
      <Paper className={classes.paper}>
        <Typography align="center" variant="h4" style={{fontWeight: "bold"}}>{item}</Typography>
      </Paper>
    </Grid>
  );

  return (
    <Grid container justify="center">
        {gridItems}
    </Grid>
  );
}

export default withStyles(styles)(QuickMenu);