import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0,
    shipping = 0;
  cart.forEach((cart) => ((total += cart.price), (shipping += cart.shipping)));
  const tax = total * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h5>Grand Total: {grandTotal}</h5>
    </div>
  );
};

export default Cart;
