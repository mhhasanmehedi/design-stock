import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { AiTwotoneDelete } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import useDocumentTitle from "../utils/documentTitle";

const Cart = () => {
  useDocumentTitle("Cart | Design Stock");

  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const clearCartHandler = () => {
    clearCart();
  };
  return (
    <Layout>
      <div className="cart sectionPadding">
        <div className="container">
          {cartItems?.length === 0 && (
            <div className="emptyCart">
              <div className="icon">
                <GiShoppingCart />
              </div>
              <h3>Your Cart is Empty</h3>
              <Link className="backHomeBtn" to="/home">
                Back Home
              </Link>
            </div>
          )}

          {cartItems?.length > 0 && (
            <>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <td>SL </td>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total Price</td>
                    <td style={{ width: "40px" }}>Action</td>
                  </tr>
                </thead>

                <tbody>
                  {cartItems?.map(({ id, title, price, quantity }, index) => (
                    <tr key={id}>
                      <td>{index}</td>
                      <td>{title}</td>
                      <td>{price}</td>
                      <td>{quantity}</td>
                      <td>{price * quantity}</td>
                      <td className="text-center">
                        <button
                          className="deleteBtn"
                          onClick={() => handleRemove(id)}
                        >
                          <AiTwotoneDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="d-flex align-items-center justify-content-between">
                <button className="clearBtn" onClick={clearCartHandler}>
                  Clear Cart
                </button>
                <button className="proceedBtn">Proceed To Checkout</button>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
