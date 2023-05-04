import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../Components/Context'

const Movies = () => {

  const {isloading,movie} = useGlobalContext();
 

  console.log(isloading);
  return (
    <>
    {
      isloading ? <h3 className='loading'>loading...</h3> : 
      <section className='movie-page'>
      <div className='container grid grid-4-col'>
      {movie.map((curMovie)=>{
        const{imdbID , Title , Poster} = curMovie;
        //Navlink is like our anchor tag.

        const movieName = Title.substring(0,15);
        return <NavLink to={`movie/${imdbID}`} key={imdbID} >
          <div className='card'>
           <div className='card-info'>
            <h2>{ Title.length>=15 ? `${movieName}...`:movieName}</h2>
            <img src={Poster} alt="hello" />
           </div>
          </div>
        </NavLink>
        })
      }
      </div>
      </section>
      
    }
     
     
     


   
    </>
  )
}

export default Movies