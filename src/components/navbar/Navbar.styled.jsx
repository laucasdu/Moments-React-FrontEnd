import styled from "styled-components";


export const CtNavbar = styled.div`
  display: flex;
  width: 100vw;
  background-color: #072104;
  /* background-color: #1D0B29; */

`;

export const CtLogo = styled.div`
  height: 100%;
  width: 10%;
  margin-left: 2%;
  margin-right: 15%;
  font-size: 0,5em;
  display: flex;
`;

export const TxtLogo = styled.h1`
   color: #EAD9F6;
  &:hover,
  :active,
  :link,
  :visited {
    text-decoration: none;
  }
`;


export const TxtHome = styled.h1`
  color: white;
`;


export const CtSearch = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Input = styled.div`
  width: 100%;
  height: 6vh;
  min-width: 10rem;
  position: relative;
  border: none;
  padding: 0 4rem 0 1.5rem;
  border-radius: 0.5vw;
  font-size: smaller;
  outline: none;
  color:#EAD9F6;
  background-color: rgba(249, 249, 249, 0.1843137255);
  --webkit-backdrop-filter: blur( 0.7rem );
`;

export const BtSearch = styled.div`
  background: none;
  color:#EAD9F6;
  border: none;
  position: absolute;
  right: 2%;
`;


export const TxtBtHome = styled.div`
  background: none;
  border: none;
  font-family: 'Courier New', Courier, monospace;
  margin-left: 0.5rem;
  padding: 0.5rem, 1.3rem;
  border-radius: 1.5rem;
  color: white;
  font-size: 16px;
  font-weight: 800;
  white-space: nowrap;
`;


export const CtInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 5%;
  
`;


export const BtCreate = styled.div`
  align-items: center;
  border: none;
  color: #EAD9F6;
  font-weight: bold;
  justify-content: space-around;

  font-size: 0.7em;
  width: 10%;
  &:active,
  :hover {
    color: grey;
  }
`;

export const BtLogin = styled.div`
  border: none;
  color: #EAD9F6;
  font-weight: bold;
  align-items: center;
  justify-content: space-around;


  font-size: 0.7em;
  width: 10%;
  &:active,
  :hover {
    color: grey;
  }
`;

export const BtHome = styled.div`
  border: none;
  justify-content: space-around;

  color: #EAD9F6;
  font-weight: bold;
  font-size: 0.7em;
  width: 10%;


  &:active,
  :hover {
    color: grey;
  }
`;