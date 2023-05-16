import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import ShoppingIcon from "../assets/images/shopping.png";
import { CartContext } from "../contexts/CartContext";

const navbarData = [
  {
    pageName: "Home",
    slug: "/home",
  },
  {
    pageName: "Our Services",
    slug: "/service",
  },
  {
    pageName: "About us",
    slug: "/about",
  },
  {
    pageName: "Contact us",
    slug: "/contact",
  },
];

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar navBar navbar-expand-lg ">
      <div className="container">
        <Link className="navbar-brand logo" to="/home">
          <img src={Logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navbarData?.map((item) => (
              <li className="nav-item" key={item.pageName}>
                <NavLink
                  className={`nav-link navLink`}
                  aria-current="page"
                  to={item.slug}
                >
                  {item.pageName}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navBtns">
            <Link to="/cart" className="cartBtn">
              <img src={ShoppingIcon} alt="Shopping cart icon" />
              <div className="count">{cartItems?.length}</div>
            </Link>
            <button className="loginBtn">Log in</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
