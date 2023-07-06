import { createContext } from "react";
import { useState ,useEffect} from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const MovieContext=createContext(null);

export function MovieContextProvider({children}){
    let[user,setUser]=useState(null)
   function SaveUserData(){
    let token=localStorage.getItem("userToken")
    let decode=jwtDecode(token)
    // console.log(decode);
    setUser(decode)
    
  
   }
   
  useEffect(()=>{
    if(localStorage.getItem("userToken")){
        SaveUserData();
    }
  },[])

  async function getAll(){
    try{
      const{data}=await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=d34dd86e002634017f428540850afb41")
       return data
    }catch(error){
      console.log(error)
    }
  }
  async function getTv(){
    try{
      const{data}=await axios.get("https://api.themoviedb.org/3/trending/tv/week?api_key=d34dd86e002634017f428540850afb41")
       return data
    }catch(error){
      console.log(error)
    }

  }

  async function Search(value,type){
    try{
      const{data}=await axios.get(`https://api.themoviedb.org/3/search/${type}?api_key=d34dd86e002634017f428540850afb41&langauge=en-US&page=1&include-adult=false&query=${value}`)
       return data
    }catch(error){
      console.log(error)
    }

  }


  async function getMovies(){
    try{
      const{data}=await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=d34dd86e002634017f428540850afb41")
       return data
    }catch(error){
      console.log(error)
    }
  }

  async function getPeople(){
    try{
      const{data}=await axios.get("https://api.themoviedb.org/3/trending/person/week?api_key=d34dd86e002634017f428540850afb41")
       return data
    }catch(error){
      console.log(error)
    }
  }
  async function getPopular(){
    try{
      const{data}=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=d34dd86e002634017f428540850afb41")
       return data
    }catch(error){
      console.log(error)
    }
  }
  async function getMDetails(MId){
    try{
      const{data}=await axios.get(`https://api.themoviedb.org/3/movie/${MId}?api_key=d34dd86e002634017f428540850afb41`)
       return data
    }catch(error){
      console.log(error)
    }
  }
  
  async function getTDetails(series_id){
    try{
      const{data}=await axios.get(`https://api.themoviedb.org/3/tv/${series_id}?api_key=d34dd86e002634017f428540850afb41`)
       return data
    }catch(error){
      console.log(error)
    }
  }
  async function getTopRated(){
    try{
      const{data}=await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=d34dd86e002634017f428540850afb41`)
       return data
    }catch(error){
      console.log(error)
    }
  }

  async function getUpcomming(){
    try{
      const{data}=await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=d34dd86e002634017f428540850afb41`)
       return data
    }catch(error){
      console.log(error)
    }
  }
   
  async function getVideo(movie_id){
    try{
      const{data}=await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=d34dd86e002634017f428540850afb41`)
       return data
    }catch(error){
      console.log(error)
    }
  }
  async function getTvVideo(series_id){
    try{
      const{data}=await axios.get(`https://api.themoviedb.org/3/tv/${series_id}/videos?api_key=d34dd86e002634017f428540850afb41`)
       return data
    }catch(error){
      console.log(error)
    }
  }
  async function getReviews(movie_id){
    try{
      const{data}=await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=d34dd86e002634017f428540850afb41`)
       return data
    }catch(error){
      console.log(error)
    }
  }
  async function getTReviews(series_id){
    try{
      const{data}=await axios.get(`https://api.themoviedb.org/3/tv/${series_id}/reviews?api_key=d34dd86e002634017f428540850afb41`)
       return data
    }catch(error){
      console.log(error)
    }
  }
  async function getSimilar(movie_id){
    try{
      const{data}=await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=d34dd86e002634017f428540850afb41`)
       return data
    }catch(error){
      console.log(error)
    }
  }
  async function getTSimilar(series_id){
    try{
      const{data}=await axios.get(`https://api.themoviedb.org/3/tv/${series_id}/similar?api_key=d34dd86e002634017f428540850afb41`)
       return data
    }catch(error){
      console.log(error)
    }
  }


  async function getTvToday(){
    try{
      const{data}=await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=d34dd86e002634017f428540850afb41`)
       return data
    }catch(error){
      console.log(error)
    }
  }
  async function addRating(movie_id){
    
    try{
      const{data}=await axios.post(`https://api.themoviedb.org/3/movie/${movie_id}/rating?api_key=d34dd86e002634017f428540850afb41`,{movie_id:movie_id},

      {headers:{'Content-Type':'application/json;charset=utf-8'}}
      ) 
       return data
    }catch(error){
      console.log(error)
    }
  }

  

  
  


return <MovieContext.Provider value={{user,setUser,SaveUserData,getAll,getTv,getMovies,getPeople,getPopular,getMDetails,Search,getTopRated,getVideo,getReviews,getUpcomming,addRating,getSimilar,getTvToday,getTDetails,getTvVideo,getTSimilar,getTReviews}}>

{children}
</MovieContext.Provider>


}
















