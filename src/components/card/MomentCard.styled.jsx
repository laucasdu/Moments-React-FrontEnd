import styled from "styled-components";


export const CtCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5%;
  filter: drop-shadow(2px 1px 6px #7a8188 );
  position: relative;
  background-color: white;
  margin-top: 20%;
  border-top: 3px solid #1D0B29;
  transition: 0.4s;
  &:hover {
    transform: scale(0.96, 0.96);
    opacity: 0.8;

  }


`;

export const CtImage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80%;
    overflow-x: hidden;
    overflow: hidden;



`;

export const Imatge = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;



`;

export const CtUser = styled.div`
    background-color: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 20%;
    width: 25%;
    align-items: flex-end;
    margin-right: 1%;
    
`
export const ImgUser = styled.button`
    z-index: 1;
    border: none;
    background-color: var(--green_blue);
    color: var(--light_green_blue);
    width: 1.9rem;
    height: 0.5rem;
    right: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    cursor: pointer; 
`

export const UserText = styled.button`
    width: 50%;
    transition-duration: 0.4s;
    background-color: #bdbdc3;
    color:#252839;
    cursor: pointer; 
    border: none;  
`
export const CtCardInfo = styled.div`
   display: flex;
  margin-top: 2%;  
`

export const CtIcons = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-start;
    
`

export const ButtonFav = styled.button`
  color: red;
  background-color: transparent;
  border: none;
  margin-right: 2%;
  cursor: pointer;
  &:hover {
    color: grey;
  }
   
`
export const ButtonStar = styled.button`
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
export const ButtonEdit = styled.button`
  color: black;
  background-color: transparent;
  border: none;
  margin-right: 2%;
  cursor: pointer;
  &:hover {
    color: grey;
  }
 
`
export const ButtonDelete = styled.button`
  color: black;
  background-color: transparent;
  border: none;
  margin-right: 2%;
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