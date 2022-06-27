import styled from "styled-components";


export const CtNavbar = styled.div`
  display: flex;
  width: 100vw;
  background-color: #1D0B29;
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

export const CtSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-right: 10%;
  align-items: center;
  position: relative;
`;

export const InputSearch = styled.div`
  width: 100%;
  height: 6vh;
  min-width: 10rem;
  position: relative;
  border: none;
  padding: 0 4rem 0 1.5rem;
  border-radius: 1.5rem;
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

export const BtInfo = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 3%;
`;

export const BtCreate = styled.div`
  border: none;
  color: #EAD9F6;
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
  color: #EAD9F6;
  font-weight: bold;
  font-size: 0.5em;
  width: 10%;
  &:active,
  :hover {
    color: grey;
  }
`;

export const BtHome = styled.div`
  border: none;
  color: #EAD9F6;
  font-weight: bold;
  font-size: 0.5em;
  width: 10%;
  &:active,
  :hover {
    color: grey;
  }
`;