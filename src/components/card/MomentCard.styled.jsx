import styled from "styled-components";

export const Anchor = styled.a`
  text-decoration: none;
  color: #345226;

  &:hover {
    color: #98B5A4;
  }
`;

export const CtCard = styled.div`
  display: flex;
  /* border-radius: 5%; */
  /* position: relative; */
  flex-direction: column;
  /* margin: 5%; */
  filter: drop-shadow(2px 1px 6px #7a8188 );
  position: relative;
  background-color: white;
  margin-top: 20%;
  transition: 0.4s;
  width: 100%;
  
  &:hover {
    transform: scale(0.96, 0.96);
    opacity: 0.8;
  }

  @media screen and (max-width: 820px) {
    /* margin: 25px; */
    width: 90%;
    
  }

  @media screen and (max-width: 390px) {
    width: 100%;
    /* margin-left: 18%; */

  }

`;

export const CtImage = styled.div`
   border-top: 5px solid #072104;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 65%;
    overflow: hidden;
`;

export const Imatge = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 820px) {
    
  }
  @media screen and (max-width: 390px) {
  }
`;

export const CtCardInfo = styled.div`
  display: flex;
  margin-top: 2%;  
`;

export const CtIcons = styled.div`
  display: flex;
  margin-top: 2%;
  width: 60%;
  justify-content: flex-start;  
`;



// export const BtFav = styled.button`
//   background-color: transparent;
//   color: #345226;
//   font-size: 24px;
//   margin-left: 6%;
//   border: none;
//   top:69%;
//   color:${ ({isLiked}) => isLiked ? "red" : "#345226"};
//   margin-right: 10%;
// `;






export const BtFav = styled.button`
  background-color: transparent;
  /* color: #345226; */
  position: absolute;
  border: none;
  font-size: 25px;
  top: 1.3em;
  right: 1.6em;
  color:${ ({isLiked}) => isLiked ? "red" : "#345226"};
  overflow: hidden;
  cursor: pointer;
  /* cursor: pointer;
  &:hover {
    color: #98B5A4;
  } */


  @media screen and (max-width: 820px) {
    font-size: 25px;
  }

  @media screen and (max-width: 390px) {

  }
   
`
export const BtComment = styled.button`
  color: #345226;
  font-size: 22px;
  margin-left: 1em;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: #98B5A4;
  }

  @media screen and (max-width: 820px) {
    font-size: 25px;

    
  }

  @media screen and (max-width: 390px) {
    font-size: 18px;

  }
    
`
export const CtIconsModify = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
   
`
export const BtEdit = styled.button`
  color: #345226;
  font-size: 22px;
  background-color: transparent;
  border: none;
  margin-right: 5%;
  cursor: pointer;

  &:hover {
    color: #98B5A4;
  }

  @media screen and (max-width: 820px) {
    font-size: 25px;
  }

  @media screen and (max-width: 390px) {
    font-size: 18px;
  }

`;


export const BtDelete = styled.button`
  color: #345226;
  background-color: transparent;
  border: none;
  font-size: 22px;
  margin-right: 6%;
  cursor: pointer;

  &:hover {
    color: #98B5A4;
  }

  @media screen and (max-width: 820px) {
    font-size: 25px;
  }

  @media screen and (max-width: 390px) {
    font-size: 18px;
  }
 
`;

export const CtTxt = styled.div`
  background-color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const TxtTitle = styled.h2`
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 2%;
  color: black;

  @media screen and (max-width: 820px) {
    font-size: 29px;
  }

  @media screen and (max-width: 390px) {
    font-size: 23px;
  }

`;


export const TxtDescription = styled.p`
  font-size: 1.4em;
  margin-left: 2%;
  color: #345226;
  margin-top: -3%;

  @media screen and (max-width: 800px) {
    font-size: 22px;
  }

  @media screen and (max-width: 390px) {
    font-size: 22px;
  }
  
`;

export const CtUser = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 25px;
  color: #345226;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {

  }

  @media screen and (max-width: 390px) {
  }

`;

export const User = styled.div`
width: 4.5em;
height: 3em;
/* border-radius: 90%; */
padding-right: 5%;
margin-left: 5%;
bottom: 6em;
z-index: 10;
overflow: hidden;

&:hover {
  /* width: 3.5em;
  height: 3.5em; */
  /* transition: all 0.2s ease-in-out; */
}
/* border: 1px solid red; */

@media screen and (max-width: 800px) {
  width: 1em;
  }

  @media screen and (max-width: 390px) {
    width: 8em;
  }


`;

export const UserPhoto = styled.img`
  width: 110%;
  height: 120%;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 800px) {
    width: 110%;

  }

  @media screen and (max-width: 390px) {
  }
`;

export const CtUserName = styled.div`
width: 40%;
margin-right: 40%;

@media screen and (max-width: 820px) {
  width: 4em;

  }

  @media screen and (max-width: 390px) {
    width: 9em; 

  }

`;



export const UserName = styled.h5`
margin-left: 4%;

`;

export const Num = styled.h2`
color: #345226;
/* text-shadow: 1px 1px 4px #072104; */
font-size: 1.2em;
right: 2em;
top: 19.50em;

@media screen and (max-width: 820px) {
  /* top: 18em; */
  /* font-size: 1.3em; */
  /* left: 4.2em; */


}

@media screen and (max-width: 390px) {
  left: 3em;


}

`;

export const CtPunts = styled.div`
width: 30%;

@media screen and (max-width: 800px) {
    font-size: 25px;
  }

  @media screen and (max-width: 390px) {
    margin-right: 5%;
  }

`;

// export const Punts = styled.p`
// color: #345226;
// font-size: 25px;

// `;


// export const NumHeart = styled.h2`
// color: #345226;
// text-shadow: 1px 2px 4px #072104;
// top:68%;
// left:14%;
// position: fixed;
// `;


export const NumHeart = styled.h2`
position: absolute;
color: #345226;
top: 1.2em;
right: 1.3em;
font-family: Arial, Helvetica, sans-serif;
font-size: 1.2em;
font-weight: 800;

`;

