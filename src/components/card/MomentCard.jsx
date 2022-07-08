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
  Anchor,
  CtUser,
  UserPhoto,
  UserName,
  User
} from './MomentCard.styled';


function MomentCard({moment, deleteMoment}) {


  return (

    <CtCard>
      <CtUser>
        <UserPhoto><i className="fa-solid fa-circle-user"></i></UserPhoto>
        <User>laucasdu</User>
        <UserName>{moment.user}</UserName>
      </CtUser>
      <CtImage>
      <Link to = {`/moments/${moment.id}`}>
          <Imatge src={moment.imgUrl}/>
          </Link>
      </CtImage>
      <CtCardInfo>
        <CtIcons>
          <BtFav><i className="fa-regular fa-thumbs-up fa-2x fa-lg"></i></BtFav>
          <BtComment><i className="fa-regular fa-comment-dots fa-2x fa-lg"></i></BtComment>
        </CtIcons>
        <CtIconsModify>

          {/* <BtEdit onClick={() => editMoment(moment.id)}>
            <Link to="/update">
         <i className="fa-solid fa-pen-to-square"></i></Link></BtEdit> */}


         <BtEdit>
         <Anchor href={`/form/${moment.id}`}><span>
         <i className="fa-solid fa-pen-to-square"></i></span></Anchor></BtEdit>


          <BtDelete onClick={() => deleteMoment(moment.id)}>
          <i className="fa-solid fa-trash-can"></i></BtDelete>

        </CtIconsModify>
        </CtCardInfo>
        <CtTxt>
          <TxtTitle>{moment.title}</TxtTitle>
          <TxtDescription>{moment.description}</TxtDescription>
        </CtTxt>
    </CtCard>
  )

}

export default MomentCard