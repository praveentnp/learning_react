import React from "react";
import { useState } from "react";
import ProductItem from "./ProductItem";

const Shop = () => {
  let [product, setProduct] = useState({
    name: "Laptop",
    price: 1000,
    description: "A high-performance laptop",
  });

  return (
    <div>
      <h1>Welcome to my Shop</h1>
      <ProductItem product1={product} />
    </div>
  );
};

export default Shop;
