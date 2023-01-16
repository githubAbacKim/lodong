import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #1212124a;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((67vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLinkBox = styled(Link)`
  color: #ec0009;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border: 2px solid #dd2b21;
  border-radius: 6px;
  &.active {
    color: #ec0009;
  }

  &:hover {
    border-radius: 15px;
    transition: 0.4s;
  }
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #ffffff;
  }

  &:hover {
    color: #ec0009;
    transition: 0.4s;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.nav`
  font-size: 31px;
  color: #ec0009;
  font-family: 'Jacques Francois', serif;

  &:hover {
    transition: 0.9s;
    color: #ffffff;
  }
`;
