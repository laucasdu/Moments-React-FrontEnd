import React, { useEffect, useState } from 'react'
import MomentCard from '../card/MomentCard';
import { momentServices} from '../../services/momentServices'
import { CtMomentList } from './MomentsList.styled'
//import data from "../../assets/data/dbAxios.json"

function MomentsList() {

  const [moments, setMoments] = useState([]);
  const [editedMoment, setEditedMoment] = useState();
  console.log(moments)

  useEffect(()=> {
    getAllMoments();
  }, []);

  const getAllMoments = () => {
    momentServices.getAllMoments().then((res) => {
      setMoments(res);
      });
    };

    const deleteMoment = (id) => {
      let momentToDelete = moments.filter((moment) => moment.id === id);
      let deleteConfirmed = window.confirm(
        `Really remove ${momentToDelete[0].title} from the list?`
      );
      if (!deleteConfirmed) return;
      let filterMoments = moments.filter((moment) => moment.id !== id);
      console.log(filterMoments);
  
      momentServices.deleteMoment(parseInt(id)).then((res) => {
        if (res.id === id) setMoments(filterMoments);
      });
    };

   const editMoment = (id) => {
     let editedMoment = moments.find(moment => moment.id == id );
     setEditedMoment(editedMoment)
     
     
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
              editMoment={editMoment}
              />
      
        ))}
        </CtMomentList>
      </>
  )
}

export default MomentsList

