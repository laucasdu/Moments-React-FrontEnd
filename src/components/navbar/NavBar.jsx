import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import { momentServices } from '../../services/momentServices';
// import Search from '../search/Search';
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

// const [searchMoment, setSearchMoment] = useState("");


  // const searchMoment = (data) => {
  //   momentServices.searchMoment(data).then((res) => {
  //     return(res);
  //     });
  //   };


  // const onInputChange = (e) => {
  //     setSearchMoment(e.target.value);
  //     // console.log(e)
  //   };


  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     searchMoment(searchMoment);
  //     //console.log(search)

  // };


  return (

    <>
        <CtNavbar>
          <CtLogo>
            <TxtLogo>MOMENTS</TxtLogo>
          </CtLogo>


        {/* <Search/> */}

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