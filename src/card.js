import React, { useState } from 'react';

export default function Card(props){
  const front = props.front.image
  const[src, setSrc] = useState(front)

  return(
    <div className="item">
      <img src={src} alt="front" onMouseLeave={() => setSrc(props.front.image)} onMouseOver={() => setSrc(props.back.image)}/>
      <h1>{props.name}</h1>
      <h1>${props.price}</h1>
    </div>
  )
}