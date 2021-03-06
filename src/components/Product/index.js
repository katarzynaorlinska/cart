import React from "react";

function Product(props) {
  const { product, addLessProducts, addMoreProducts, quantity } = props;
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>{product.price}</div>
      <button onClick={() => addMoreProducts(product.id)}>+</button>
      <div>Liczba {quantity}</div>
      <button onClick={() => addLessProducts(product.id)}>-</button>
    </div>
  );
}

export default Product;
