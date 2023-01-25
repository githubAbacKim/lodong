import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';

export const InquireInfo  = styled.div`
background-color: #000000;
padding: 10px;
width: 783px;
height: 297px;
text-align: justify;
margin-inline: auto;
`;

export const InquireInput = styled.div`
padding: 10px;
width: 783px;
height: 297px;
text-align: justify;
margin-inline: auto;
`;

export const NavLinkBox = styled(Link)`
  color: #ec0009;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 16%;
  width: 16%;
  margin-inline: auto;
  margin-top: 2rem;
  cursor: pointer;
  border: 3px solid #dd2b21;
  border-radius: 6px;
  &.active {
    color: #ec0009;
  }

  &:hover {
    border-radius: 15px;
    transition: 0.4s;
  }
`;