import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { commentServices } from '../../services/commentServices';
// import { commentServices } from '../../services/commentServices';
import { momentServices } from '../../services/momentServices'
import {
  Container,
  ImageUrl,
  CtMoment,
  CtTxt,
  CtImage,
  TxtTitle,
  TxtDescription,
  TxtComment,
  CtComment,
  CtTxtComment,
  CtComments,
  TxtListComments,
  TxtComments
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
  

  const getMomentById = () => {
    momentServices.getMomentById(id).then((res) => {
      if(res){
        setMomentDetails(res);
        getCommentByMomentid();
      }
      // console.log(res);
  });
      
  }

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
          <CtTxt>
            <TxtTitle>{momentDetails.title}</TxtTitle>
            <TxtDescription>{momentDetails.description}</TxtDescription>
          </CtTxt>
        <CtComments>
        <TxtListComments>Comments</TxtListComments>
        {commentMoment.map((commentMoment, key) => (
          <TxtComments key={key} commentMoment={commentMoment}>{commentMoment.comment}</TxtComments>
        ))}
              </CtComments>
            </CtMoment>
      </Container> 
    );
  }
      
export default Moment