import React from 'react'
import Movie_card from './Movie_card/Movie_card';
import { Route, Link } from "react-router-dom";
import element from "../element";
import './list.css';



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
    <>
    <Link to={`/${el.title}`}
      style={{textDecoration:"none"}}>
          <Movie_card key={i} movie={el} />
          </Link>
  <Route path={`/${el.title}`} render={()=>
      <div className='container'>
        <div className="name"><h1>{el.title}</h1></div>
      <div className='desc'><p>{el.fulldesc}</p></div>
        <button className='watch'>
          <h5><a href={el.trailer} target="_blank" style={{textDecoration:"none",color:"#F5DEB3"}}>Watch Trailer</a></h5>
        </button>
      </div> }></Route>
    </>
)}
  </div>

);
};
export default Movie_list;
