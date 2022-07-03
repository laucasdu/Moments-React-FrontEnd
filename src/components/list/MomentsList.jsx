import React, { useEffect, useState } from 'react'
import MomentCard from '../card/MomentCard';
import { momentServices} from '../../services/momentServices'
import { CtMomentList } from './MomentsList.styled'
//import data from "../../assets/data/dbAxios.json"

function MomentsList() {

  const [moments, setMoments] = useState([]);


  useEffect(()=> {
    getAllMoments();
  }, []);

  const getAllMoments = () => {
    momentServices.getAllMoments().then((res) => {
      setMoments(res);
      });
    };

    // const deleteMoment = (id) => {
    //   let momentToDelete = moments.filter((moment) => moment.id === id);
    //   let deleteConfirmed = window.confirm(
    //     `Really remove ${momentToDelete[0].title} from the list?`
    //   );
    //   if (!deleteConfirmed) return;
    //   let filterMoments = moments.filter((moment) => moment.id !== id);
    //   console.log(filterMoments);
  
    //   momentServices.deleteMoment(parseInt(id)).then((res) => {
    //     if (res.id === id) setMoments(filterMoments);
    //   });
    // };


        // Funció per eliminar una pel·lícula
    const deleteMoment = (id) => {
        momentServices.deleteMoment(id).then((res) => {
            getAllMoments()
        });
    };





  return (

    <>
      <CtMomentList>
          
          {moments.map((moment, key)=> (
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

