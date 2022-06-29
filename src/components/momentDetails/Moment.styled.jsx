import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10%;
  display: flex;
  justify-content: center;

  @media (max-width: 450px) {
    padding-top: 30%;
  }
`;

export const CtMoment = styled.div`
  border-style: solid;
  border-color: #1D0B29;
  align-items: center;
  display: flex;
  border-radius: 1vw;
  padding: 2%;
  width: 75%;

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25%;
  }
`;

export const CtTxt = styled.div`
  width: 50%;
  height: 100%;
  padding-left: 3vw;

  @media (max-width: 450px) {
    width: 100%;
    margin-top: -8%;
  }
`;

export const CtImage = styled.div`
  width: 50%;
  border-radius: 1vw;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 1vw;
  box-shadow: 0 0 8px grey;

  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
  }
`;

export const TxtTitle = styled.h1`
  color: #1D0B29;
  border-bottom: 1px solid #1D0B29;
`;

export const TxtDescription = styled.p`
  color: #1D0B29;
  font-size: 1.1em;

  @media (max-width: 450px) {
    margin-top: -8%;
  }
`;
