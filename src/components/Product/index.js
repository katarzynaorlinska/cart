import React from "react";
import headphones from "../../images/headphones.png";
import edit from "../../images/edit-img.png";
import x from "../../images/x-img.png";

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
    <div>
      <img
        onClick={() => removeProduct(product.id)}
        src={x}
        alt={product.name}
      />
      <img
        src={productImages.find((el) => el.id === product.id).image}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <div>{product.price}</div>
      <button onClick={() => addMoreProducts(product.id)}>+</button>
      <div>Liczba {quantity}</div>
      <button onClick={() => addLessProducts(product.id)}>-</button>
      <img onClick={updateVisibleCartData} src={edit} alt={product.name} />
    </div>
  );
}

export default Product;
