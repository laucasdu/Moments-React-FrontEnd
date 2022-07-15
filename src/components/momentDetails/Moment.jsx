import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { commentServices } from '../../services/commentServices';
// import { commentServices } from '../../services/commentServices';
import { momentServices } from '../../services/momentServices'
import {
  Container,
  ImageUrl,
  CtMoment,
  CtComments,
  TxtListComments,
  TxtComments,
  CtImage,
} from "./Moment.styled";


function Moment() {

  const [momentDetails, setMomentDetails] = useState([]);
  const [commentMoment, setCommentMoment] = useState([]);
  const {id} = useParams();

  useEffect(
    () => {
      getMomentById(id);
    },
    [id]
  );

  useEffect(
    () => {
      if(!momentDetails)return},
    [commentMoment])
  

   // Funció que agafa un moment segons el seu id 
  const getMomentById = () => {
    momentServices.getMomentById(id).then((res) => {
      if(res){
        setMomentDetails(res);
        getCommentByMomentid();
      }
      // console.log(res);
  });
      
  }

  // Funció que agafa un comentari segons el seu id 
  const getCommentByMomentid = () => {
    commentServices.getCommentsByMomentId(id).then((res) => {
      setCommentMoment(res);
    });
  };
  

    return (
      
      <Container>
      <CtMoment>
      <CtImage>
          <ImageUrl src={momentDetails.imgUrl} alt="momentfoto" />
        </CtImage>

        {/* <CtTxt>
          <TxtTitle>{momentDetails.title}</TxtTitle>
          <TxtDescription>{momentDetails.description}</TxtDescription>
        </CtTxt> */}
      
      <CtComments>
      <TxtListComments>COMMENTS</TxtListComments>

      {commentMoment.map((commentMoment, key) => (
        <TxtComments key={key} commentMoment={commentMoment}>{commentMoment.comment}</TxtComments>
      ))}

      </CtComments>
      </CtMoment>
    </Container> 
  );
}
      
export default Moment