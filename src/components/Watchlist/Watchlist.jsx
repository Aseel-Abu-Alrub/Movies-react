import React, { useContext } from "react";
import { GlobalContext } from "../WishContext/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
       <div className="listt d-flex align-items-center justify-content-center  position-relative">
          <h1 style={{fontSize:'47px'}} className="heading mb-5 vh-75 mt-5 position-absolute text-white">My Watchlist</h1>

          </div>
      <div className="container mt-5">
        <div className="header ">
         

          <span className="count-pill mb-5">
            {/* {watchlist.length === 1 ? "Movie" : "Movies"} */}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid pb-5">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h3 className="no-movies pb-5 ">No movies in your list! Add some!</h3>
        )}
      </div>
    </div>
  );
};