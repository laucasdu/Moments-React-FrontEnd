import React from 'react'
import { Link } from "react-router-dom";
import { 
  CtNavbar, 
  CtSearch, 
  Input, 
  BtSearch, 
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
          <CtSearch>
            <Input type="text" placeholder="Title moment..." />
            <BtSearch><i className="fa-solid fa-magnifying-glass"></i></BtSearch>          
          </CtSearch>


        <CtInfo>
        <Link to="/">
              {/* <i className="fa-solid fa-house fa-2xl"></i> */}
              <TxtHome>Home</TxtHome>
          </Link>

          <Link to="/form">
              {/* <i className="fa-solid fa-circle-plus fa-2xl"></i> */}
              <TxtNew>New</TxtNew>

          </Link>        

          <Link to="/logIn">
              {/* <i className="fa-solid fa-user fa-2xl"></i> */}
              <TxtRegistrate>Registrate</TxtRegistrate>
          </Link>
          </CtInfo>
          </CtNavbar>
    </>
  )
}

export default NavBar