import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import NestedList from './NestedList';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '1rem',
    },
    menu: {
      marginTop: '2.5rem !important'
    },
}));

function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const menus = props.menus;

  const menuItems = menus.map((menu, i) =>
    <NestedList key={i} item={menu.item} link={menu.link} subItems={menu.subItems}></NestedList>
  );
  
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <Button
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Typography variant="subtitle1">{props.title}</Typography>
      </Button>
      <Menu id="simple-menu" className={classes.menu} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {menuItems}
      </Menu>
    </div>
  );
}

export default SimpleMenu;