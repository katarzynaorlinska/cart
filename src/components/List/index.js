import Product from "../Product";
import "./list.css";

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
      <p className="list__title">Shopping Cart</p>
      <div className="list__container">
        <div className="list__container--title">
          <div className="list__container--content">Product Name</div>
          <div className="list__container--content">Unit Price</div>
          <div className="list__container--content">Qty</div>
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

        <div className="list__submit">
          <button className="list__button" onClick={updateVisibleCartData}>
            Update shopping cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default List;
