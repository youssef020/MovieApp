import React from 'react'
import Rate from '../Rate';
import './Search_movie.css';


const Search =({titleFiltre,ratingSearch,setRatingSearch})=>
{
  return (
    <div className='search-container'>
    <input
      type='text'
      placeholder='Type the movie name'
      onChange={(e)=>{titleFiltre(e.target.value)}}/>
    <Rate
      className='star-rating'
         index={setRatingSearch}
         rating={ratingSearch} >

    </Rate>
    </div>

  )
}
export default Search;
