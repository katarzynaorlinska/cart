import Product from "../Product";

function List(props) {
  const {
    products,
    cart,
    addMoreProducts,
    addLessProducts,
    updateVisibleCartData,
    removeProduct,
  } = props;

  return (
    <div className="list">
      <p>Shopping Cart</p>
      <div className="list__container">
        <div className="list__container--title">
          <div>Product Name</div>
          <div>Unit Price</div>
          <div>Qty</div>
        </div>
        <div className="list__product">
          {cart.map((cartElement) => (
            <Product
              quantity={cartElement.quantity}
              key={cartElement.productId}
              product={products.find((x) => x.id === cartElement.productId)}
              addMoreProducts={addMoreProducts}
              addLessProducts={addLessProducts}
              updateVisibleCartData={updateVisibleCartData}
              removeProduct={removeProduct}
            ></Product>
          ))}
        </div>
        <button>Update shopping cart</button>
        <div></div>
      </div>
    </div>
  );
}

export default List;
