import React, { useEffect, useState } from 'react'
import MomentCard from '../card/MomentCard';
import { momentServices} from '../../services/momentServices'
import { CtMomentList } from './MomentsList.styled'


function MomentsList() {

  const [moment, setMoments] = useState([]);

  useEffect(()=> {
    getAllMoments();
  }, []);

  const getAllMoments = () => {
    momentServices.getAllMoments().then((res) => {
      setMoments(res);
      });
    };

  return (

    <>
      <CtMomentList>
        {
            moment.map((moment, key)=> (
              <MomentCard key={key} moment={moment}/>
      
        ))}
        </CtMomentList>
      </>
  )
}

export default MomentsList

