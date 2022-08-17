import React from "react";
import OrderItem from '../components/OrderItem';
import "../styles/Checkout.scss";

const Checkout = () => {
  return (
    <div classname="Checkout">
      <div classname="Checkout-container">
        <h1 classname="title">My order</h1>
        <div classname="Checkout-content">
          <div classname="order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
          </div>
        </div>
        <OrderItem />
      </div>
    </div>
  );
};

export default Checkout;
