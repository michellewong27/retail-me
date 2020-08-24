import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import './App.css';
import json from './items.json'
import Card from './card'

function App() {

  return (
    <div className="App">
     <h1>Retail Me</h1>
     <div className="flex-container">
       {
         json.items.map(item => <Card {...item} key={item.id} /> )
       }
     </div>
    </div>
  );
}

export default App;
