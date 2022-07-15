import styled from "styled-components";

//Navbar
export const CtNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #072104;


  @media screen and (max-width: 820px) {
  /* height: 80px;
  width: 100%;
  background-color: #072104;
    */
  }

  @media screen and (max-width: 390px) {
    display: none;


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
    /* margin-bottom: 6%; */
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


/* 
  color: #EAD9F6;
  font-weight: 600;
  &:hover,
  :active,
  :link,
  :visited {
    text-decoration: none;
  } */

  @media screen and (max-width: 820px) {
    height: 500px;
    font-size: 5rem;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 390px){
    margin-bottom: 6%;

  }

`;

//Menú
export const CtInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-top:2%;
    margin-right: 2%;
    /* flex-direction: column;
    width: 20%;
    flex-direction: row;
    font-size: 25px;
    margin-top: 45px;
    justify-content: space-around;
    font-size: 25px;
    text-decoration: none; */
    /* margin-top: 5px; */
    /* margin-right: 70px; */

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
  color:#072104;  
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

`;

