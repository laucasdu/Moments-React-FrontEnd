import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { momentServices } from '../../services/momentServices'
import {
  Container,
  ImageUrl,
  CtMoment,
  CtTxt,
  CtImage,
  TxtTitle,
  TxtDescription
} from "./Moment.styled";


function Moment() {

  const [moment, setMoment] = useState();
  const {id} = useParams();

  useEffect(
    () => {
      getMomentById();
    },
    [id]
  );


  const getMomentById = () => {
    momentServices.getMomentById(id).then((res) => {
      if(res) {
      setMoment(res);
      // console.log(res);

      }
    });
  
  };


  if(moment)
    return (
      
      <>

        {moment ? 
        <Container>
        <CtMoment>
        <CtImage>
            <ImageUrl src={moment.imgUrl} alt="momentfoto" />
          </CtImage>
          <CtTxt>
            <TxtTitle>{moment.title}</TxtTitle>
            <TxtDescription>{moment.description}</TxtDescription>
          </CtTxt>
        </CtMoment>
      </Container>
        : "cargando"
  
        }
    
    </>
  )
}

export default Moment