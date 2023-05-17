// Import Dependencies
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import toastify from "../../utils/toastify";

const CartTotal = () => {
  const { cartItems } = useContext(CartContext);

  //   Calculate Total Price
  const totalPrice = cartItems.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  //   Checkout Handler
  const handleCheckout = () => {
    toastify.success("Thank Your! Your Order Proceed to checkout");
  };
  return (
    <div className="cartTotal">
      <h3 className="title">Cart Totals</h3>
      <h5>
        Subtotal <span>${totalPrice}</span>
      </h5>
      <h5>
        Shipping <span>$5</span>
      </h5>
      <h5>
        Shipping Address <span>Trishal, Mymensingh</span>
      </h5>
      <h5>
        Total <span>${totalPrice + 5}</span>
      </h5>

      <button onClick={handleCheckout} className="primaryBtn proceedBtn">
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartTotal;
