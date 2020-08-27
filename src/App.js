import React , { useState } from 'react';
import './App.css';
import Movie_list from './Components/Movie_list';
import moviesData from './Components/moviesData';
import Add_movie from './Components/Add_movie/Add_movie'
import Search from './Components/Search_movie/Search_movie'
import { Route, Link } from "react-router-dom";
import Movie_card from './Components/Movie_card/Movie_card'



function App() {
const[title,setTitle]=useState('')
const [ratingKey, setRatingKey] = useState(1);
const [movies,setMovies]=useState(moviesData)
const Adder = (e,newMovie) => {
  e.preventDefault();
    return setMovies([...movies,newMovie]);
};
return (
    <div>
      <Link to="/"><button className='Add'>Home</button></Link>
      <Route exact path="/" Component={Movie_list}></Route>

      <Search titleFiltre={setTitle}
              setRatingSearch={setRatingKey}
              ratingSearch={ratingKey}/>

      <Movie_list data={movies}
                  keyTitle={title}
                  ratingSearch={ratingKey}/>

      <Add_movie AddMovie={Adder}/>
    </div>
)
}
export default App;
