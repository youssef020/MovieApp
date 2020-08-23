import React from 'react'
import './Movie_card.css';
import Rate from '../Rate'


const Movie_card=({movie:{title,date,description,poster,rate,bg}})=>{
  return(
<div>
<div className='card'>
  <div className='header'>
  <div className='poster' style={{backgroundImage:`url(${bg})`}}>
    <img src={poster}/>
  </div>
  <div className='title'>
    <h3>{title}</h3>
  </div>
  <div className='date'>
    <h2>{date}</h2>
  </div>
  <div className= 'rate'>
    <Rate rating={rate}/>
  </div>
  </div>
  <br />
    <div className='description'>
      <p>{description}</p>
    </div>
</div>
</div>
)
};
export default Movie_card;
