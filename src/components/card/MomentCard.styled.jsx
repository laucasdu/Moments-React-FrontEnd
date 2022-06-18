import styled from "styled-components";


export const CtCard = styled.div`
  
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin: 5%;
  filter: drop-shadow(2px 1px 6px #7a8188 );
  position: relative;
  border-radius : 8px;  
  transition-duration: 0.25s;
`;

export const CtImage = styled.div`
   background-color: #212F3D;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80%;
    overflow-x: hidden;
    border-radius: 8px 8px 0px 0px;
    overflow: hidden;
`;

export const Imatge = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const CtTxt = styled.div`
    background-color: #E0DCDC;
    width: 100%;
    position: relative;
    display: flex;
    margin:auto;
    border-radius : 8px;  
    flex-direction: row;
    margin-top: -1.5%;
    padding-top: 4%;

`;

export const CtText = styled.div`
    background-color: #E0DCDC;
    width: 100%;
    position: relative;
    display: flex;
    margin:auto;
    flex-direction: row;
    margin-top: -1.5%;
    padding-top: 4%;
    
`;

export const TxtTitle = styled.h3`
background-color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    
`
