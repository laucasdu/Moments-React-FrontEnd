import styled from "styled-components";

//Navbar
export const CtNavbarMobil = styled.div`
  display: none;
  /* border:2px solid red;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 20vw;
  background-color: #072104; */

  @media screen and (max-width: 820px) {
    /* border:2px solid red;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30vw;
    background-color: #072104; */
    bottom:0;
    border: 2px solid red;
  }

  @media screen and (max-width: 415px) {
    /* width: 100vw; */

    /* margin-bottom: 6%; */

  }
`;