// Import Dependencies
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import toastify from "../../utils/toastify";
import { AiTwotoneDelete } from "react-icons/ai";

const CartTr = (props) => {
  const { id, title, price, quantity } = props.item || {};
  const { removeFromCart } = useContext(CartContext);

  // Remove handler
  const handleRemove = (id) => {
    removeFromCart(id);
    toastify.success("Delete from cart successfully!");
  };
  return (
    <>
      <tr key={id}>
        <td>{props.index + 1}</td>
        <td>{title}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>${price * quantity}</td>
        <td className="text-center">
          <button className="deleteBtn" onClick={() => handleRemove(id)}>
            <AiTwotoneDelete />
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartTr;
