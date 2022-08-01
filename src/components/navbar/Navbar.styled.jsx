import styled from "styled-components";

//Navbar
export const CtNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #072104;


  @media screen and (max-width: 820px) {
  height: 250px;
  width: 100%;
  background-color: #072104;
   
  }

  @media screen and (max-width: 390px) {
    height: 150px;
    width: 100%;
  }
`;

export const CtLogo = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 820px) {
    margin-left: 25%;
    margin-top: -3%;
  }

  @media screen and (max-width: 390px) {
  }
`;

export const TxtLogo = styled.button`
  font-weight: 600;
  height: 13%;
  margin-top: 30%;
  margin-left: 30%;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  border-radius: 0.1vw;
  background-color: #98B5A4;
  color:#072104;  
  cursor: pointer;

  @media screen and (max-width: 820px) {
    display: none;
  }

  @media screen and (max-width: 390px){
    display: none;

  }

`;

//Menú
export const CtInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top:2%;
    margin-right: 2%;
    

`;

export const TxtHome = styled.button`
  font-weight: 600;
  height: 13%;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  border-radius: 0.1vw;
  background-color: #98B5A4;
  color:#072104;  
  cursor: pointer;


  @media screen and (max-width: 820px) {
    display: none;
  }

  @media screen and (max-width: 390px) {
    display: none;

  }


`;

export const TxtNew = styled.button`
  font-weight: 600;
  height: 13%;
  margin-right: 20%;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  border-radius: 0.1vw;
  background-color: #98B5A4;
  cursor: pointer;


  @media screen and (max-width: 820px) {
    display: none;

  }

  @media screen and (max-width: 390px) {
    display: none;

  }


`;

export const TxtRegistrate = styled.button`
  font-weight: 600;
  height: 13%;
  margin-left: 10%;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
  border-radius: 0.1vw;
  background-color: #98B5A4;
  color:#072104;  
  cursor: pointer;



  @media screen and (max-width: 820px) {
    display: none;

  }

  @media screen and (max-width: 390px) {
    display: none;
  }

`;

export const CtLogoCentral = styled.div`
 display: flex;
 flex-direction: row;

`;

export const LogoAdventure = styled.img`
margin-left: 13%;

@media screen and (max-width: 820px) {
  /* top:-10%;
  left:5%;
  position: fixed; */
  margin-top: -25%;
  margin-left: -21%;
  }

  @media screen and (max-width: 390px) {
    width: 100%;
    margin-left: -16%;

  }

`;

