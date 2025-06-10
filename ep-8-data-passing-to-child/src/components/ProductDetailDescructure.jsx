import React from "react";

const ProductDetailDescructure = ({ name, price, description }) => {
  return (
    <div>
      <h1>Product Detail De-Structure</h1>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default ProductDetailDescructure;
