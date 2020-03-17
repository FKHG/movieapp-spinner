/* import React from 'react'
import Rating from './Rating'
import './MovieApp.css'


const MovieCard = (props) => {
    const {movie = {}} = props
    const {
        title = '',
        year = '',
        image = 'https://seeklogo.com/images/N/netflix-n-logo-0F1ED3EBEB-seeklogo.com.png',
        rating = 0
    } = movie
    return (
        <div className="movie-card" >
            <div className="movie-rating"><Rating count={rating} /></div>
            <div
                className="movie-image"
                style={{
                backgroundImage:
                    `url('${image}')`
                }}
            />
            <div className="movie-description">{title} - {year}</div>
            </div>
    )
}

export default MovieCard */