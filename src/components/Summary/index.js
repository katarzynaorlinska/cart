function Summary(props) {
  const { subtotal, shippingCost, proceed } = props;

  return (
    <div className="list">
      <p>Shipping: {shippingCost}</p>
      <p>Total: {subtotal}</p>
      <p>Grand: {subtotal + shippingCost}</p>
      <button onClick={proceed}>Procces to checkout</button>
    </div>
  );
}

export default Summary;
