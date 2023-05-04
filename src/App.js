import React, { useContext } from 'react'
import Home from './Page/Home'
import { Routes, Route } from "react-router-dom"
import MovieDetail from './Page/MovieDetail'
import { AppContext } from './Components/Context'
import "./App.css"
function App() {
  // const getdata = ()=>{
  //   fetch("http://www.omdbapi.com/?i=tt3896198&apikey=70d30964").
  //   then(res => res.json()).
  //   then(res => console.log(res));
  //   console.log("function call")
  // }
  // useContext(()=>{
  //    getdata();
  //    console.log("hai")
  //    },[])

  //  console.log("haiaiaiaia")
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='movie/:id' element={<MovieDetail></MovieDetail>}></Route>
      <Route path='*' element={<h1>Error occured</h1>}></Route>
    </Routes>
    
    
    </>
  )
}

export default App