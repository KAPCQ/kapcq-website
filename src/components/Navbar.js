import React, {useState, useEffect} from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Hidden from '@material-ui/core/Hidden'
// import churchLogo from '../img/church.svg'
import SimpleMenu from './SimpleMenu'
import MobileDrawer from './MobileDrawer'

const MyNavBar = styled.nav`
  background: ${props => props.isTop ? "transparent !important" : "#FFFFFF !important"};
`

const MyLink = styled(Link)`
  color: ${props => props.isTop ? "#FFFFFF !important" : "#3D3D3D !important"};
`

const Container = styled.div`
  width: 80%;
  margin: auto;

  @media (max-width: 960px) {
    width: 100%;
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
          <MyLink isTop={props.isTop} to="/" className="navbar-item" title="Logo" style={{ flex: 1, fontWeight: "bold" }}>
            {/* <img src={churchLogo} alt="KAPCQ" style={{ width: '3rem' }} /> */}
            <h1>퀸즈장로교회</h1>
          </MyLink>
          <Hidden mdDown>
            {data.site.siteMetadata.menus.map((item, i) => (
              <SimpleMenu key={i} title={item.title} menus={item.menu} isTop={props.isTop}></SimpleMenu>
            ))}        
          </Hidden>
          <Hidden lgUp>
            <MobileDrawer menus = {data.site.siteMetadata.menus}></MobileDrawer>
          </Hidden>
        </Container>
      </MyNavBar>
    )}
    />
)

function Navbar() {
  const [istop, setTop] = useState(true);

  // useEffect(() => {
  //   window.addEventListener("mousemove", (e) => {
  //     console.log({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   });
  // });
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const isWindowTop = window.scrollY < 100;
      if (isWindowTop !== istop) {
        setTop(isWindowTop);
      }
    });
  });

  return (
    <NavigationBar isTop={istop}></NavigationBar>
  )
}

export default Navbar
