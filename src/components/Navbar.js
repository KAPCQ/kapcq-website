import React, {useState, useEffect} from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Hidden from '@material-ui/core/Hidden'
// import Grid from '@material-ui/core/Grid'
// import churchLogo from '../img/church.svg'
// import SimpleMenu from './SimpleMenu'
import MobileDrawer from './MobileDrawer'

const MyNavBar = styled.nav`
  background: ${props => props.isTop ? "transparent !important" : "#FFFFFF !important"};
`

const Container = styled.div`
  width: 85%;
  margin: auto;

  @media (max-width: 960px) {
    width: 100%;
  }
`

const MyLink = styled(Link)`
  color: ${props => props.istop === 'true' ? "#FFFFFF !important" : "#3D3D3D !important"};
`

const MyMenu = styled(MyLink)`
  padding: 0 1rem;

  :hover {
    color: #DC9D1E !important;
  }
`

const NavigationBar = (props) => (
  <StaticQuery
    query={graphql`
      query MenuQuery {
        site {
          siteMetadata {
            title
            menus {
              title
              menu {
                item
                link
                subItems {
                  name
                  link
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <MyNavBar isTop={props.isTop} className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <Container className="navbar-brand">
          <MyLink istop={props.isTop.toString()} to="/" className="navbar-item" title="Logo" style={{ flex: 1, fontWeight: "bold" }}>
            {/* <img src={churchLogo} alt="KAPCQ" style={{ width: '3rem' }} /> */}
            <h1>퀸즈장로교회</h1>
          </MyLink>
          <Hidden mdDown>
            <div style={{marginTop: "0.8rem"}}>
              {props.menus}
            </div>
            {/* {data.site.siteMetadata.menus.map((item, i) => (
              <SimpleMenu key={i} title={item.title} menus={item.menu} isTop={props.isTop}></SimpleMenu>
            ))}         */}
          </Hidden>
          <Hidden lgUp>
            <MobileDrawer menus = {data.site.siteMetadata.menus}></MobileDrawer>
          </Hidden>
        </Container>
      </MyNavBar>
    )}
    />
)

function Navbar(props) {
  const [isTop, setTop] = useState(true);
  const menuList = [
    {title: '환영합니다', path: '/welcome'}, 
    {title: '교회안내', path: '/information'}, 
    {title: '말씀과 찬양', path: '/worship'}, 
    {title: '교회기관', path: '/department'}, 
    {title: '훈련과 양육', path: '/discipline'}, 
    {title: '선교', path: '/mission'}, 
    {title: '공동체', path: '/community'}
  ];

  // function changeColor(menu, e) {
  //   e.preventDefault();
  //   console.log(menu);
  //   window.location.href = menu.path;
  // }

  const menus = menuList.map((menu, i) =>
    <MyMenu key={i} istop={isTop.toString()} to={menu.path}>{menu.title}</MyMenu>
  );

  useEffect(() => {
    // if (props.disableChange) {
    //   setTop(false);
    // } else {
      document.addEventListener('scroll', () => {
        const isWindowTop = window.scrollY < 100;
        if (isWindowTop !== isTop) {
          setTop(isWindowTop);
        }
      });
    // }
  });

  return (
    <NavigationBar isTop={isTop} menus={menus}></NavigationBar>
  )
}

export default Navbar
