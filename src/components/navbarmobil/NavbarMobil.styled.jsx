import styled from "styled-components";

//Navbar
export const CtNavbarMobil = styled.div`
  display: none;
  

  @media screen and (max-width: 820px) {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0 !important;
  height: 9rem;
  position: fixed;
  z-index: 1;
  width: 100vw;
  background-color: #072104; 
  }

  @media screen and (max-width: 415px) {
  height: 6rem;   
  }

`;


//Menú
export const CtIconos = styled.div`
    display: flex;
    
    @media screen and (max-width: 820px) {
    display: flex;
    justify-content: space-around;
    color:#98B5A4;
    align-items: center;
    width: 100vw;
    position: relative;


  }

  @media screen and (max-width: 415px) {


  }

`;

export const BtNavbar = styled.button`
  display: none;

  @media screen and (max-width: 820px) {
  list-style-type: none;
  font-weight: 600;
  border: none;
  color: white;
  background-color: transparent;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  color:#98B5A4;
  font-size: 21px;

}

  @media screen and (max-width: 390px) {

    list-style-type: none;
  font-weight: 600;
  border: none;
  color: white;
  background-color: transparent;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  color:#98B5A4;
  font-size: 11px;

  }


`;

export const BtCreate = styled.button`
  display: none;

  @media screen and (max-width: 820px) {
  list-style-type: none;
  border: none;
  background-color: transparent;
  display: inline-block;
  font-size: 46px;
  color:#98B5A4;
  }

  @media screen and (max-width: 390px) {
  list-style-type: none;
  font-weight: 600;
  font-size: 24px;
  border: none;
  color: white;
  background-color: transparent;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  color:#98B5A4;
  }


`;


