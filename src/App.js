import React from 'react';
import './App.css';

import json from './items.json'

function App() {
  console.log(json.items)
  return (
    <div className="App">
     <h1>Retail Me</h1>
     <h2></h2>
    </div>
  );
}

export default App;
