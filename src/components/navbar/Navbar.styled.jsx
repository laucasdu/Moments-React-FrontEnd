import styled from "styled-components";


export const CtNavbar = styled.div`
  display: flex;
  width: 100vw;
  height: 5vw;
  background-color: red;
`;

export const CtLogo = styled.div`
  height: 100%;
  width: 10%;
  margin-left: 2%;
  margin-right: 5%;
  font-size: 0,5em;
  display: flex;
  align-items: center;
`;

export const TxtLogo = styled.h1`
   color: black;
  &:hover,
  :active,
  :link,
  :visited {
    text-decoration: none;
  }
`;

export const CtSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const InputSearch = styled.div`
  width: 95%;
  height: 6vh;
  min-width: 10rem;
  position: relative;
  border: none;
  color: #289772;
  padding: 0 4rem 0 1.5rem;
  border-radius: 1.5rem;
  font-size: smaller;
  outline: none;
  background-color: rgba(249, 249, 249, 0.1843137255);
  --webkit-backdrop-filter: blur( 0.7rem );
`;

export const BtSearch = styled.div`
  background: none;
  border: none;
  position: absolute;
  right: 2%;
`;

export const BtInfo = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BtCreate = styled.div`
  border: none;
  color: black;
  font-weight: bold;
  font-size: 0.5em;
  width: 10%;
  &:active,
  :hover {
    color: grey;
  }
`;

export const BtLogin = styled.div`
  border: none;
  color: black;
  font-weight: bold;
  font-size: 0.5em;
  width: 10%;
  &:active,
  :hover {
    color: grey;
  }
`;