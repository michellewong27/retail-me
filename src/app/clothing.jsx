import React from 'react';
import json from "./carousel/items.json";
import Card from "./card/index.jsx";

export default function Clothing(){
  return(
    <div className="clothing">
      <h1>All clothing items</h1>
      {
        json.items.map((item) => (
          <Card {...item} key={item.id} />
        ))
      }
    </div>
  )
}
