import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
// import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import churchLogo from '../img/church.svg'
import SimpleMenu from './SimpleMenu'
import MobileDrawer from './MobileDrawer'

const Navbar = () => (
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
      <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo" style={{ flex: 1 }}>
            <img src={churchLogo} alt="KAPCQ" style={{ width: '3rem' }} />
            <h1>{data.site.siteMetadata.title}</h1>
          </Link>
          <Hidden smDown>
            {data.site.siteMetadata.menus.map((item, i) => (
              <SimpleMenu key={i} title={item.title} menus={item.menu}></SimpleMenu>
            ))}        
          </Hidden>
          <Hidden mdUp>
            <MobileDrawer menus = {data.site.siteMetadata.menus}></MobileDrawer>
          </Hidden>
        </div>
      </nav>
    )}
    />
)

export default Navbar
