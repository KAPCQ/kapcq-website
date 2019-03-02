import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import NestedList from './NestedList';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function MobileDrawer(props) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open) => () => {
    setState({ ...state, right: open });
  };

  var arr = [];
  props.menus.forEach(item => {
    var obj = {item: item.title, subItems: []};
    item.menu.forEach(element => {
        if (element.subItems.length > 0) {
            obj.subItems.push(...element.subItems);
        } else {
            var subItem = {name: element.item, link: element.link};
            obj.subItems.push(subItem);
        }
    });
    arr.push(obj);
  });

  return (
    <div>
      <IconButton aria-label="Menu" onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="large"/>
      </IconButton>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer(false)}>
        {arr.map((menu, i) => (
          <NestedList key={i} item={menu.item} link={menu.link} subItems={menu.subItems}></NestedList>
        ))}
      </Drawer>
    </div>
  );
}

export default MobileDrawer;