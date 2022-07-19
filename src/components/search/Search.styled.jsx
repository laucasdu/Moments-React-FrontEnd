import styled from "styled-components";

//Search
export const CtSearch = styled.form`
  position: absolute;
  width: 100%;
  display: flex;
  margin: -143px auto 0 auto;
  
  transform: scale(0.4);
  border: 2px solid #98B5A4; 

  @media screen and (max-width: 820px) {
    display: none;
    
  }

  @media screen and (max-width: 415px) {
    display: none;

  }
`;

export const Input = styled.input`
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
  border: none;
  padding: 0 4rem 0 1.5rem;
  font-size: 50px;
  outline: none;
  background-color: #98B5A4;
  color:#072104;

  @media screen and (max-width: 820px) {
    display: none;
    
  }

  @media screen and (max-width: 415px) {
    display: none;

  }
`;

export const BtSearch = styled.button`
  padding: 35px;
  width: 25%;
  background: #072104;
  color: #98B5A4;
  float: left;
  text-align: center;
  font-size: 50px;
  cursor: pointer;

  :invalid ~ span:after {
    content: '✖';
    padding-left: 5px;
    position: absolute;
}

:valid ~ span:after {
    content: '✓';
    padding-left: 5px;
    position: absolute;
}

  @media screen and (max-width: 820px) {
    display: none;
    
  }

  @media screen and (max-width: 415px) {
    display: none;

  }
`;

export const searchContainer = styled.form`
  position: absolute;
  display: flex;
  
  border: 2px solid #98B5A4; 

  @media screen and (max-width: 820px) {
    display: none;
    
  }

  @media screen and (max-width: 415px) {
    display: none;

  }
`;

