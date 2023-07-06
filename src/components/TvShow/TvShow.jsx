import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MovieContext } from '../Context/MovieContext'
import Slider from 'react-slick'
import Skeleton from 'react-loading-skeleton'
import '../Popular/Popular.css'

export default function TvShow() {

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
    let{getPopular,getTvToday}=useContext(MovieContext)
    let[popular,setPopular]=useState([])
    let[tv,setTv]=useState([])

  

    async function getPopularFun(){
    let res=await getPopular()
   setPopular(res.results)
    console.log(res.results)
   
    }
    async function getTvTodayFun(){
      let res=await getTvToday()
     setTv(res.results)
      console.log(res.results)
     
      }
  
    useEffect(()=>{
      setTimeout(()=>{
        setIsLoading(false)
      },3000)
        getPopularFun()
        getTvTodayFun()
    },[])
    
  return (
    <div className=''>
<Slider {...settings}>
{tv.slice(5,tv.length-1).map((pop)=>{
               return   <Link to={`/tv2/${pop.id}`}>

               <div className="poster ">
                <div className="posterimg position-relative ">
                   {pop.poster_path? <img className='w-100 vh-50' src={`https://image.tmdb.org/t/p/original${pop && pop.backdrop_path}`} alt="" />
                      :<img className='w-100 vh-50' src={`https://image.tmdb.org/t/p/original${pop && pop.poster_path}`} alt="" />}
                   </div>
                   <div className="poster-overlay position-absolute">
                    <div className="poster-title mb-4">{pop?pop.original_name:pop.name}</div>
                    <div className="poster-time me-5">{pop?pop.first_air_date:""}
                    <span className='poster-rating ms-5 '>{pop?pop.vote_average:""}<i className='fa-solid fa-star ms-2'></i></span>
                    </div>
                    <div className="poster-desc w-75 mt-4 ">{pop.overview?pop.overview:<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nihil numquam consequuntur deserunt totam porro debitis quidem, doloribus nobis, ea aut repudiandae harum dignissimos aspernatur alias autem voluptatum! Fugiat repellat quos ea minus, odit itaque cupiditate sequi beatae accusamus eligendi?</div>}</div>
                    
                    <Link className='watch-btn position-relative  ' to={`/tv2/${pop.id}`}>  <i className='fa-solid fa-play position-absolute ms-4 mt-1 start-0 position-absolute'></i>Watch Now</Link>
                       
                   </div> 
              
                 
               </div>
               </Link>
              

            
      })}
</Slider>

<div className="pop-movie pt-5">
  <h2 className='text-white ms-5 mt-5 fs-1 '>Airing Today</h2>
<div className="container mt-5">

    <div className="row ">
      
        {tv.map((movi)=>{
          
          return <div className="col-md-2 ">
            <Link to={`/tv2/${movi.id}`}>
            <div className="card  card-movie mb-5 movie position-relative">
              {isLoading ? <Skeleton duration={2} height={300}/>:
              
              <>

              <img className='rounded ' src={`https://image.tmdb.org/t/p/w500/${movi.poster_path }`} alt="" />
              <div className=" movies-info d-none text-white mt-5 pt-3 ms-2 position-absolute">
              <p>{movi?movi.original_name:""}</p>
              <div className="d-flex justify-content-between">
              <span className="time">{movi?movi.first_air_date:""}</span>
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
