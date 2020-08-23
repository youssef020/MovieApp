import React from 'react'


const Rate =({rating,index})=>
{let starArray=[]
  for(let i=1;i<=5;i++)
    {if(i<=rating)
      {
      starArray.push(<span
      className="rating"
      key={i}
      style={{ cursor: 'pointer' ,color:'#2D066D',  }}
      onClick={() => index(i)}>★</span>)}
    else{
      starArray.push(<span
      className="rating"
      key={i}
      style={{ cursor: 'pointer',color:'#2D066D' }}
      onClick={() => index(i)}>☆</span>)}
}
return(
  starArray
)
};
export default Rate ;
