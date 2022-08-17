import React from "react";
import { Header } from "../components/Header";
import { ProductList } from '../containers/ProductList';

const Home = () => {
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
};

export { Home };
