import "./summary.css";

function Summary(props) {
  const { subtotal, shippingCost, proceed } = props;

  return (
    <div className="summary">
      <button className="summary_button--top" onClick={proceed}>
        Procces to checkout
      </button>
      <div className="summary__shipping">SHIPPING: ${shippingCost}</div>
      <div className="summary__total">
        <div className="summary__total--title">CART TOTALS</div>
        <div className="summary__total--cost">
          <span className="summary__total--text">Subtotal:</span>{" "}
          <span className="summary__total--value">${subtotal}</span>
        </div>
        <div className="summary__total--cost">
          <span className="summary__total--text">Grand Total:</span>
          <span className="summary__total--value">
            ${subtotal + shippingCost}
          </span>
        </div>
        <button className="summary_button--inside" onClick={proceed}>
          Procces to checkout
        </button>
      </div>
    </div>
  );
}

export default Summary;
