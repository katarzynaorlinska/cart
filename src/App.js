import List from "./components/List";
import Summary from "./components/Summary";
import useCartLogic from "./hooks/useCartLogic";
import "./App.css";

function App() {
  const {
    cartData,
    productsData,
    addMoreProducts,
    addLessProducts,
    visibleCartData,
    updateVisibleCartData,
  } = useCartLogic();

  console.log(cartData);

  return (
    <div className="App">
      <List
        products={productsData}
        cart={cartData}
        addMoreProducts={addMoreProducts}
        addLessProducts={addLessProducts}
      />
      <Summary cart={visibleCartData} products={productsData} />
    </div>
  );
}

export default App;
