import React from 'react'
import { Link } from "react-router-dom";

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
  CtTxt,
} from './MomentCard.styled';


function MomentCard({moment, deleteMoment, editMoment}) {


  return (

    <CtCard>
      <CtUser>
          <ImgUser><i className="fa-solid fa-circle-user"></i>
          <hr>
          </hr>
          laura
          </ImgUser>
      </CtUser>
      <CtImage>
      <Link to = {`/moment/${moment.id}`}>
          <Imatge src={moment.imgUrl} />
          </Link>
      </CtImage>
      <CtCardInfo>
        <CtIcons>
          <ButtonFav><i className="fa-solid fa-heart"></i></ButtonFav>
          <ButtonStar><i className="fa-solid fa-star"></i></ButtonStar>
        </CtIcons>
        <CtIconsModify>
          {/* <ButtonEdit onClick={() => editMoment(moment.id)}>
            <Link to="/form">
         <i className="fa-solid fa-pen-to-square"></i></Link></ButtonEdit> */}
           <Link to="/form">
         <i className="fa-solid fa-pen-to-square"></i></Link>
          <ButtonDelete onClick={() => deleteMoment(moment.id)}>
          <i className="fa-solid fa-trash-can"></i></ButtonDelete>
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