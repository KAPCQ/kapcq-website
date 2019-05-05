import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GotoIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid';
// import NestedList from './NestedList';

const Menu = styled.li`
  padding: 0.5rem;
  border-bottom: 1px solid rgba(112,112,112,0.7);
  &:focus {
    color: #DC9D1E;
  }
`
const Text = styled.span`
  font-size: 0.7rem;
  color: #3D3D3D;
`

function MobileDrawer(props) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open) => () => {
    setState({ ...state, right: open });
  };

  // var arr = [];
  // props.menus.forEach(item => {
  //   var obj = {item: item.title, subItems: []};
  //   item.menu.forEach(element => {
  //       if (element.subItems.length > 0) {
  //           obj.subItems.push(...element.subItems);
  //       } else {
  //           var subItem = {name: element.item, link: element.link};
  //           obj.subItems.push(subItem);
  //       }
  //   });
  //   arr.push(obj);
  // });

  return (
    <div>
      <IconButton aria-label="Menu" onClick={toggleDrawer(true)}>
        <MenuIcon fontSize="large" style={{color: "#FFFFFF"}}/>
      </IconButton>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer(false)}>
        <Grid fluid style={{minWidth: "18rem", padding: "2rem"}}>
          <Row xs="center">
            <Col xs={12}>
              <div style={{borderBottom: "2px solid #DFAC44"}}>
                <SearchIcon style={{color: "#DFAC44"}}></SearchIcon>
              </div>
              <ul>
                {props.menus.map((menu, i) => (
                  <Menu key={i}>
                    <Link to={menu.path}>
                      <Text>{menu.name}</Text>
                      <GotoIcon style={{color: "rgba(112, 112, 112, 0.7)", float: "right"}}/>
                    </Link>
                  </Menu>
                ))}
              </ul>
            </Col>
          </Row>
        </Grid>
        {/* {arr.map((menu, i) => (
          <NestedList key={i} item={menu.item} link={menu.link} subItems={menu.subItems}></NestedList>
        ))} */}
      </Drawer>
    </div>
  );
}

export default MobileDrawer;