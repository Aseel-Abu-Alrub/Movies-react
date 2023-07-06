import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import './Search.css'
import { MovieContext } from '../Context/MovieContext'
import { Link } from 'react-router-dom';

export default function SearchBar() {
    let[movie,setMovie]=useState('')
     let{Search}=useContext(MovieContext);
     let [resultt,setResult]=useState([])
  
    async function searchFun(){
    let res= await Search(movie,"multi")
     const result= res.results.filter((mov)=>{
      return(
        <>
        {mov.title? mov.title:mov.name} 
        </>
      ) 
    })
    setResult(result)
    console.log(res);
   }
    function handleChange(value){
      setMovie(value);
      searchFun(value)
      console.log(value)
    }
    // function Searchbtn(searchvalue){
    //   // console.log(searchvalue)
    //   setMovie(searchvalue)
    //   searchFun(searchvalue)
    // }
 
    function Blur(){
      setResult([])  
    }
  return (
    <div >
    <div className="position-relative searchForm">
    <form className="d-flex ps-5 ms-5" role="search" onSubmit={(e)=>e.preventDefault()}>
      <div className="icon position-relative">
      <i className="fa-solid fa-magnifying-glass position-absolute "></i>
    <input className="form-control ps-5  me-2" type="search" placeholder="Search" value={movie} onChange={(e)=>handleChange(e.target.value)} onBlur={Blur} />
      </div>

    {/* <button className="btn btn-outline-info search ms-2 " type="submit" onClick={()=>Searchbtn(movie)}>Search</button> */}
    </form>
    <div className="result">
       {resultt.map((res)=>{
        return <div>
                  <div className="search-list position-relative">
          <div className='list2'>
        
        <img className='w-25 ms-3 mb-3 rounded me-4 ' src={`https://image.tmdb.org/t/p/w500/${res.poster_path}`} alt="" />

        <a className='list' href='../TrendingMovies'>{res.title?res.title:res.name}</a>


        </div>
      

        </div>
       
        </div>
       })}
    </div>
    </div>
    
    </div>
  )
}
