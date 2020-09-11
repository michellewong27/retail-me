import React from "react";
import Navbar from './navbar';
import Clothing from './clothing';
import Item from './item';
import { Route, Switch } from 'react-router-dom';
import Carousel from "./carousel";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route  path="/clothing/:id" render={() => <Item />} />
        <Route  path="/clothing" render={() => <Clothing />} />
        <Route  exact path="/" render={() => <Carousel />} />
      </Switch>
    </div>
  );
}
