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
        {/* <Link to="/"> */}
              {/* <i className="fa-solid fa-house fa-2xl"></i> */}
              {/* <TxtHome>HOME</TxtHome> */}
          {/* </Link> */}

          <Link to="/form">
              {/* <i className="fa-solid fa-circle-plus fa-2xl"></i> */}
              <TxtNew>CREATE</TxtNew>

          </Link>        

          <Link to="/logIn">
              {/* <i className="fa-solid fa-user fa-2xl"></i> */}
              <TxtRegistrate>REGISTRATE</TxtRegistrate>
          </Link>
          </CtInfo>
          </CtNavbar>
    </>
  )
}

export default NavBar