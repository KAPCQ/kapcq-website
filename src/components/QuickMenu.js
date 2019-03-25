import React from 'react';
import { styled } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const MyGrid = styled(Grid)({
    padding: '17% 0 !important',
    border: '1px solid #eeeeee'
})

function QuickMenu(props) {
  const gridItems = props.items.map((item, i) =>
    <MyGrid key={i} item xs={6}>
        <Typography align="center" variant="headline">
            <Button variant="outlined" color="primary" size="large">{item}</Button>
        </Typography>
    </MyGrid>
  );

  return (
    <Grid container justify="center" spacing={8}>
        {gridItems}
    </Grid>
  );
}

export default QuickMenu;