import React, { useEffect, useState } from 'react'
import MomentCard from '../card/MomentCard';
import { momentServices} from '../../services/momentServices'
import { CtMomentList } from './MomentsList.styled'
import Search from '../search/Search';
import { CtSearch } from '../search/Search.styled';
//import data from "../../assets/data/dbAxios.json"

function MomentsList() {

  const [moments, setMoments] = useState([]);
  const [search, setSearch] = useState("");



  useEffect(()=> {
    search == "" ? getAllMoments()
    :
    searchMoment(search)
    
  }, [search, moments]);


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


    const searchMoment = (data) => {
      momentServices.searchMoment(data).then((res) => {
        setMoments(res);
      
        // console.log(res)
        // console.log(search);
        // return(res);
        });
      };





   



  return (

    <>
        <CtSearch>
          <Search 
          searchMoment={searchMoment}
          setSearch={setSearch}
          search={search}
          /> 
          </CtSearch>
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

