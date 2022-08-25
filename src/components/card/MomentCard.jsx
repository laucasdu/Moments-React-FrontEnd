import React from 'react'
import { Link } from "react-router-dom";
import { localAuthService } from '../../services/localAuthService';

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
  User,
  Num,
  CtUserName,
  NumHeart
} from './MomentCard.styled';


function MomentCard({moment, deleteMoment, likes, isLiked}) {

  // console.log(moment)

  return (

    <CtCard>
      <CtUser>
      <User>
        <UserPhoto src={moment.creator.userImg} alt={moment.creator.username}></UserPhoto>
      </User>
      <CtUserName>
        <UserName>{moment.creator.username}</UserName> 
      </CtUserName>
      </CtUser>
      <CtImage>
      <Link to = {`/moments/${moment.id}`}>
          <Imatge src={moment.imgUrl}/>
          </Link>
      </CtImage>
      <CtCardInfo>

        <CtIcons>


          {moment.liked ? (
            <>


          <NumHeart>{moment.likesCount}</NumHeart>
          <BtFav onClick={() => likes(moment.id)} isLiked={isLiked}>
          <i className="fa-solid fa-heart"></i></BtFav>
          </>
          ) : (
           <>
          <NumHeart>{moment.likesCount}</NumHeart>
          <BtFav onClick={() => likes(moment.id)}>
          <i className="fa-regular fa-heart"></i></BtFav>

          </>
            )}


          <BtComment>
          <Anchor href={`/moments/${moment.id}`}><span>
          <i className="fa-regular fa-comment-dots fa-2x fa-lg"></i></span></Anchor></BtComment>
          <Num>{moment.commentCount}</Num>
          </CtIcons>
          <CtIconsModify>
         
          {localAuthService.isAuthor(moment) && (
          <>
         <BtEdit>
         <Anchor href={`/form/${moment.id}`}><span>
         <i className="fa-solid fa-pen-to-square"></i></span></Anchor></BtEdit>

          <BtDelete onClick={() => deleteMoment(moment.id)}>
          <i className="fa-solid fa-trash-can"></i></BtDelete>
          </>
          )}
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