import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GotoIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Grid, Row, Col } from 'react-flexbox-grid';

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

  const toggleMenu = (index) => () => {
    setState({ ...state, position: index });
  }

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
                <Link to="/" >
                  <HomeIcon style={{color: "#DFAC44"}}/>
                  <Text style={{fontSize: "1rem", float: "right", paddingRight: "4rem"}}>퀸즈장로교회</Text>
                </Link>
              </div>
              <ul>
                {props.menus.map((menu, i) => (
                  <Menu key={i}>
                    <Link to={menu.path} >
                      <div onClick={toggleMenu(i)}>
                        <Text>{menu.name}</Text>
                        <GotoIcon style={{color: "rgba(112, 112, 112, 0.7)", float: "right"}}/>
                      </div>
                    </Link>
                  </Menu>
                ))}
              </ul>
            </Col>
          </Row>
        </Grid>
      </Drawer>
    </div>
  );
}

export default MobileDrawer;