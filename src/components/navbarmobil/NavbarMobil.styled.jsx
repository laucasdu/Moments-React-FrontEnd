import styled from "styled-components";

//Navbar
export const CtNavbarMobil = styled.div`
  display: none;
  

  @media screen and (max-width: 820px) {
    display: flex;
    background-color: #072104; 
    width: 100vw;
    height: 15vw;
    align-items: center;
    margin-top: 8%;
  }

  @media screen and (max-width: 415px) {
   
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
}

  @media screen and (max-width: 390px) {

  }


`;

export const BtCreate = styled.button`
  display: none;

  @media screen and (max-width: 820px) {
  list-style-type: none;
  border: none;
  background-color: transparent;
  display: inline-block;
  font-size: 55px;
  color:#98B5A4;
  }

  @media screen and (max-width: 390px) {
  list-style-type: none;
  border: none;
  text-align: center;
  display: inline-block;
  /* background-color: white; */
  font-size: 30px;
  position: absolute;
  top:-170%;
  left:42%;
  color:#98B5A4;

  }


`;


