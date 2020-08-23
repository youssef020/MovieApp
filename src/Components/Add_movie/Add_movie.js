import React, { useState } from 'react';
import Modal from 'react-modal';
import './Add_movie.css'
import Rate from '../Rate';

function Add_movie ({ AddMovie }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [poster, setPoster] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState(1);
  function openModal() {
    setIsOpen(true);
  }
function closeModal() {
    setIsOpen(false);
    setTitle('');
    setDate('');
    setPoster('');
    setDescription('');
    setRate(1);
  }

const handleAdd = (e) => {
   let newMovie = {
     title: title,
     date: date,
     poster: poster,
     description: description,
     rate: rate,
   };
   AddMovie(e,newMovie);
   setIsOpen(false);

   setTitle('');
   setDate('');
   setPoster('');
   setDescription('');
   setRate(1);
 };
return(
  <div className='addMovie'>
      <button className="Add" onClick={openModal}>
          +Add
      </button>
  <Modal
      className="Modal"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}>
      <h1 className='addmovie'>Add a movie</h1>
        <form>
            <label>Movie Name</label>
            <input
              value={title}
              type="text"
              name="title"
              required
              onChange={(e) => setTitle(e.target.value)}/>
            <br />
            <label>Date</label>
              <input
                value={date}
                type="Number"
                name="date"
                required
                onChange={(e) => setDate(e.target.value)}/>
              <br />
            <label>Description</label>
              <input
              value={description}
              type="text"
              name="description"
              required
              onChange={(e) => setDescription(e.target.value)}/>
            <br />
          <label>Movie Poster</label>
            <input
            value={poster}
            type="url"
            name="poster"
            required
            onChange={(e) => setPoster(e.target.value)}/>
          <label>Movie Rate</label>
            <input
              value={rate}
              type="text"
              name="rating"
              required
              onChange={(e) => setRate(e.target.value)}/>
      </form>
      <br />
      <button className="buttons" onClick={handleAdd}>
          Submit
      </button>
      <button className="buttons" onClick={closeModal}>
          close
      </button>
</Modal>
</div>
);};
export default Add_movie;
