import React, { useEffect, useState } from 'react'
import MomentCard from '../card/MomentCard';
import { momentServices} from '../../services/momentServices'
import { CtMomentList } from './MomentsList.styled'
import Search from '../search/Search';
import NavBar from '../navbar/NavBar';
import { likeServices } from '../../services/likeServices';
//import data from "../../assets/data/dbAxios.json"

function MomentsList() {

  const [moments, setMoments] = useState([]);
  const [search, setSearch] = useState("");


  // useEffect(()=> {
  //   getAllMoments();
  //   search === "" ? getAllMoments() : searchMoment(search)
  // }, [search, moments]);



  useEffect(()=> {
    getAllMoments();
  }, []);


   useEffect(()=> {
    getAllMoments();
    search === "" ? getAllMoments() : searchMoment(search)
  }, [search]);

  const getAllMoments = () => {
    momentServices.getAllMoments().then((res) => {
      setMoments(res);
      // console.log(res)
      });
    };

    const deleteMoment = (id) => {
      let momentDelete = moments.filter((moment) => moment.id === id);
      let deleteConfirmed = window.confirm(
        `Delete ${momentDelete[0].title} from the list?`
      );
      // if (!deleteConfirmed) return;
      // let filterMoments = moments.filter((moment) => moment.id !== id);
      // console.log(filterMoments);
  
      momentServices.deleteMoment(parseInt(id)).then((res) => {
        if(res)
        getAllMoments();
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


      const likes = (data) => {
        likeServices.likes(data.id).then((res) => {
          if (!res) return;
          getAllMoments();
        });
        getAllMoments();
      };
    

  return (

    <>
          <Search 
          searchMoment={searchMoment}
          setSearch={setSearch}
          search={search}
          /> 
          <CtMomentList>
          {moments.map((moment, key)=> (
              <MomentCard 
              key={key} 
              likes={likes} 
              moment={moment}
              deleteMoment={deleteMoment}

              />
      
        ))}
        </CtMomentList>
      </>
  )
}


export default MomentsList

