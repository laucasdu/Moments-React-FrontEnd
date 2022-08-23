import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png';

import { 
  CtNavbar, 
  CtLogo,
  TxtLogo, 
  CtInfo,
  TxtNew,
  TxtRegistrate,
  CtLogoCentral,
  LogoAdventure
  } 
  from './Navbar.styled'

function NavBar() {


  return (

    <>
        <CtNavbar>
          <CtLogo>
          <Link to="/">
              {/* <i className="fa-solid fa-house fa-2xl"></i> */}
              <TxtLogo>HOME</TxtLogo>
          </Link>
          </CtLogo>

          <CtLogoCentral>
            <Link to='/'><LogoAdventure src={logo} alt='logo'></LogoAdventure></Link>
          </CtLogoCentral>


        <CtInfo>

          <Link to="/form">
              <TxtNew>NEW</TxtNew>

          </Link>        

          <Link to="/logIn">
              <TxtRegistrate>LOG IN</TxtRegistrate>
          </Link>

          <Link to="/logIn">
              <TxtRegistrate>SIGN UP</TxtRegistrate>
          </Link>

          </CtInfo>
          </CtNavbar>
    </>
  )
}

export default NavBar