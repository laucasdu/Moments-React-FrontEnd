import styled from "styled-components";

export const Container = styled.div`
  display : flex;
    align-items: flex-end;
    justify-content: center;

  @media (max-width: 450px) {
    padding-top: 30%;
  }
`;

export const CtMoment = styled.div`
  align-items: center;
  display: flex;
  border-radius: 0.2vw;
  position: fixed;
  top: 43%;
  padding: 2%;
  width: 60%;
  background-color: white;
  filter: drop-shadow(2px 1px 6px #7a8188 );

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25%;
  }
`;


export const CtImage = styled.div`
  width: 50%;
  &:hover {
    opacity:0.8;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ImageUrl = styled.img`
  width: 100%;
  border-radius: 0.2vw;

  &:hover {

  }

  /* box-shadow: 0 0 8px grey; */
  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
  }
`;


export const CtComments = styled.div`
  height: 337px;  
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50%;
  border-radius : 8px;
  position: relative;
`;

export const TxtListComments = styled.h3`
    font-size: 30px;
    text-shadow: 1px 2px 2px #D5E0DC;
    color:#98B5A4;
    margin-top: -1%;
    border-bottom: 4px solid #D5E0DC;

`;

export const TxtComments = styled.p`
    margin-bottom: 2%;
    color: #072104;
    font-size: 22px;
    align-items: right;

  `;

