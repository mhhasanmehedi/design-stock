// Import dependencies
import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="emptyCart">
      <div className="icon">
        <GiShoppingCart />
      </div>
      <h3>Your Cart is Empty</h3>
      <Link className="primaryBtn backHomeBtn" to="/home">
        Back Home
      </Link>
    </div>
  );
};

export default EmptyCart;
