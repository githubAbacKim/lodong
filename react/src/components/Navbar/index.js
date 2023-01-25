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

const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
const API_key = `abf6a20074c9e8ceda7eff4ed70de0ba`


const Navbar = ({ toggle }) => {
  const [latitude , setLatitude] = React.useState('');
  const [longitude , setLongitude] = React.useState('');
  const [responseData, setResponseData] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude)
    })

    let finalAPIEndPoint =`${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`
   /*  axios.get(finalAPIEndPoint)
    .then((response) => {
      console.log(response.data)
    }) */

/* 
    console.log(finalAPIEndPoint) */
  },[])

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
          <NavLinkBox to="/Inquire" activeStyle>
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
