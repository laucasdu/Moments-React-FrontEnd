import styled from "styled-components";

//Navbar
export const CtNavbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 20vw;
  background-color: #072104;


  @media screen and (max-width: 820px) {
    display: none;
   
  }

  @media screen and (max-width: 390px) {
    display: none;


  }
`;

export const CtLogo = styled.div`
  display: flex;
  margin-left: 4%;
  font-size: 1.5em;

  @media screen and (max-width: 820px) {
    margin-left: 25%;
    margin-top: -3%;
  }

  @media screen and (max-width: 390px) {
    /* margin-bottom: 6%; */
  }
`;

export const TxtLogo = styled.h1`
  color: #EAD9F6;
  font-weight: 600;
  &:hover,
  :active,
  :link,
  :visited {
    text-decoration: none;
  }

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
    flex-direction: column;
    width: 20%;
    flex-direction: row;
    font-size: 25px;
    margin-top: 45px;
    justify-content: space-around;
    font-size: 25px;
    text-decoration: none;
    /* margin-top: 5px; */
    margin-right: 70px;

`;

export const TxtHome = styled.li`
  list-style-type: none;
  font-weight: 600;
  border: none;
  color: white;
  padding: 15px 32px;
  border-radius: 0.2vw;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-right: 25px;
  font-size: 16px;
  background-color: #98B5A4;
  color:#072104;

  @media screen and (max-width: 820px) {
    display: none;
  }

  @media screen and (max-width: 390px) {
    display: none;

  }


`;

export const TxtNew = styled.li`
  list-style-type: none;
  border: none;
  font-weight: 600;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 25px;
  border-radius: 0.2vw;
  background-color: #98B5A4;
  color:#072104;

  @media screen and (max-width: 820px) {
    display: none;

  }

  @media screen and (max-width: 390px) {
    display: none;

  }


`;

export const TxtRegistrate = styled.li`
  list-style-type: none;
  font-weight: 600;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 0.2vw;
  border-bottom: 2px solid #98B5A4;
  background-color: #98B5A4;
  color:#072104;

  @media screen and (max-width: 820px) {
    display: none;

  }

  @media screen and (max-width: 390px) {
    display: none;

  }




`;



