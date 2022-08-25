import React from 'react'
import { Link } from 'react-router-dom'
import { CtNavbarMobil, CtIconos, BtNavbar , BtCreate} from './NavbarMobil.styled'

function NavbarMobil() {



  return (

    <>
    <CtNavbarMobil>

    <CtIconos>
        <Link to="/">
              <BtNavbar><i className="fa-solid fa-house fa-2xl"></i></BtNavbar>
          </Link>
          
          <Link to="">
              <BtNavbar><i className="fa-solid fa-magnifying-glass fa-2xl"></i></BtNavbar>
          </Link> 
          
          <Link to="/form">
              <BtCreate><i className="fa-solid fa-square-plus fa-2xl"></i></BtCreate>
          </Link>     
          <Link to="">
              <BtNavbar><i className="fa-solid fa-heart fa-2xl"></i></BtNavbar>
          </Link> 

          <Link to="/login">
              <BtNavbar><i className="fa-solid fa-user fa-2xl"></i></BtNavbar>
          </Link>
        </CtIconos>


    </CtNavbarMobil>
    </>

  )
}

export default NavbarMobil