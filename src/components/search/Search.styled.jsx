import styled from "styled-components";

//Search
export const CtSearch = styled.form`
  position: absolute;
  width: 100%;
  display: flex;
  margin: -143px auto 0 auto;
  /* justify-content: center; */
  /* border-radius: 8rv; */
  /* align-items: center; */
  /* box-shadow: 0 2px 20px #98B5A4;  */
  /* background-color: #98B5A4;  */
  transform: scale(0.4);
  border: 2px solid #98B5A4; 
`;

export const Input = styled.input`
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height: 12vh; */
  /* min-width: 10rem; */
  position: relative;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
  border: none;
  padding: 0 4rem 0 1.5rem;
  /* border-radius: 0.2vw; */
  font-size: 50px;
  outline: none;
  background-color: #98B5A4;
  color:#072104;
`;

export const BtSearch = styled.button`
  padding: 35px;
  width: 25%;
  background: #072104;
  color: white;
  float: left;
  text-align: center;
  font-size: 50px;
  cursor: pointer;
  /* transition: 0.3s; */
  border-radius: 0;
`;

export const searchContainer = styled.form`
  position: absolute;
  /* width: 50%; */
  display: flex;
  /* margin: -143px auto 0 auto; */
  /* justify-content: center; */
  /* border-radius: 8rv; */
  /* align-items: center; */
  /* box-shadow: 0 2px 20px #98B5A4;  */
  /* background-color: #98B5A4;  */
  /* transform: scale(0.6); */
  border: 2px solid #98B5A4; 
`;