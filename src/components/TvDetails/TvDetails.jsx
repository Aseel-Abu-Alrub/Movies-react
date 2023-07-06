import React, {useContext, useEffect, useState} from "react"
import "./TvDetails.css"
import { useParams } from "react-router-dom"
import { MovieContext } from "../Context/MovieContext"
import Slider from 'react-slick'
import { Rating } from 'react-simple-star-rating'

import { Link } from "react-router-dom"

export default function TvDetails(){
    const settings={
        dots:false,
        infinite:true,
        autoplay:true,
        autoplaySpeed:5000,  
        speed:500,
        slidesToShow:5,
        slidesToScroll:1,
        
       }
  let{getTDetails,getTvVideo,addRating,getTSimilar,getTReviews}=useContext(MovieContext)
    const [tv, setTv] = useState()
    const[vedio,setVedio]=useState([])
    const[reviews,setReviews]=useState([])
    const[similar,setSimilar]=useState([])
    const[rating,setRating]=useState(0)
    const[isReadMore,setIsReadMore]=useState(true);
    const toggleReadMore=()=>{setIsReadMore(!isReadMore)}
    const { id } = useParams()
  

    async function addRatingFun(){
        let res=await addRating(id)
        console.log(res)
         setRating(res)
        }
  
        function handleRating(rate){
            setRating(rate)
           }
           function handleReset(){
               setRating(0)
              }
    async function getReviewsFun(){
        let res=await getTReviews(id)
        console.log(res.results);
        setReviews(res.results)
    }


    async function getTDetailsFun(){
      let res=await getTDetails(id)
      setTv(res)
      console.log(res)
    }
    async function getTSimilarFun(){
        let res=await getTSimilar(id)
        setSimilar(res.results)
        
      }
    async function getTvVideoFun(){
    let res=await getTvVideo(id)
    console.log(res)
    setVedio(res.results)
    }

    useEffect(() => {
        getTDetailsFun()
        getTvVideoFun()
        getTSimilarFun()
        getReviewsFun()
        // getReviewsFun()
        // getSimilarFun()
        window.scrollTo(0,0)
    }, [])

  

    return (
        <>
        {tv? <div className="moviee">
            <div className="movie__intro" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${tv ? tv.backdrop_path :""})`,backgroundSize:'cover',height:'70vh',backgroundAttachment:'fixed'}}>
                {/* <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${tv ? tv.backdrop_path :""}`} alt=""/> */}
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${tv ? tv.poster_path : ""}`} alt="" />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{tv ? tv.name : ""}</div>
                        <div className="movie__tagline">{tv ? tv.tagline : ""}</div>
                        <div className="movie__rating">
                            {tv ? tv.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{tv ? "(" + tv.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{tv.last_episode_to_air.runtime ? tv.last_episode_to_air.runtime + " mins" :tv.episode_run_time+" mins"}</div>
                        <div className="movie__releaseDate">{tv ? "Release date: " + tv.last_air_date : ""}</div>
                        <div className="movie__genres">
                            {
                                tv && tv.genres
                                ? 
                                tv.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                                {/* <Rating
                                size={20}
                                onClick={addRatingFun}
                                initialValue={rating}
                                emptyColor='#cccc'
                                allowFraction='true'
                                disableFillHover='true' /> */}
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{tv.overview? tv.overview : <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ipsam odit sequi! Maiores minus, eum tenetur, corporis dignissimos perferendis rem mollitia non aspernatur ipsa eius culpa aliquid eaque vitae voluptas.</div>}</div>
                        <Link target="_blank" className="text-white watch-btn position-relative" to={`https://www.youtube.com/watch?v=${vedio.slice(0,1).key}`}><i className='fa-solid fa-play position-absolute ms-4 mt-1 start-0 position-absolute'></i> Watch now</Link>
                        
                    </div>
                    
                </div>
            </div>
           

            <div className=" mt-5 pt-5 text-center  m-auto" id="ved">
                {vedio.slice(0,3).map((ved)=>{
                   return <div className="mb-5 text-white text-start">
                        <h5 className="mb-3">{ved.name}</h5>
                        <iframe width="1000" height="515" src={`https://www.youtube.com/embed/${ved.key} `} title="YouTube video player"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreenm></iframe>

                   </div>

                })}

               

                    
                {/* <div className="movie__heading">Useful Links</div>
                {
                    tv && tv.homepage && <a href={tv.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    tv && tv.imdb_id && <a href={"https://www.imdb.com/title/" + tv.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                } */}
            </div>

            <div className=" mb-5 pb-5 ">
                    <div className='container  pb-5 '>
              {similar? <h1 className='text-white head-title pb-3  mb-5 me-auto ms-4  '>Similar Movies</h1> :""}     
                    <div className="row">
                    <Slider {...settings}>
                    {similar.map((topp)=>{

                    return <div className="col-md-4">
                       <Link to={`/movie2/${topp.id}`}>
                     {topp.poster_path?
                      <div className="card top-card mx-2 mb-3 ">
                      <i className='fa-brands fa-youtube position-absolute d-flex align-items-center justify-content-center w-100 h-100'></i>
                      <img src={`https://image.tmdb.org/t/p/w342${topp.poster_path || topp.backdrop_path}`} alt="" className='rounded'  />
                      <div className="top-info text-white bottom-0 ms-3 position-absolute">
                      <p>{topp.first_air_date.split("").slice(0,4).join("")}</p>
                      <p>{topp.original_name}</p>
                      </div>
                      </div>
                      :<div className="card bg-transparent border" style={{height:'310px',visibility:'hidden'}}>No image</div>
                    }  
                   
                        
                       </Link>
                       
                        {/* <h5 className=' text-white  w-75 my-4 top-title'>{topp.name.split("").slice(0,17).join("")}</h5> */}
                        {/* <p className='text-white  top-para'>{topp.overview.split("").slice(0,80).join("")}...</p> */}
                       {topp.poster_path?
                       
                       <Rating
                        size={20}
                        initialValue={((Math.round(topp.vote_average*100)/100).toFixed(0))/2}
                        emptyColor='#cccc'
                        allowFraction='true'
                        disableFillHover='true' />
                       :""} 
                    
                    </div>
                

                    })}


                </Slider>
                    </div>
            

                </div>
                </div>
            <div className="container-fulid ">
            <div className="reviews text-white me-auto ms-5">
                <h2 className='mb-5 '>Reviews({reviews.length})</h2>
              {reviews.map((rev,index)=>{
                return <div className="card mb-4 p-4" key={rev.id}>
                    <div className="reviews-details">
                    <span className="user" style={{backgroundColor:'#f555'}}>{rev.author_details.username.split("").slice(0,1).join("")}</span>
                    <span className="me-4 fs-5">{rev.author_details.username}</span>
                    <Rating
                        size={20}
                        initialValue={rev.author_details.rating}
                        emptyColor='#cccc'
                        allowFraction='true'
                        disableFillHover='true' />

                    {/* <p className="mt-4">{rev.content.split("").length>200?<>{rev.content.split("").slice(0,200).join("")} ... <button onClick={()=>{ return <p>{rev.content.split("").slice(200,rev.content.length).join("")}</p>}} className="btn border-0"> read more</button></> :rev.content}</p> */}
                    <p  className="mt-4">{isReadMore ?rev.content.slice(0,190):rev.content}
                    {rev.content.length>190 && 
                     <> <span className="ms-3 text-primary" style={{cursor:'pointer'}} onClick={toggleReadMore}>{isReadMore ?'...read more':'show less'}</span></>
                    }
                    </p>
                    <span  className="me-3 ">{rev.created_at.split("").slice(0,10).join("")}</span> <span>{rev.created_at.split("").slice(11,19).join("")}</span>
                   
                    </div>
                    

                </div>
              })}
            </div>
            </div>
           
            <div className="movie__heading mt-5 pt-5">Production companies</div>
            <div className="movie__production ">
                {
                   tv && tv.production_companies.map(company => (
                        <>
                           
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" alt="" src={`https://image.tmdb.org/t/p/original/${company.logo_path}`} />
                                    <span>{company.name}</span>
                                </span>
                          
                        </>
                    ))
                }
            </div>
                  

                  
            
        </div>:<div className="text-center vh-100 d-flex align-items-center justify-content-center moviee "><p className=" fs-4">No Details yet</p><div  className="     d-flex align-items-center spinner-border text-white mt-5" role="status" ><span className="visually-hidden" style={{width:'100px'}}></span></div></div>}
        </>
        
    )
}
