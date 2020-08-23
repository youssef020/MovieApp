import React from 'react'
import Movie_card from './Movie_card/Movie_card';


const Movie_list = ({data,keyTitle,ratingSearch}) => {
return(
  <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}>
  {data.filter(
    (obj) => obj.rate >= ratingSearch && obj.title.toLowerCase().includes(keyTitle.toLowerCase().trim()))
    .map( (el, i) =>
          <Movie_card key={i} movie={el} />
)}
  </div>

);
};
export default Movie_list;
