import React, { useContext, useEffect,useState } from 'react'
import '../TrendingMovies/TreandingMovies.css'
import { MovieContext } from '../Context/MovieContext'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'
import TopRated from '../TopRated/TopRated'
import Upcomming from '../Upcomming/Upcomming'
import { toast } from 'react-toastify';

import { GlobalContext } from "../WishContext/GlobalState";


export default function TrendingMovies() {
    let{getAll,getTv,getMovies,getPeople}=useContext(MovieContext)
    const {
      addMovieToWatchlist,
     
    } = useContext(GlobalContext);
    let[all,setAll]=useState([])
    let[tv,setTv]=useState([])
    let[movie,setMovie]=useState([])
    let[people,setPeople]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    
    let[movie2,setMovie2]=useState('')
    let[movie3,setMovie3]=useState('')

    let{Search}=useContext(MovieContext);
    let [resultt,setResult]=useState([])
    let [resultt2,setResult2]=useState([])
    // let storedMovie = watchlist.find((o) => o.id === movie.id);
    // let storedMovieWatched = watched.find((o) => o.id === movie.id);
  
    // const watchlistDisabled = storedMovie
    //   ? true
    //   : storedMovieWatched
    //   ? true
    //   : false;
  
    // const watchedDisabled = storedMovieWatched ? true : false;
 
   async function searchAll(value){
   let res= await Search(movie2,value)
    const result= res.results.filter((mov)=>{
     return  <>     
     {mov.title?mov.title:mov.name}
    
    
  </>
       
       
      
   })
   
   setResult(result)
   console.log(result);
  }

  
  async function searchMovie(value){
    let res= await Search(movie2,value)
     const result= res.results.filter((mov)=>{
      return  <>     
      {mov.title?mov.title:mov.name}
     
     
   </>
        
        
       
    })
    
    setResult(result)
    console.log(result);
   }
 

  async function searchTv(value){
    let res= await Search(movie2,value)
     const result= res.results.filter((mov)=>{
      return  <>     
      {mov.title?mov.title:mov.name}
     
     
   </>
        
        
       
    })
    
    setResult(result)
    console.log(result);
   }
 
   async function searchPerson(value){
    let res= await Search(movie3,value)
     const result= res.results.filter((mov)=>{
      return mov.known_for.length>0
        
        
       
    })
    
    setResult2(result)
    console.log(result);
   }
 


  function onBlur(){
    setTimeout(()=>{
      setResult([])
      setMovie3([])
      setMovie2([])
    },3000)

  }
 
  function handleChange(value){
    setMovie2(value);
    searchAll("multi");

    console.log(value)
  }
  function handleChange2(value){
    setMovie2(value);
     searchTv("tv")
    // console.log(value)
  }

  function handleChange3(value){
    setMovie2(value);
     searchMovie("movie")
    // console.log(value)
  }
  function handleChange4(value){
    setMovie3(value);
     searchPerson("person")
    // console.log(value)
  }


    async function getAllFun(){
    let res=await getAll()
    setAll(res.results)
    // console.log(res)
    }
    async function getTvFun(){
        let res2=await getTv()
        setTv(res2.results)
        // console.log(res)
        }
        async function getMoviesFunc(){
         let res3=await getMovies()
        setMovie(res3.results)
            // console.log(res)
            }

     async function getPeopleFunc(){
       let res4=await getPeople()
       setPeople(res4.results)
                // console.log(res)
                }
    
    useEffect(()=>{
        getAllFun()
        getTvFun()
        getMoviesFunc()
        getPeopleFunc()

        setTimeout(()=>{
          setIsLoading(false)
        },2000)

      
    },[])
  return (
    <>
    <Upcomming/>
      <div className=' pt-5 trending'>
        <div className="titlee d-flex align-items-center justify-content-between">
          <div className="heading">
          <p>ONLINE STREAMING</p>
          <h2 className='trending-title position-relative'>Trending Movies</h2>
          </div>
       
      
        </div>
          
        <div className="container-fluid">
        <nav className=' d-flex justify-content-center'>
  <div class="nav  nav-tabs border-0" id="nav-tab" role="tablist">
    <button class="nav-link border rounded-pill px-4  active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="true" >All</button>
    <button class="nav-link border rounded-pill px-4  " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false">Tv Shows</button>
    <button class="nav-link border rounded-pill px-4 " id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Movies</button>
    <button class="nav-link border rounded-pill px-4 " id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">People</button>
</div>
   

        </nav>
    <div class="tab-content" id="nav-tabContent">
    
    <div class=" position-relative tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab" tabindex="0">
    <form className="d-flex ps-5 ms-5 mt-5 pt-5 all-search" role="search" onSubmit={(e)=>e.preventDefault()}>
       <div className="icon position-relative">
       <i className="fa-solid fa-magnifying-glass position-absolute "></i>
       <input className="form-control ps-5  me-5" type="search " placeholder="Search" value={movie2} onChange={(e)=>handleChange(e.target.value)} onBlur={onBlur}  />
       </div>

       </form>
      <div className="row mt-4 pb-5">
        {resultt.length>0?resultt.map((all2)=>{
            return  <>
            {all2.poster_path && all2.title? 
            <div className="col-lg-2 col-md-3 mt-5">
            {isLoading?<Skeleton height={400} duration={2} />
            :
            <Link to={`/movie/${all2.id}`}>
               <div className="card  card-img card-movie">
               {all2.poster_path? 
              <img className="movieimg rounded"src={`https://image.tmdb.org/t/p/w500/${all2.poster_path}`}  alt="" />  

              :<div className='placeholder-img text-white d-flex align-items-center justify-content-center'> <p >No Image found</p></div>
              }
             
            
            <div className=" movies-info d-none text-white mt-5 pt-3 ms-2 position-absolute">
              <p>{all2?all2.title:""}</p>
              <div className="d-flex justify-content-between">
              <span className="time">{all2?all2.release_date:""}</span>
               <span className='ms-4 vote'>{all2?(Math.round(all2.vote_average*100)/100).toFixed(1):""}<i className='fa-solid fa-star me-2'></i></span>
             
              </div>
              <div className="pop-title">{all2?all2.overview.split("").slice(0,50).join(""):""}...</div>
             
             <div className="d-flex justify-content-between mt-4">
             {/* <button
            className="btn text-white  "
            style={{fontSize:'10px',backgroundColor:'black',boxShadow:'0 0 5px 0 white'}}
            onClick={() => addMovieToWatchlist(all2)}
            >
               <i className='fa-regular text-white fa-star' style={{title:'add to Watchlist'}}></i>
          </button> */}

          <button
            className="btn text-white btn-success me-3 "
            style={{fontSize:'10px',backgroundColor:'black',borderColor:'yellow'}}
            // disabled={watchedDisabled}
            onClick={() => {
              if(localStorage.getItem('userToken')){
                addMovieToWatchlist(all2)
                toast.success("added  successfully");

              }
            else{
              toast.error("can not add to watchlis! signin now");

            }
            }}
          >
            Add to Watchlist
          </button>
             </div>
              

              </div>
          
             </div>
            </Link>
            
            }
             
          </div>
            
            :""}
            
            </>
            
        }):
        
        all.map((all2)=>{
          return <div className="col-lg-2 col-md-3 mt-5">
            {isLoading?<Skeleton height={260} duration={2} />
            :
           <>{all2.id && all2.poster_path? 

            <Link to={`/movie/${all2.id}`}>
              
              <div className="card  card-img card-movie">
              <img className="movieimg rounded" src={`https://image.tmdb.org/t/p/w500/${all2.poster_path}`}  alt="" />
              {/* <div className="star position-absolute ">
               <i className='fa-regular text-white fa-star'></i>
              </div> */}
              
              <div className=" movies-info d-none text-white mt-5 pt-3 ms-2 position-absolute">
               <p>{all2.title?all2.title:all2.name}</p>
               <div className="d-flex justify-content-between">
               <span className="time">{all2.release_date?all2.release_date:all2.first_air_date}</span>
                <span className='ms-4 vote'>{all2?(Math.round(all2.vote_average*100)/100).toFixed(1):""}<i className='fa-solid fa-star me-2'></i></span>
              
               </div>
               <div className="pop-title">{all2?all2.overview.split("").slice(0,50).join(""):""}...</div>
              
              <div className="d-flex justify-content-between mt-5">
             
              <button
            className="btn text-white btn-success me-3 "
            style={{fontSize:'10px',backgroundColor:'black',borderColor:'yellow'}}
            // disabled={watchedDisabled}
            onClick={() => {
              if(localStorage.getItem('userToken')){
                addMovieToWatchlist(all2)
                toast.success("added  successfully");

              }
            else{
              toast.error("can not add to watchlis! signin now");

            }
            }}
          >
            Add to Watchlist
          </button>

              </div>
             
  
               </div>
            
              </div>
              
              
            
           </Link>
            
            :<Link to="/home"></Link>}</>
            
            }
             
          </div>
          
      })
      
        }
      </div>
  
</div>
  <div class="tab-pane fade position-relative " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
  <form className="d-flex ps-5 ms-5 mt-5 pt-5 all-search" role="search" onSubmit={(e)=>e.preventDefault()}>
       <div className="icon position-relative">
       <i className="fa-solid fa-magnifying-glass position-absolute "></i>
       <input className="form-control ps-5  me-5" type="search " placeholder="Search " value={movie2} onChange={(e)=>handleChange2(e.target.value)}  onBlur={onBlur}  />
       </div>

       </form>
    <div className="row mt-4 pb-5">
    {resultt.length>0?resultt.map((tv2)=>{
            return <>
            {tv2.poster_path && tv2.name ? 
            <div className="col-lg-2 col-md-3 mt-5">
            {isLoading?<Skeleton height={400} duration={2} />
            :
         
               <div className="card card-img card-movie ">
              {tv2.poster_path? 
              <img className="movieimg rounded"src={`https://image.tmdb.org/t/p/w500/${tv2.poster_path}`}  alt="" />  

              :<div className='placeholder-img text-white d-flex align-items-center justify-content-center'> <p >No Image found</p></div>
              }
            {/* <div className="star position-absolute ">
              <i className='fa-regular text-white fa-star'></i>
             </div> */}
             <div className=" movies-info d-none text-white mt-5 pt-3 ms-2 position-absolute">
              <p>{tv2?tv2.title:""}</p>
              <div className="d-flex justify-content-between">
              <span className="time">{tv2?tv2.release_date:""}</span>
               <span className='ms-4 vote'>{tv2?(Math.round(tv2.vote_average*100)/100).toFixed(1):""}<i className='fa-solid fa-star me-2'></i></span>
             
              </div>
              <div className="pop-title">{tv2?tv2.overview.split("").slice(0,50).join(""):""}...</div>
              <div className="d-flex justify-content-between mt-4">
            
              <button
            className="btn text-white btn-success me-3 "
            style={{fontSize:'10px',backgroundColor:'black',borderColor:'yellow'}}
            // disabled={watchedDisabled}
            onClick={() => {
              if(localStorage.getItem('userToken')){
                addMovieToWatchlist(tv2)
                toast.success("added  successfully");

              }
            else{
              toast.error("can not add to watchlis! signin now");

            }
            }}
          >
            Add to Watchlist
          </button>
             </div>
              

              </div>
        
            </div>
              

           
            }
            
   

          </div>
            :""}
            </>
        }) :
        
        tv.map((tv2)=>{
            return <div className="col-lg-2 col-md-3 mt-5">
              {isLoading?<Skeleton height={400} duration={2} />
              :
             
                <div className="card card-img card-movie">
              <img className="movieimg rounded"src={`https://image.tmdb.org/t/p/w500/${tv2.poster_path}`}  alt="" />  
              {/* <div className="star position-absolute ">
                <i className='fa-regular text-white fa-star'></i>
               </div> */}
               <div className=" movies-info d-none text-white mt-5 pt-3 ms-2 position-absolute">
              <p>{tv2?tv2.name:""}</p>
              <div className="d-flex justify-content-between">
              <span className="time">{tv2?tv2.release_date:""}</span>
               <span className='ms-4 vote'>{tv2?(Math.round(tv2.vote_average*100)/100).toFixed(1):""}<i className='fa-solid fa-star me-2'></i></span>
             
              </div>
              <div className="pop-title">{tv2?tv2.overview.split("").slice(0,50).join(""):""}...</div>
              <div className="d-flex justify-content-between mt-4">
             
              <button
            className="btn text-white btn-success me-3 "
            style={{fontSize:'10px',backgroundColor:'black',borderColor:'yellow'}}
            // disabled={watchedDisabled}
            onClick={() => {
              if(localStorage.getItem('userToken')){
                addMovieToWatchlist(tv2)
                toast.success("added  successfully");

              }
            else{
              toast.error("can not add to watchlis! signin now");

            }
            }}
          >
            Add to Watchlist
          </button>
             </div>
              

              </div>
             
              </div>
              
              
              }
              
     

            </div>
        })
        
        
        }
    </div>
  </div>
  <div class="tab-pane fade position-relative" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
  <form className="d-flex ps-5 ms-5 mt-5 pt-5 all-search" role="search" onSubmit={(e)=>e.preventDefault()}>
       <div className="icon position-relative">
       <i className="fa-solid fa-magnifying-glass position-absolute "></i>
       <input className="form-control ps-5  me-5" type="search " placeholder="Search " value={movie2} onChange={(e)=>handleChange3(e.target.value)} onBlur={onBlur}   />
       </div>

       </form>
    <div className='row mt-4 py-5'>
    {resultt.length>0?resultt.map((movi)=>{
            return <>
            {movi.poster_path && movi.title? 
            <div className="col-lg-2 col-md-3 mt-5">
            {isLoading?<Skeleton height={400} duration={2} />
            
            :
            <Link to={`/movie/${movi.id}`}>
           <div className="card card-img card-movie">
               {movi.poster_path && movi.title? 
              <img className="movieimg rounded"src={`https://image.tmdb.org/t/p/w500/${movi.poster_path}`}  alt="" />  

              :<div className='placeholder-img text-white d-flex align-items-center justify-content-center'> <p >No Image found</p></div>
              }
            
             <div className=" movies-info d-none text-white mt-5 pt-3 ms-2 position-absolute">
              <p>{movi?movi.title:""}</p>
              <div className="d-flex justify-content-between">
              <span className="time">{movi?movi.release_date:""}</span>
               <span className='ms-4 vote'>{movi?(Math.round(movi.vote_average*100)/100).toFixed(1):""}<i className='fa-solid fa-star me-2'></i></span>
             
              </div>
              <div className="pop-title">{movi?movi.overview.split("").slice(0,50).join(""):""}...</div>
              <div className="d-flex justify-content-between mt-4">
            
              <button
            className="btn text-white btn-success me-3 "
            style={{fontSize:'10px',backgroundColor:'black',borderColor:'yellow'}}
            // disabled={watchedDisabled}
            onClick={() => {
              if(localStorage.getItem('userToken')){
                addMovieToWatchlist(movi)
                toast.success("added  successfully");

              }
            else{
              toast.error("can not add to watchlis! signin now");

            }
            }}
          >
            Add to Watchlist
          </button>
             </div>
              

              </div>
           
            </div>    
           </Link>

           
            }
             
          </div>
            :""}
            
            </>
        })
      :
      movie.map((movi)=>{
        return <div className="col-lg-2 col-md-3 mt-5">
          {isLoading?<Skeleton height={400} duration={2} />
          
          :
          <Link to={`/movie/${movi.id}`}>
        <div className="card card-img card-movie">
          <img className="movieimg rounded" src={`https://image.tmdb.org/t/p/w500/${movi.poster_path}`}  alt="" />
         
           <div className=" movies-info d-none text-white mt-5 pt-3 ms-2 position-absolute">
              <p>{movi?movi.title:""}</p>
              <div className="d-flex justify-content-between">
              <span className="time">{movi?movi.release_date:""}</span>
               <span className='ms-4 vote'>{movi?(Math.round(movi.vote_average*100)/100).toFixed(1):""}<i className='fa-solid fa-star me-2'></i></span>
             
              </div>
              <div className="pop-title">{movi?movi.overview.split("").slice(0,50).join(""):""}...</div>
              <div className="d-flex justify-content-between mt-4">
          
              <button
            className="btn text-white btn-success me-3 "
            style={{fontSize:'10px',backgroundColor:'black',borderColor:'yellow'}}
            // disabled={watchedDisabled}
            onClick={() => {
              if(localStorage.getItem('userToken')){
                addMovieToWatchlist(movi)
                toast.success("added  successfully");

              }
            else{
              toast.error("can not add to watchlis! signin now");

            }
            }}
          >
            Add to Watchlist
          </button>
             </div>
              

              </div>
        
          </div>    
         </Link>

          
          }
           
        </div>
    })
      
      
      
      }
    </div>
  </div>
  
  <div class="tab-pane position-relative fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
  <form className="d-flex ps-5 ms-5 mt-5 pt-5 all-search" role="search" onSubmit={(e)=>e.preventDefault()}>
       <div className="icon position-relative">
       <i className="fa-solid fa-magnifying-glass position-absolute "></i>
       <input className="form-control ps-5  me-5" type="search " placeholder="Search " value={movie3} onChange={(e)=>handleChange4(e.target.value)} onBlur={onBlur}   />
       </div>

       </form>
    <div className='row mt-4 py-5 '>
    {resultt2.length>0?resultt2.map((movi)=>{
            return <>
            { movi.known_for && movi.name?
            <div className="col-lg-2 col-md-3 mt-5">
            {isLoading?<Skeleton height={400} duration={2} />
            
            :
            
              <div className="card card-img card-movie">
               {movi && movi.name && movi.known_for  ? 
              <img className="movieimg rounded"src={`https://image.tmdb.org/t/p/w500/${movi.known_for[0].poster_path}`}  alt="" />  

              :<div className='placeholder-img text-white d-flex align-items-center justify-content-center'> <p >No Image found</p></div>
              }
           
             <div className=" movies-info d-none text-white mt-5 pt-3 ms-2 position-absolute">
              <p>{movi?movi.name:""}</p>
              <div className="d-flex justify-content-between">
              <span className="time">{movi?movi.release_date:""}</span>
               <span className='ms-4 vote'>{movi?(Math.round(movi.known_for[0].vote_average*100)/100).toFixed(1):""}<i className='fa-solid fa-star me-2'></i></span>
             
              </div>
              <div className="pop-title">{movi?movi.known_for[0].overview.split("").slice(0,50).join(""):""}...</div>
              <div className="d-flex justify-content-between mt-4">
             
              <button
            className="btn text-white btn-success me-3 "
            style={{fontSize:'10px',backgroundColor:'black',borderColor:'yellow'}}
            // disabled={watchedDisabled}
            onClick={() => {
              if(localStorage.getItem('userToken')){
                addMovieToWatchlist(movi)
                toast.success("added  successfully");

              }
            else{
              toast.error("can not add to watchlis! signin now");

            }
            }}
          >
            Add to Watchlist
          </button>
             </div>
              

              </div>
        
            
            </div>
           

          
            }
             
          </div>
            :  ""
          }
            
            </>
        })
      :
      people.map((movi)=>{
        return <div className="col-lg-2 col-md-3 mt-5">
          {isLoading?<Skeleton height={400} duration={2} />
          
          :
         
         <div className="card card-img card-movie">
          <img className="movieimg rounded" src={`https://image.tmdb.org/t/p/w500/${movi.known_for[0].poster_path}`}  alt="" />
          
           <div className=" movies-info d-none text-white mt-5 pt-3 ms-2 position-absolute">
              <p>{movi?movi.name:""}</p>
              <div className="d-flex justify-content-between">
              <span className="time">{movi?movi.release_date:""}</span>
               <span className='ms-4 vote'>{movi?(Math.round(movi.known_for[0].vote_average*100)/100).toFixed(1):""}<i className='fa-solid fa-star me-2'></i></span>
             
              </div>
              <div className="pop-title">{movi?movi.known_for[0].overview.split("").slice(0,50).join(""):""}...</div>
              <div className="d-flex justify-content-between mt-4">
             
              <button
            className="btn text-white btn-success me-3 "
            style={{fontSize:'10px',backgroundColor:'black',borderColor:'yellow'}}
            // disabled={watchedDisabled}
            onClick={() => {
              if(localStorage.getItem('userToken')){
                addMovieToWatchlist(movi)
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
         
          
          </div>    
          

         
          }
           
        </div>
    })
      
      
      
      }
    </div>
    </div>
    </div>

</div>
<TopRated/>

     </div>
    </>
  
   
   
  )
}
