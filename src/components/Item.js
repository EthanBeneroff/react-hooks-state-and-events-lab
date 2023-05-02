import React from "react";
import { useState } from "react";

function Item({ name, category }) {

const [inCart, setInCart] = useState(false)
const handleClick = () => {setInCart(prev => !prev)}

  return (
    <li className={inCart?"in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart? "Remove from cart" : "Add to cart"}</button>
    </li>
  );
}

export default Item;
