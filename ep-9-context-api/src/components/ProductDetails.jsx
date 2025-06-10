import { UserContext } from "../App";
import { useContext } from "react";

const ProductDetails = ({ prodDetails }) => {
  const { user } = useContext(UserContext);

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
