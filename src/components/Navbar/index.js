import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  Logo,
  NavLinkBox,
} from './NavbarElements';
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink>
          <Logo>LODONG</Logo>
        </NavLink>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            SERVICE
          </NavLink>
          <NavLink to="/" activeStyle>
            PORTFOLIO
          </NavLink>
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
    </>
  );
};

export default Navbar;
