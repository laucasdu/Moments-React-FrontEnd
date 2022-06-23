import React, { useEffect, useState } from 'react'
import MomentCard from '../card/MomentCard';
import { momentServices} from '../../services/momentServices'
import { CtMomentList } from './MomentsList.styled'
import data from "../../assets/data/dbAxios.json"

function MomentsList() {

  const [moments, setMoments] = useState([]);

  console.log(moments)

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
            moments.map((moment, key)=> (
              <MomentCard key={key} moment={moment}/>
      
        ))}
        </CtMomentList>
      </>
  )
}

export default MomentsList

