import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../Context/MovieContext'
import Slider from 'react-slick'
import { Rating } from 'react-simple-star-rating'
import './TopRated.css'
import { toast } from 'react-toastify';
import { GlobalContext } from "../WishContext/GlobalState";


export default function TopRated() {
    const settings={
        dots:false,
        infinite:true,
        autoplay:true,
        autoplaySpeed:5000,  
        speed:500,
        slidesToShow:3.8,
        slidesToScroll:1,
        
       }
    let{getTopRated}=useContext(MovieContext)
    let[top,setTop]=useState([])
    const[rating,setRating]=useState(0)
    const {
      addMovieToWatchlist,
     
    } = useContext(GlobalContext);

    async function getTopRatedFun(){
        let res=await getTopRated()
        console.log(res.results);
        setTop(res.results)
    }
   function handleRating(rate){
     setRating(rate)
    }
    function handleReset(){
        setRating(0)
       }

    useEffect(()=>{
        getTopRatedFun()
    },[])
  return (
    <div className="top-rated mt-5 py-5">
        <div className='container mt-5 py-5 '>
        <h1 className='text-white head-title pb-3  mb-5 '>Top Rated Series</h1>
        <div className="row">
        <Slider {...settings}>
        {top.map((topp)=>{

        return <div className="col-md-4">
        
             <div className="card top-card mx-2 mb-3 ">
              <i className='fa-brands fa-youtube position-absolute d-flex align-items-center justify-content-center w-100 h-100'></i>
           <img src={`https://image.tmdb.org/t/p/w342${topp.poster_path}`} alt="" className='rounded'  />
           <div className="top-info text-white bottom-0 ms-3 position-absolute">
              <p>{topp.first_air_date.split("").slice(0,4).join("")}</p>
              <p>{topp.name}</p>
             </div>
             </div>
             
             <div className="text-center d-flex justify-content-around">
             <Rating
            size={20}
            initialValue={((Math.round(topp.vote_average*100)/100).toFixed(0))/2}
            emptyColor='#cccc'
            allowFraction='true'
            disableFillHover='true' />

<button
            className="btn text-white btn-success me-3 "
            style={{fontSize:'11px',backgroundColor:'black',borderColor:'yellow'}}
            // disabled={watchedDisabled}
            onClick={() => {
              if(localStorage.getItem('userToken')){
                addMovieToWatchlist(topp)
                toast.success("added  successfully");

              }
            else{
              toast.error("can not add to watchlis!  Login now");

            }
            }}
          >
            Add to Watchlist
          </button>
             </div>
           
        </div>
       

        })}


     </Slider>
        </div>
   

    </div>
    </div>
    
  )
}
