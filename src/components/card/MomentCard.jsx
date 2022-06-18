import React from 'react'
import { CtCard, CtImage, CtTxt, Imatge, TxtTitle } from './MomentCard.styled';


function MomentCard({moment}) {

  return (

    <CtCard>
      <CtImage>
        <Imatge src={moment.imgUrl} />
      </CtImage>
      <CtTxt>
        <TxtTitle>City</TxtTitle>
      </CtTxt>
    </CtCard>
  )

}


export default MomentCard