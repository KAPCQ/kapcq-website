import React from 'react';
// import { makeStyles } from '@material-ui/styles';
import { Link } from 'gatsby'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

function NestedList(props) {
  const [open, setOpen] = React.useState(false);
  let listItem;
  let subItems;
  if (props.link) {
      listItem = <Link to={props.link}>
                      <ListItem button onClick={handleClick}>
                      <ListItemText primary={props.item} />
                      {props.subItems.length > 0 ? <div>{open ? <ExpandLess /> : <ExpandMore />}</div> : <div></div>}
                      </ListItem>
                  </Link>
  } else {
  listItem = <ListItem button onClick={handleClick} style={{minWidth: '12rem'}}>
                  <ListItemText primary={props.item} />
                  {props.subItems.length > 0 ? <div>{open ? <ExpandLess /> : <ExpandMore />}</div> : <div></div>}
              </ListItem>
  }

  subItems = props.subItems.map((subItem, i) =>
  <Link to={subItem.link} key={i}>
      <ListItem button>
          <ListItemText primary={"- " + subItem.name} /> 
      </ListItem>
  </Link>
  );

  function handleClick() {
    setOpen(!open);
  }

  return (

    <List
      component="nav"
      style={{padding: 0}}
    >
    {listItem}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {subItems}
        </List>
      </Collapse>
    </List>
  );
}

export default NestedList;