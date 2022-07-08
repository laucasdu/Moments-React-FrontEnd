import { Link } from "react-router-dom";
import { 
  CtNavbar, 
  CtLogo,
  TxtLogo, 
  CtInfo,
  TxtHome,
  TxtNew,
  TxtRegistrate,
  } 
  from './Navbar.styled'

function NavBar() {


  return (

    <>
        <CtNavbar>
          <CtLogo>
            <TxtLogo>MOMENTS</TxtLogo>
          </CtLogo>

        <CtInfo>
        <Link to="/">
              {/* <i className="fa-solid fa-house fa-2xl"></i> */}
              <TxtHome>HOME</TxtHome>
          </Link>

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