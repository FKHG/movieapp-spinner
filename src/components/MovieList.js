import React from "react";
import "./MovieApp.css";
import Rating from "./Rating";
import Loading from "./Loader";

const MovieList = props => (
  <div className="movie-list">
    {props.movie
      .filter(
        el =>
          el.rating >= props.rating &&
          el.title.toLowerCase().includes(props.titleFilter.trim())
      )
      .map((el, i) => (
        <div className="movie-card" key={i}>
          <div className="movie-rating">
            <Rating count={el.rating} />
          </div>
          <div
            className="movie-image"
            style={{
              backgroundImage: `url(${el.image})`
            }}
          ></div>
          <div className="movie-description">
            {el.title} - {el.year}
          </div>
         <Loading/> 
        </div>
      ))}
  
  </div>
);

export default MovieList;
