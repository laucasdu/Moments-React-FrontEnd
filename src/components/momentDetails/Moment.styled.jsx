import styled from "styled-components";

export const Container = styled.div`
    display : flex;
    align-items: flex-end;
    justify-content: center;

  @media screen and (max-width: 820px) {
  flex-direction: column;
  align-items: center;
  height: 100vh;
  }
  @media screen and (max-width: 415px) {
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
    padding-top: 25%;
    /* height: 100vh; */
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

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
    top: 23%;
    height: 60%;
  }

  @media screen and (max-width: 415px) {
    width: 80%;
    height: 60vh;
    top: 22%;
  }
`;


export const CtImage = styled.div`
  width: 100%;
  
  &:hover {
    opacity:0.8;
  }

  @media screen and (max-width: 820px) {

}
  @media screen and (max-width: 415px) {

  }

`;

export const ImageUrl = styled.img`
  width: 100%;
  /* margin-left: 50px; */
  border-radius: 0.2vw;

  @media screen and (max-width: 820px) {
  }
  @media screen and (max-width: 415px) {

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
  width: 100%;


  @media screen and (max-width: 820px) {
    margin-top: -2%;
    width: 100%;

  }

  @media screen and (max-width: 415px) {
    margin-top: 5%;
  }




`;

export const TxtListComments = styled.h3`
    font-size: 30px;
    text-shadow: 1px 2px 2px #D5E0DC;
    color:#98B5A4;
    margin-top: -1%;
    border-bottom: 4px solid #D5E0DC;


    @media screen and (max-width: 820px) {
    margin-top: 5%;
    width: 100%;

  }

  @media screen and (max-width: 415px) {
    margin-top: 5%;
  }

`;

export const TxtComments = styled.p`
    margin-bottom: 2%;
    color: #072104;
    font-size: 22px;
    align-items: right;

    @media screen and (max-width: 820px) {
    margin-top: 5%;
    width: 100%;
  }

  @media screen and (max-width: 415px) {
    margin-top: 5%;
  }

  `;

