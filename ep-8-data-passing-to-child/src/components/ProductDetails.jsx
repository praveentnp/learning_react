import React from "react";

const ProductDetails = ({ prodDetails }) => {
  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {prodDetails.name}</p>
      <p>Price: {prodDetails.price}</p>
      <p>Description: {prodDetails.description}</p>
    </div>
  );
};

export default ProductDetails;
