import React from 'react'
import { Link } from "react-router-dom";

import { 
  CtCard, 
  CtImage,
  CtCardInfo,
  CtIcons, 
  CtIconsModify, 
  BtDelete, 
  BtEdit,
  BtComment,
  Imatge,
  BtFav, 
  TxtDescription,
  TxtTitle,
  CtTxt,
} from './MomentCard.styled';


function MomentCard({moment, deleteMoment, editMoment}) {


  return (

    <CtCard>
      <CtImage>
      <Link to = {`/moment/${moment.id}`}>
          <Imatge src={moment.imgUrl}/>
          </Link>
      </CtImage>
      <CtCardInfo>
        <CtIcons>
          <BtFav><i className="fa-regular fa-thumbs-up fa-2x fa-lg"></i></BtFav>
          <BtComment><i className="fa-regular fa-comment-dots fa-2x fa-lg"></i></BtComment>
        </CtIcons>
        <CtIconsModify>
          <BtEdit onClick={() => editMoment(moment.id)}>
            <Link to="/form">
         <i className="fa-solid fa-pen-to-square"></i></Link></BtEdit>
          <BtDelete onClick={() => deleteMoment(moment.id)}>
          <i className="fa-solid fa-trash-can"></i></BtDelete>
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