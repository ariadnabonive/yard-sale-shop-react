import React from "react";
import "../styles/Header.scss";

const Header = () => {
  return (
    <nav>
      <img src="./icons/icon_menu.svg" alt="menu" classname="menu " />
      <div classname="navbar-left">
        <img src="./logos/logo_yard_sale.svg" alt="logo" classname="logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div classname="navbar-right">
        <ul>
          <li classname="navbar-email">platzi@example.com</li>
          <li classname="navbar-shopping-cart">
            <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
