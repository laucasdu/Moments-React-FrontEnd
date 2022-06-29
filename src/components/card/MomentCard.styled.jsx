import styled from "styled-components";

export const CtCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  filter: drop-shadow(2px 1px 6px #7a8188 );
  position: relative;
  background-color: white;
  margin-top: 20%;
  transition: 0.4s;
  
  &:hover {
    transform: scale(0.96, 0.96);
    opacity: 0.8;
  }
`;


export const CtImage = styled.div`
    border-top: 5px solid #072104;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80%;
    overflow: hidden;
`;

export const Imatge = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const CtCardInfo = styled.div`
   display: flex;
  margin-top: 2%;  
`;

export const CtIcons = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-start;  
`;

export const BtFav = styled.button`
  background-color: transparent;
  margin-left: 6%;
  border: none;
  margin-right: 2%;
  cursor: pointer;
  &:hover {
    color: grey;
  }
   
`
export const BtComment = styled.button`
  color: black;
  background-color: transparent;
  border: none;
  margin-right: 2%;
  cursor: pointer;
  &:hover {
    color: grey;
  }
    
`
export const CtIconsModify = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
   
`
export const BtEdit = styled.button`
  color: black;
  background-color: transparent;
  border: none;
  margin-right: 5%;
  cursor: pointer;
  &:hover {
    color: grey;
  }
 
`
export const BtDelete = styled.button`
  color: black;
  background-color: transparent;
  border: none;
  margin-right: 6%;
  cursor: pointer;
  &:hover {
    color: grey;
  }
 
`
export const CtTxt = styled.div`
    background-color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`;
export const TxtTitle = styled.h2`
  font-size: 1.2em;
  font-weight: bold;
  margin-left: 2%;
  color: black;
`;

export const TxtDescription = styled.p`
  font-size: 1em;
  margin-left: 2%;
  color: black;
  margin-top: -3%;
  //tallar text
  /*
  width:95%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;*/
`;