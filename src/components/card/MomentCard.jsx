import axios from 'axios';
import React from 'react'
import { 
  CtCard, 
  CtUser,
  ImgUser,
  CtImage,
  CtCardInfo,
  CtIcons, 
  CtIconsModify, 
  ButtonEdit, 
  ButtonDelete, 
  ButtonStar,
  Imatge,
  ButtonFav, 
  TxtDescription,
  TxtTitle,
  CtTxt


} from './MomentCard.styled';


function MomentCard({moment}) {


  return (

    <CtCard>
      <CtUser>
          <ImgUser><i className="fa-solid fa-circle-user"></i></ImgUser>
      </CtUser>
      <CtImage>
          <Imatge  src={moment.imgUrl} />
      </CtImage>
      <CtCardInfo>
        <CtIcons>
          <ButtonFav><i className="fa-solid fa-heart"></i></ButtonFav>
          <ButtonStar><i className="fa-solid fa-star"></i></ButtonStar>
        </CtIcons>
        <CtIconsModify>
          <ButtonEdit><i className="fa-solid fa-pen-to-square"></i></ButtonEdit>
          <ButtonDelete><i className="fa-solid fa-trash-can"></i></ButtonDelete>
        </CtIconsModify>
        </CtCardInfo>
        <CtTxt>
          <TxtTitle>{moment.title}</TxtTitle>
          <TxtDescription>Lorem ipsum...</TxtDescription>
        </CtTxt>
    </CtCard>
  )

}

export default MomentCard