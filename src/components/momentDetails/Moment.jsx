import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { momentServices } from '../../services/momentServices'
import {
  Container,
  Image,
  CtMoment,
  CtTxt,
  CtImage,
  TxtTitle,
  TxtDescription
} from "./Moment.styled";


function Moment() {

  const [moment, setMoment] = useState([]);
  
  const {id} = useParams();

  useEffect(
    () => {
      getMomentById(id);
    },
    [id]
  );

  const getMomentById = (id) => {
    momentServices.getMomentById(id).then((res) => {
      setMoment(res);
      // console.log(res);
    });
  };

    return (
      <>
        <Container>
          <CtMoment>
          <CtImage>
              <Image src={moment.imgUrl} alt="momentfoto" />
            </CtImage>
            <CtTxt>
              <TxtTitle>{moment.title}</TxtTitle>
              <TxtDescription>{moment.description}</TxtDescription>
            </CtTxt>
          </CtMoment>
        </Container>
    
    </>
  )
}

export default Moment