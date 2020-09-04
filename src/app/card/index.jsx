import React, { useState, useRef, useEffect } from "react";
import Item from '../item';
import { withRouter } from "react-router-dom"
// import {Link} from 'react-router-dom';

//props doesnt work when i import {history,match}
function Card( props) {
  const front = props.front.image;
  const [src, setSrc] = useState(front);
  const [ref, hovered] = useHover();

  function useHover() {
    const ref = useRef(null);
    const [hovered, setHovered] = useState(false);

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    useEffect(() => {
      ref.current.addEventListener("mouseenter", enter);
      ref.current.addEventListener("mouseleave", leave);

      return () => {
        ref.current.removeEventListener("mouseenter", enter);
        ref.current.removeEventListener("mouseleave", leave);
      };
    }, [ref]);

    return [ref, hovered];
  }

  function viewItem(e) {
    console.log("Viewing item page", props);
    //use match to find item id or use props to get id?
    // window.location.href = `/clothing/${id}`;

    // history.push(`/clothing/${id}`);

  }

  function addToCart() {
    console.log("Add to cart");
  }

  //onClick of add to cart, also views product page?
  return (
    // <Link to='/clothing/:id'>
      <div
        className="card"
        ref={ref}
        onMouseLeave={() => setSrc(props.front.image)}
        onMouseEnter={() => setSrc(props.back.image)}
        onClick={(e) => viewItem(e)}
      >
        <div className="image-wrap">
          <img src={src} alt="front" />
          {hovered && (
            <div className="quick-add">
              <button className="button primary">Quick view</button>
              <div className="select-size">
                <select className="select-btn" name="Size" id="size">
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                </select>
              </div>
              <div className="addtocart">
                <button className="button primary" onClick={addToCart}>
                  Add to cart
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="item-description">
          <h1>{props.name}</h1>
          <h1>${props.price}</h1>
        </div>
      </div>
    // </Link>
  );
}

export default withRouter(Card);