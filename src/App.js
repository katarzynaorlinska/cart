import { useState } from "react";
import List from "./components/List";
import Summary from "./components/Summary";
import useCartLogic from "./hooks/useCartLogic";
import "./App.css";

function App() {
  const [isProceed, setProceed] = useState(false);
  const proceed = () => setProceed(true);

  const {
    cartData,
    productsData,
    addMoreProducts,
    addLessProducts,
    visibleCartData,
    updateVisibleCartData,
    subtotal,
    shippingCost,
    removeProduct,
  } = useCartLogic();

  if (isProceed === true) {
    return <span>Your order has been submitted successfully</span>;
  }

  return (
    <div className="App">
      <List
        products={productsData}
        cart={cartData}
        addMoreProducts={addMoreProducts}
        addLessProducts={addLessProducts}
        updateVisibleCartData={updateVisibleCartData}
        removeProduct={removeProduct}
      />
      <Summary
        subtotal={subtotal}
        shippingCost={shippingCost}
        cart={visibleCartData}
        products={productsData}
        proceed={proceed}
      />
    </div>
  );
}

export default App;
