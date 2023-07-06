import React from 'react'
import { MovieContext } from '../Context/MovieContext'
import Slider from 'react-slick'
import { Rating } from 'react-simple-star-rating'
import { useContext,useState,useEffect } from 'react'
import { GlobalContext } from "../WishContext/GlobalState";
import { toast } from 'react-toastify';


import './Upcomming.css'

export default function Upcomming() {
    const settings={
        dots:false,
        infinite:true,
        autoplay:true,
        autoplaySpeed:5000,  
        speed:500,
        slidesToShow:4,
        slidesToScroll:1,
        
       }
       const {
        addMovieToWatchlist,
       
      } = useContext(GlobalContext);
    let{getUpcomming,getVideo}=useContext(MovieContext)
    let[top,setTop]=useState([])
    const[rating,setRating]=useState(0)

    async function getUpcommingFun(){
        let res=await getUpcomming()
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
        getUpcommingFun()
    },[])
  return (
    <div className="top-rated  py-5">
        <div className='container  py-5 '>
        <h1 className='text-white head-title pb-3  mb-5 '>Upcoming Series</h1>
        <div className="row">
        <Slider {...settings}>
        {top.map((topp)=>{

        return <div className="col-md-4">
        
             <div className="card top-card mx-2 mb-3 ">
      <i className='fa-brands fa-youtube position-absolute d-flex align-items-center justify-content-center w-100 h-100'></i>

           <img src={`https://image.tmdb.org/t/p/w342${topp.poster_path}`} alt="" className='rounded'  />
           <div className="top-info text-white bottom-0 ms-3 position-absolute">
              <p>{topp.release_date.split("").slice(0,4).join("")}</p>
              <p>{topp.original_title}</p>
        
             </div>
             </div>
             
             {/* <h5 className=' text-white  w-75 my-4 top-title'>{topp.name.split("").slice(0,17).join("")}</h5> */}
             {/* <p className='text-white  top-para'>{topp.overview.split("").slice(0,80).join("")}...</p> */}
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
