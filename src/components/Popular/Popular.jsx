import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MovieContext } from '../Context/MovieContext'
import Slider from 'react-slick'
import Skeleton from 'react-loading-skeleton'
import '../Popular/Popular.css'

export default function Popular() {

  const[isLoading,setIsLoading]=useState(true)
    const settings={
     dots:true,
     infinite:true,
     autoplay:true,
     autoplaySpeed:5000,  
     speed:500,
     slidesToShow:1,
     slidesToScroll:1
    }
    let{getPopular}=useContext(MovieContext)
    let[popular,setPopular]=useState([])
  

    async function getPopularFun(){
    let res=await getPopular()
   setPopular(res.results)
    console.log(res.results)
   
    }

  
    useEffect(()=>{
      setTimeout(()=>{
        setIsLoading(false)
      },3000)
        getPopularFun()
    },[])
    
  return (
    <div className=''>
<Slider {...settings}>
{popular.map((pop)=>{
               return   <Link to={`/movie/${pop.id}`}>

               <div className="poster ">
                <div className="posterimg position-relative ">
                    <img className='w-100 vh-50' src={`https://image.tmdb.org/t/p/original${pop && pop.backdrop_path}`} alt="" />
                   </div>
                   <div className="poster-overlay position-absolute">
                    <div className="poster-title mb-4">{pop?pop.original_title:""}</div>
                    <div className="poster-time me-5">{pop?pop.release_date:""}
                    <span className='poster-rating ms-5 '>{pop?pop.vote_average:""}<i className='fa-solid fa-star ms-2'></i></span>
                    </div>
                    <div className="poster-desc w-75 mt-4 ">{pop?pop.overview:""}</div>
                    
                    <Link className='watch-btn position-relative  ' to={`/movie/${pop.id}`}>  <i className='fa-solid fa-play position-absolute ms-4 mt-1 start-0 position-absolute'></i>Watch Now</Link>
                       
                   </div> 
              
                 
               </div>
               </Link>
              

            
      })}
</Slider>

<div className="pop-movie pt-5">
  <h2 className='text-white ms-5 mt-5 fs-1 '>Popular Movies</h2>
<div className="container mt-5">

    <div className="row ">
      
        {popular.map((movi)=>{
          
          return <div className="col-md-2 ">
            <Link to={`/movie/${movi.id}`}>
            <div className="card  card-movie mb-5 movie position-relative">
              {isLoading ? <Skeleton duration={2} height={300}/>:
              
              <>

              <img className='rounded ' src={`https://image.tmdb.org/t/p/w500/${movi.poster_path}`} alt="" />
              <div className=" movies-info d-none text-white mt-5 pt-3 ms-2 position-absolute">
              <p>{movi?movi.title:""}</p>
              <div className="d-flex justify-content-between">
              <span className="time">{movi?movi.release_date:""}</span>
               <span className='ms-4 vote'>{movi?movi.vote_average:""}<i className='fa-solid fa-star me-2'></i></span>
             
              </div>
              <div className="pop-title">{movi?movi.overview.split("").slice(0,50).join(""):""}...</div>
             
              

              </div>
              </>
              }
                
              </div>
            </Link>
            
            </div>
        })}
    </div>
    
    </div> 
</div>


 

</div>
  )
    }
