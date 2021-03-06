import React from "react";
import headphones from "../../images/headphones.png";
import edit from "../../images/edit-img.png";
import x from "../../images/x-img.png";
import "./product.css";

function Product(props) {
  const {
    product,
    addLessProducts,
    addMoreProducts,
    quantity,
    updateVisibleCartData,
    removeProduct,
  } = props;

  const productImages = [
    {
      id: 1,
      image: headphones,
    },
  ];

  return (
    <div className="product">
      <img
        onClick={() => removeProduct(product.id)}
        src={x}
        alt={product.name}
        className="product__icon"
      />
      <img
        className="product__photo"
        src={productImages.find((el) => el.id === product.id).image}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <div className="product__price">${product.price}</div>
      <button
        className="product_button"
        onClick={() => addMoreProducts(product.id)}
      >
        +
      </button>
      <div className="product_button product_button--content">{quantity}</div>
      <button
        className="product_button"
        onClick={() => addLessProducts(product.id)}
      >
        -
      </button>
      <img
        className="product__icon"
        onClick={updateVisibleCartData}
        src={edit}
        alt={product.name}
      />
    </div>
  );
}

export default Product;
