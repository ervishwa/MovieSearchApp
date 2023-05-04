import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const MovieDetail = () => {
  const {id} = useParams();

  const Api_url = `https://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_API_KEY}`


const[isloading,setIsloading] = useState(true);
const[movie,setMovie] = useState("");


 //http://www.omdbapi.com/?i=tt3896198&apikey=70d30964

const getMovies = async (url)=>{
    try{
     const res  = await fetch(url);
     const data = await res.json();
     console.log(data);
     if(data.Response === "True"){
      //console.log("data daling");
     setIsloading(false);
        setMovie(data);
     }
    }
    catch(error){
        console.log(error);
    }
  }


 useEffect(()=>{
  
   const timer = setTimeout(()=>{
    getMovies(`${Api_url}`);
    },500)
    
    return ()=> clearTimeout(timer);   //sb clear kar dega last ka choor ka (us sa last input pa api call hoga.)
 },[id])


  return (
    <>
    {
      isloading ? <h3 className='loading'>loading...</h3> : 
      <section className='movie-section'>
        <div className='movie-card'>
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className='card-content'>
          <p className='title'>{movie.Title}</p>
          <p className='card-text'>{movie.Released}</p>
          <p className='card-text'>{movie.Genre}</p>
          <p className='card-text'>{movie.imdbRating}</p>
          <p className='card-text'>{movie.Country}</p>
          <NavLink to='/' className='back-btn'>Back</NavLink>
        </div>
         
        </div>

      </section>
    }
     
    </>
  )
}

export default MovieDetail