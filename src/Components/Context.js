//context (wareHouse)
//provider (delivery boy)
//consumer (you)
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

//we need  to create a provider function.


const Api_url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppProvider = ({ children })=>{

const[isloading,setIsloading] = useState(true);
const[movie,setMovie] = useState([]);
const[userinput,setUserinput] = useState("titanic");



const getMovies = async (url)=>{
    try{
     const res  = await fetch(url);
     const data = await res.json();
     console.log(data);
     if(data.Response === "True"){
      //console.log("data daling");
     setIsloading(false);
        setMovie(data.Search);
     }
    }
    catch(error){
        console.log(error);
    }
  }


 useEffect(()=>{
    setIsloading(true);
   const timer = setTimeout(()=>{
    getMovies(`${Api_url}&s=${userinput}`);
    },500)
    
    return ()=> clearTimeout(timer);   //sb clear kar dega last ka choor ka (us sa last input pa api call hoga.)
 },[userinput])


return (
    <AppContext.Provider value={{isloading,movie,userinput,setUserinput}}>
     {children}
    </AppContext.Provider>
)
}

//global custom Hooks

const useGlobalContext = ()=>{
    return useContext(AppContext);
}


export {AppContext,AppProvider,useGlobalContext};


