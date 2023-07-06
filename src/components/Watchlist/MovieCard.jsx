import React from "react";
import { MovieControls } from "./MovieControls";
import { Rating } from 'react-simple-star-rating'

import  './Watchlist.css'

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card ">
      
      <div className="overlay d-flex position-relative  ">

        
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path?movie.poster_path:movie.known_for[0].poster_path}`}
        alt={`${movie.title} Poster`}
        className="rounded"
      />
      <div className="info">
      <h4 className="mt-5 ms-3">{movie.title?movie.title:movie.name}</h4>
       <p className="ms-3 text-secondary">{movie.release_date?movie.release_date:movie.first_air_date}</p>
       <div className="ms-3">{movie.overview?movie.overview:""}</div>
       <div className="rate ms-3">
       <Rating
            size={20}
            initialValue={((Math.round(movie.vote_average*100)/100).toFixed(0))/2}
            emptyColor='#cccc'
            allowFraction='true'
            disableFillHover='true' />
       </div>
      
           
        </div>

      
      <div className="control position-absolute top-0 end-0 m-3">
      <MovieControls type={type} movie={movie} />

      </div>

    </div>
   </div>
  );
};