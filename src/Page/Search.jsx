import React, { useState } from 'react'
import { AppProvider, useGlobalContext } from '../Components/Context';

const Search = () => {

  const{userinput,setUserinput} = useGlobalContext();

  const HandelOnchange = (event)=>{
    setUserinput(event.target.value);
  }

  return (
    <section className='search-section'>
      <h2>Search Your Favourite Movie</h2>
      <input type="text" value={userinput} onChange={HandelOnchange}></input>
    </section>
     
    
  )
}

export default Search