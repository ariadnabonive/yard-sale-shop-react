import React from "react";
import { ProductItem } from "../components/ProductItem";
import "../styles/ProductList.scss";

const ProductList = () => {
  return (
    <section classname="main-container">
      <div classname="ProductList">
        <productItem />
      </div>
    </section>
  );
};

export { ProductList };
