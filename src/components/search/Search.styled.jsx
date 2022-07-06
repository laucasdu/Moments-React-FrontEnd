import styled from "styled-components";

//Search
export const CtSearch = styled.form`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 20%; */
  z-index: -120px;
  position: relative;
  /* position: fixed; */
  margin-left: 15%;

`;

export const Input = styled.input`
justify-content: center;
align-items: center;
  width: 100%;
  height: 6vh;
  min-width: 10rem;
  position: relative;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
  border: none;
  padding: 0 4rem 0 1.5rem;
  border-radius: 0.2vw;
  font-size: 14px;
  outline: none;
  background-color: red;

  
`;

export const BtSearch = styled.button`
  background: none;
  color:#98B5A4;
  border: none;
  position: absolute;
  right: 2%;
`;
