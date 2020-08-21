import React from 'react'

export default function Card(props){
  return(
    <div className="item">
      <img src={props.front.image} />
      <h1>{props.name}</h1>
      <h1>{props.price}</h1>
    </div>
  )
}