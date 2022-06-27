import React from 'react'
import { Link } from "react-router-dom";

import { 
  CtNavbar, 
  CtSearch, 
  InputSearch, 
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
            <InputSearch type="text" placeholder="Search..." />
            <BtSearch><i className="fa-solid fa-magnifying-glass"></i></BtSearch>          
          </CtSearch>

        <BtInfo>

        <Link to="/">
            <BtHome>
              <i className="fa-solid fa-house fa-2xl"></i>
            </BtHome>
          </Link>

          <Link to="/moment">
            <BtCreate>
              <i className="fa-solid fa-plus fa-2xl"></i>
            </BtCreate>
          </Link>        

          <Link to="/log-in">
            <BtLogin>
              <i className="fa-regular fa-user fa-2xl"></i>
            </BtLogin>
          </Link>
          </BtInfo>

          </CtNavbar>
    </>
  )
}

export default NavBar