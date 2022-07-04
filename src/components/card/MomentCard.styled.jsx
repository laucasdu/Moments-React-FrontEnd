import styled from "styled-components";

export const Anchor = styled.a`
  text-decoration: none;
  color: black;
`;

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

  @media screen and (max-width: 820px) {
    width: 350px;
    height: 350px;
    margin-left: 8%;
    
  }

  @media screen and (max-width: 415px) {
    width: 400px;
    height: 450px;
    font-size: 1.5rem;
    margin-left: 13%;
    margin-top: 1%;
  }

`;

export const CtImage = styled.div`
    border-top: 5px solid #072104;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
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
export const CtUser = styled.div`
  display: flex;
  flex-direction: row

`;

export const UserPhoto = styled.p`
align-items: flex-end;
margin-left: 5%;
`;

export const User = styled.image`
width: 20%;
margin-top: 5%;
align-items: flex-start;
justify-content: space-between;
`;

export const UserName = styled.h5`
  font-size: large;
  font-weight: 400;
`;