import React from 'react';
const element = ({fulldesc,trailer}) =>
{
  return(
    <div>
      <h1>{fulldesc}</h1>
      <h2><a href={trailer}>Watch Trailer</a></h2>
    </div>
  )
}
export default element;
