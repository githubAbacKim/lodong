import React from 'react';
import { Link } from 'react-scroll';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  Logo,
  NavLinkBox,
} from './NavbarElements';

const Navbar = ({ toggle }) => {

  return (
   
      <Nav>
        <NavLink to="/">
          <Logo to='/'>LODONG</Logo>
        </NavLink>
        <Bars onClick={toggle} />

        <NavMenu>
          <NavLink to="/Services"  activeStyle>
            SERVICE
          </NavLink>
          <Link to="footer" spy={true} smooth={true} offset={50} duration={500} activeStyle>
            <NavLink>
            PORTFOLIO
            </NavLink>
          </Link>
          <NavLink to="/" activeStyle>
            CAREERS
          </NavLink>
          <NavLinkBox to="/" activeStyle>
            바로문의
          </NavLinkBox>
        </NavMenu>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Service
          </NavLink>
          <NavLink to="/" activeStyle>
            KO
          </NavLink>
        </NavMenu>
      </Nav>
   
  );
};

export default Navbar;
