import styled from "styled-components";

export const Ct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
`;

export const CtForm = styled.form`
  width: 60%;
  height: 50%;
  display: flex;
  border-style: solid;
  border-color: #1D0B29;
  padding: 3%;
  border-radius: 1vw;
  position: fixed;
  top: 30%;
  background-color: white;

  @media (max-width: 450px) {
    height: 300px;
  }
`;

export const CtInput = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2.3%;
  display: flex;

  @media (max-width: 450px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 8%;
    display: flex;
  }
`;

export const Input = styled.input`
  background-color: #1D0B29;
  padding: 3%;
  border-radius: 0.8vw;
  border-style: solid;
  border-color: white;
  font-size: 0.9em;
  width: 93%;
  color: black;
  margin-bottom: 2%;

  @media (max-width: 450px) {
    padding: 5%;
    margin-bottom: 5%;
    width: 90%;
    font-size: 1.2em;
  }
`;

export const InputDescription = styled.textarea`
  background-color: #1D0B29;
  background-color: #1D0B29;
  padding: 3%;
  border-radius: 0.8vw;
  border-style: solid;
  border-color: white;
  font-size: 0.9em;
  width: 93%;
  color: black;
  margin-bottom: 2%;

  @media (max-width: 450px) {
    padding: 5%;
    margin-bottom: 5%;
    width: 90%;
    font-size: 1.2em;
  }
`;

export const BtEdit = styled.button`
  background-color: transparent;
  color: #1D0B29;
  width: 5%;
  border: none;
  border-radius: 50%;
  position: absolute;
  top: 100%;
  margin-top: -5%;
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
  background-color: transparent;
  color: #1D0B29;
  width: 5%;
  border: none;
  position: absolute;
  top: 100%;
  margin-top: -5%;
  left: 20%;
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
