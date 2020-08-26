import React from "react";
import Navbar from './navbar';
import { Route, Switch } from 'react-router-dom';

import Carousel from "./carousel";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Retail Me</h1>
      <Carousel />
    </div>
  );
}
