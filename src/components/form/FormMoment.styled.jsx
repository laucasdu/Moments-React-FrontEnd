import styled from "styled-components";

export const CtForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: row;
`;

export const Form = styled.form`
  width: 55%;
  height: 61%;
  flex-direction: column;
  /* border-style: solid; */
  filter: drop-shadow(2px 1px 6px #7a8188 );
  /* border-color: #1D0B29; */
  padding: 3%;
  border-radius: 0.2vw;
  position: fixed;
  top: 20%;
  background-color: white;

  @media (max-width: 450px) {
    height: 300px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 500;

  @media (max-width: 450px) {
    padding: 5%;
    margin-bottom: 5%;
    width: 90%;
    font-size: 1.2em;
  }
`;

export const InputDescription = styled.textarea`
  resize: none;
  border-radius: 0.2vw;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  font-weight: 500;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace;

  @media (max-width: 450px) {
    padding: 5%;
    margin-bottom: 5%;
    width: 90%;
    font-size: 1.2em;
  }
`;

export const BtEdit = styled.button`
  color:black;
  width: 50%;
  height: 40px;
  font-size: small;
  align-items: center;
  margin-top: 20px;
  margin-right: 10px;
  background-color: #98B5A4;
  border: none;
  font-weight: 800;
  color:#072104;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 0.2vw;


  &:hover {
    color: #1D0B29;
  }
  @media (max-width: 450px) {
    position: absolute;
    top: 85%;
    left: 45%;
    font-size: 1.2em;
  }
`;

export const BtCancel = styled.button`
  color:black;
  width: 50%;
  height: 40px;
  font-size: small;
  background-color: none;
  align-items: center;
  margin-top: 20px;
  background-color: #98B5A4;
  border: none;
  font-weight: 800;
  color:#072104;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 0.2vw;



  &:hover {
    color: #1D0B29;
  }
  @media (max-width: 450px) {
    position: absolute;
    top: 85%;
    left: 45%;
    font-size: 1.2em;
  }
`;


export const CtButton = styled.div`
 display: flex;
 flex-direction: row;
 width: 100%;
 color:#072104;

  &:hover {
    color: #1D0B29;
  }

  @media (max-width: 450px) {
    position: absolute;
    top: 85%;
    left: 45%;
    font-size: 1.2em;
  }
`;

export const CtTxt = styled.h1`
  color:black;
  font-size: small;
  background-color: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 2%;
`;

export const CtTitlePrincipal = styled.div`
  display: flex;
  background-color: #98B5A4;
  border-radius: 0.2vw;

`;

export const TxtPrincipal = styled.h1`
  color:#072104;
  padding-left: 45%;
  font-size: 30px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

`;


