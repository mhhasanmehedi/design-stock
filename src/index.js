// import dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import CartProvider from "./contexts/CartContext";
import ToastProvider from "./components/ui/ToastProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <ToastProvider />
      <App />
    </CartProvider>
  </React.StrictMode>
);
