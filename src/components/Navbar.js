import React from 'react'
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

class Navbar extends React.Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

  render() {
    return (
      <NavigationBar isTop={this.state.isTop}></NavigationBar>
    );
  }
}

export default Navbar
