import React from "react";
import StarRatingComponent from 'react-star-rating-component';
import "./MovieApp.css";

const RatingFilter = ({rating, onStarClick}) => (
  <div className="rating-filter">
    <span className="rating-filter-text"> Min rating</span>
    <div>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
      </div>
  </div>
);

export default RatingFilter;
