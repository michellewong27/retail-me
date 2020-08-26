import React, { useState, useRef, useEffect } from "react";

export default function Card(props) {
  const front = props.front.image;
  const [src, setSrc] = useState(front);
  const [ref, hovered] = useHover();
  // const [button, setButton] = useState()

  //on hover, set src to be back & button to appear
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

  function viewPage() {
    console.log("Viewing page", props);
    
  }

  function addToCart() {
    console.log("Add to cart");
  }

  //onClick of add to cart, also views product page?

  return (
    <div
      className="card"
      ref={ref}
      onMouseLeave={() => setSrc(props.front.image)}
      onMouseEnter={() => setSrc(props.back.image)}
      onClick={viewPage}
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

      <h1>{props.name}</h1>
      <h1>${props.price}</h1>
    </div>
  );
}
