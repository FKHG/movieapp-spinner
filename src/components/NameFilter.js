import React from 'react'
import './MovieApp.css'


const NameFilter = ({value , onChange} ) => (
  <div className="name-filter">
      <input
          className="name-filter-text"
          type="text"
          value={value}
          onChange={onChange}
           />
    </div>
)

export default NameFilter