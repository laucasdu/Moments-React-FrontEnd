import React from 'react'
import { Link } from "react-router-dom";
import { 
  CtNavbar, 
  CtSearch, 
  Input, 
  BtSearch, 
  CtLogo,
  TxtLogo, 
  BtInfo,
  BtCreate,
  BtLogin,
  BtHome
  } 
  from './Navbar.styled'

function NavBar() {
  return (

    <>
        <CtNavbar>
          <CtLogo>
            <TxtLogo>Moments</TxtLogo>
          </CtLogo>
          
          <CtSearch>
            <Input type="text" placeholder="Search..." />
            <BtSearch><i className="fa-solid fa-magnifying-glass"></i></BtSearch>          
          </CtSearch>

        <BtInfo>

        <Link to="/">
            <BtHome>
              <i className="fa-solid fa-house fa-2xl"></i>
            </BtHome>
          </Link>

          <Link to="/form">
            <BtCreate>
              <i className="fa-solid fa-circle-plus fa-2xl"></i>
            </BtCreate>
          </Link>        

          <Link to="/logIn">
            <BtLogin>
              <i className="fa-solid fa-user fa-2xl"></i>
            </BtLogin>
          </Link>
          </BtInfo>

          </CtNavbar>
    </>
  )
}

export default NavBar