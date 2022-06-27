import React, { useEffect, useState } from 'react'
import MomentCard from '../card/MomentCard';
import { momentServices} from '../../services/momentServices'
import { CtMomentList } from './MomentsList.styled'
//import data from "../../assets/data/dbAxios.json"

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

  
//FUNCIÓ PER ESBORRAR UNA PEL·LÍCULA
const deleteMoment = (moment) => {    
  let deleteConfirmed = window.confirm(`really delete ${moments.title}?`);
  if (!deleteConfirmed) return; //clàusula salvaguarda

momentServices.deleteMoment(moments.id).then((res) => {
  
  if (res.status === 200) {
      let filterMoment = moments.filter(item => item.id !==moments.id);
      setMoments(filterMoment);
  } 
})
}

  return (

    <>
      <CtMomentList>
        {
            moments.map((moment, key)=> (
              <MomentCard 
              key={key} 
              moment={moment}
              deleteMoment={deleteMoment}
              />
      
        ))}
        </CtMomentList>
      </>
  )
}

export default MomentsList

