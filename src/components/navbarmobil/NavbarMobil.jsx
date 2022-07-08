import React from 'react'
import { Link } from 'react-router-dom'
import { CtNavbarMobil, CtIconos, TxtHome, TxtNew, TxtRegistrate, TxtLupa, TxtHeart } from './NavbarMobil.styled'

function NavbarMobil() {



  return (

    <>
    <CtNavbarMobil>

    <CtIconos>
        <Link to="/">
              <TxtHome><i className="fa-solid fa-house fa-2xl"></i></TxtHome>
          </Link>
          
          <Link to="">
              <TxtLupa><i className="fa-solid fa-magnifying-glass fa-2xl"></i></TxtLupa>
          </Link> 
          
          <Link to="/form">
              <TxtNew><i className="fa-solid fa-circle-plus fa-2xl"></i></TxtNew>
          </Link>     
          <Link to="">
              <TxtHeart><i className="fa-solid fa-heart fa-2xl"></i></TxtHeart>
          </Link> 

          <Link to="/logIn">
              <TxtRegistrate><i className="fa-solid fa-user fa-2xl"></i></TxtRegistrate>
          </Link>
          </CtIconos>


    </CtNavbarMobil>
    </>

  )
}

export default NavbarMobil