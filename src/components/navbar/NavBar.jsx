import React from 'react'
import { Link } from "react-router-dom";
import { 
  CtNavbar, 
  CtSearch, 
  Input, 
  BtSearch, 
  CtLogo,
  TxtLogo, 
  BtCreate,
  BtLogin,
  BtHome,
  CtInfo,
  TxtBtHome
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


        <CtInfo>
        <Link to="/">
            <BtHome>
              {/* <i className="fa-solid fa-house fa-2xl"></i> */}
              <TxtBtHome>Home</TxtBtHome>
            </BtHome>
          </Link>

          <Link to="/form">
            <BtCreate>
              {/* <i className="fa-solid fa-circle-plus fa-2xl"></i> */}
              <TxtBtHome>Create</TxtBtHome>

            </BtCreate>
          </Link>        

          <Link to="/logIn">
            <BtLogin>
              {/* <i className="fa-solid fa-user fa-2xl"></i> */}
              <TxtBtHome>Registrate</TxtBtHome>

              
            </BtLogin>
          </Link>
          </CtInfo>
          </CtNavbar>
    </>
  )
}

export default NavBar