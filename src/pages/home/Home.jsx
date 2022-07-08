import React from 'react'
import MomentsList from '../../components/list/MomentsList'
import NavBar from '../../components/navbar/NavBar'
import NavbarMobil from '../../components/navbarmobil/NavbarMobil'
import NavbarMobilTop from '../../components/navbartop/NavbarMobilTop'

function Home() {

  return (

    <>
        {/* <NavbarMobilTop/> */}
        <NavBar/>
        <MomentsList/>
        <NavbarMobil/>
    
    
    </>
  )
}

export default Home