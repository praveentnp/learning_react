import React from "react";
import ProductDetails from "./ProductDetails";
import ProductDetailDescructure from "./ProductDetailDescructure";
import ProductDetailsPropTypes from "./ProductDetailsPropTypes";

//const ProductItem = (props) => {

const ProductItem = ({ product1 }) => {
  //console.log("ProductItem props:", props);
  console.log("ProductItem product1:", product1);

  //let { product1 } = props;
  return (
    <div>
      <h1>Displaying ProductItem</h1>
      {/*
      <section> 
      <p>Name: {props.product.name}</p>
      <p>Price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
      </section> */}

      <ProductDetails prodDetails={product1} />

      <ProductDetailDescructure
        name={product1.name}
        price={product1.price}
        description={product1.description}
      />

      <ProductDetailsPropTypes
        name={product1.name}
        price={product1.price}
        description={product1.description}
      />
    </div>
  );
};

export default ProductItem;
