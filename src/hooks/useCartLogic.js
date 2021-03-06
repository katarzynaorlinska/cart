import { useState } from "react";
import productsData from "../data/products.json";
import cartProducts from "../data/cart_products.json";

function useCartLogic() {
  const [cartData, setCartData] = useState(cartProducts);
  const [visibleCartData, setVisibleCartData] = useState(cartProducts);
  const [total, setTotal] = useState(0);

  const updateVisibleCartData = () => setVisibleCartData(cartData);

  const addMoreProducts = (id) => {
    const newCartData = cartData.map((el) =>
      el.productId === id ? { ...el, quantity: el.quantity + 1 } : el
    );
    setCartData(newCartData);
  };

  const addLessProducts = (id) => {
    const product = cartData.find((el) => el.productId === id);
    if (product?.quantity === 1) {
      return setCartData(cartData.filter((el) => el.productId !== id));
    }
    const newCartData = cartData.map((el) =>
      el.productId === id ? { ...el, quantity: el.quantity - 1 } : el
    );
    setCartData(newCartData);
  };

  return {
    cartData,
    productsData,
    addMoreProducts,
    addLessProducts,
    visibleCartData,
    updateVisibleCartData,
  };
}

export default useCartLogic;
