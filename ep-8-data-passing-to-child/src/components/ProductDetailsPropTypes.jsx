import PropTypes from "prop-types";

const ProductDetailsPropTypes = ({
  name = "Default Product Name",
  price = 0,
  description = "No description available",
}) => {
  console.log("ProductDetailsPropTypes props:", { name, price, description });

  return (
    <div>
      <h1>Product Details with PropTypes</h1>
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
    </div>
  );
};

/*
ProductDetailsPropTypes.defaultProps = {
  name: "Default Product Name",
  price: 0,
  description: "No description available",
};
*/
ProductDetailsPropTypes.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductDetailsPropTypes;
