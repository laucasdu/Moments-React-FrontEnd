import React, { useState } from 'react'
import { 
    CtSearch, 
    Input, 
    BtSearch, 
    } 
    from './Search.styled'

function Search({searchMoment, search, setSearch}) {




    const onInputChange = (e) => {
        setSearch(e.target.value);
        // console.log(e)
      };
  
  
    const handleSubmitSearch = (e) => {
        e.preventDefault();
        searchMoment(search);
        //console.log(search)
  
    };


  return (

    <CtSearch onSubmit={handleSubmitSearch}>
             <Input 
            onChange={onInputChange}
            type="text"
            value={search}
            name="searchMoment"
            placeholder="Title moment..."
            />
            
            <BtSearch type="submit"><i className="fa-solid fa-magnifying-glass"></i></BtSearch>          
          </CtSearch>

  )
}

export default Search