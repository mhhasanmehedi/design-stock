// Import dependencies
import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { GiCheckMark } from "react-icons/gi";
import toastify from "../../utils/toastify";

const PricingCard = ({ service }) => {
  // Destructure Service object
  const { id, price, title, features, comment } = service || {};

  const { addToCart } = useContext(CartContext);
  const [hover, setHover] = useState();

  // Mouse Enter Handler
  const handleMouseEnter = () => {
    setHover(true);
  };

  // Mouse Leave Handler
  const handleMouseLeave = () => {
    setHover(false);
  };

  // Add to Cart Handler
  const handleAddToCart = () => {
    addToCart({ id, title, price, features });

    toastify.success("Services added successfully!");
  };

  // Background dynamic style
  const bgStyle = `${
    comment === "popular"
      ? "linear-gradient(262.64deg, #FF9810 0%, #FFB452 100%)"
      : comment === "recommended"
      ? "linear-gradient(268.01deg, #FF4426 0%, #FF6952 100%)"
      : "linear-gradient(262.64deg, #5938FF 0%, #7B61FF 100%)"
  }`;

  // Hover background dynamic style
  const hoverBgStyle = `${
    comment === "popular"
      ? "linear-gradient(262.64deg, #FFB452 0%, #FF9810 100%)"
      : comment === "recommended"
      ? "linear-gradient(268.01deg, #FF6952 0%, #FF4426 100%)"
      : "linear-gradient(262.64deg, #7B61FF 0%, #5938FF 100%)"
  }`;

  // Color dynamic style
  const colorStyle = `${
    comment === "popular"
      ? "#FFA630"
      : comment === "recommended"
      ? "#FF573C"
      : "#674AFF"
  }`;

  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="singlePricingCard"
        style={{ border: `1px solid ${colorStyle}` }}
      >
        {comment !== "" && (
          <div
            className="comment"
            style={{
              border: `1px solid ${colorStyle}`,
              color: colorStyle,
            }}
          >
            {comment === "popular"
              ? "Most Popular"
              : comment === "recommended" && "Highly Recommended"}
          </div>
        )}
        <div
          className="cardHeader"
          style={{
            background: bgStyle,
          }}
        >
          <h4 className="title">{title}</h4>
          <h4 className="price">
            ${price} <span>/Start From</span>
          </h4>
        </div>
        <div className="cardContent">
          <ul className="features">
            {features?.map((feature, i) => (
              <li key={i} className="feature">
                <div className="icon">
                  <GiCheckMark style={{ color: colorStyle }} />
                </div>
                {feature}
              </li>
            ))}
          </ul>
          <button
            className="primaryBtn addToCartBtn"
            style={{ background: hover ? hoverBgStyle : bgStyle }}
            onClick={handleAddToCart}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
