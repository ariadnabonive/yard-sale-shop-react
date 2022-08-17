import React from "react";
import ProductInfo from "../components/ProductInfo";
import "../styles/ProductDetail.scss";

const ProductDetail = () => {
  return (
    <div>
      <aside classname="ProductDetail">
        <div classname="ProductDetail-close">
          <img src="./icons/icon_close.png" alt="close" />
        </div>
        <ProductInfo/>
      </aside>
    </div>
  );
};

export default ProductDetail;
