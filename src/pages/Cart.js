// import dependencies
import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Layout from "../components/layout/Layout";
import useDocumentTitle from "../utils/documentTitle";
import toastify from "../utils/toastify";
import EmptyCart from "../components/cart/EmptyCart";
import CartTr from "../components/cart/CartTr";
import CartTotal from "../components/cart/CartTotal";

const Cart = () => {
  // Set Document Title
  useDocumentTitle("Cart | Design Stock");

  const { cartItems, clearCart } = useContext(CartContext);

  // Cart Clear Handler
  const clearCartHandler = () => {
    clearCart();
    toastify.success("Clear your cart successfully!");
  };

  return (
    <Layout>
      <div className="cart sectionPadding">
        <div className="container">
          {/* If Cart is Empty  */}
          {cartItems?.length === 0 && <EmptyCart />}

          {cartItems?.length > 0 && (
            <div className="row g-4">
              <div className="col-lg-8">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <td>SL</td>
                      <td>Title</td>
                      <td>Price</td>
                      <td>QTY</td>
                      <td>Total Price</td>
                      <td style={{ width: "40px" }}>Action</td>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems?.map((item, index) => (
                      <CartTr key={item.id} item={item} index={index} />
                    ))}
                  </tbody>
                </table>

                <div className="d-flex align-items-center justify-content-between">
                  <button
                    className="primaryBtn clearBtn"
                    onClick={clearCartHandler}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              <div className="col-lg-4">
                <CartTotal />
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
