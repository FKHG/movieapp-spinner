import React from 'react'
import './MovieApp.css'


const Rating = ({count}) => {
    let starsHtml = []
    for(let i = 0; i < 5; i++) {
        if(i < count) {
            starsHtml.push(<span className='rating-filter-text'>★</span>)
        }
        else {
            starsHtml.push(<span className='rating-vide' >☆</span>)
        }
    }
    return (
        <div>{starsHtml}</div>
    )
}

export default Rating