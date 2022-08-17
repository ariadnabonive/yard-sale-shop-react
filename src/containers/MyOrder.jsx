import React from 'react';
import '../styles/MyOrder.scss';

const MyOrder = () => {
  return (
    <aside classname="MyOrder">
      <div classname="title-container">
        <img src="./icons/flechita.svg" alt="arrow" />
        <p classname="title">My order</p>
      </div>
      <div classname="my-order-content">
        <orderitem>
          <div classname="order">
            <p>
              <span>Total</span>
            </p>
            <p>$560.00</p>
          </div>
          <button classname="primary-button">Checkout</button>
        </orderitem>
      </div>
    </aside>
  );
};

export default MyOrder;
