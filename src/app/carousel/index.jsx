import React, { useState } from "react";
import "./styles.css";
import Card from "../card";
import json from "./items.json";

const cardWidth = 300 * 4;

export default function Carousel({ items }) {
  const [left, setLeft] = useState(0);
  return (
    <div className="carousel">
      <div
        className="arrow left"
        onClick={() => setLeft((left) => left - cardWidth)}
      >
        {String.fromCharCode(171)}
      </div>
      <div className="items">
        <div
          className="slider"
          style={{
            top: 0,
            left: left,
          }}
        >
          {json.items.map((item) => (
            <Card {...item} key={item.id} />
          ))}
        </div>
      </div>
      <div
        className="arrow right"
        onClick={() => setLeft((left) => left + cardWidth)}
      >
        {String.fromCharCode(187)}
      </div>
    </div>
  );
}
