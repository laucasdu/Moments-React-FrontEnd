import React, { useEffect, useState } from 'react'
import MomentCard from '../card/MomentCard';
import { momentServices} from '../../services/momentServices'
import { CtMomentList } from './MomentsList.styled'
import Search from '../search/Search';
import { likeServices } from '../../services/likeServices';
//import data from "../../assets/data/dbAxios.json"

function MomentsList() {

  const [moments, setMoments] = useState([]);
  const [search, setSearch] = useState("");
  const [isLiked, setIsLiked] = useState(false);


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


      // const likes = (moment) => {
      //   console.log(moment)

      //   let data = {loverId:1, momentId:moment.id}

      //   likeServices.likes(data).then((res) => {
      //     if (!res) return;
      //       getAllMoments();
      //       window.confirm(
      //         `Hello?`
      //       );
      //   });
      //   getAllMoments();
      // };
    



      const likes = (id) => {
        likeServices.likes(id).then((res) => {
          setIsLiked(true) 
          // window.alert("like is true");
          getAllMoments();
          // window.alert("like is false");
          // return;

        });
        setIsLiked(false);
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
              isLiked={isLiked}

              />
      
        ))}
        </CtMomentList>
      </>
  )
}


export default MomentsList

