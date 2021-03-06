import { useState, useEffect, useCallback } from "react";
import { maxShipmentExtraPrice, shippingPrice } from "../constants";
import productsData from "../data/products.json";
import cartProducts from "../data/cart_products.json";

function useCartLogic() {
  const [cartData, setCartData] = useState(cartProducts);
  const [visibleCartData, setVisibleCartData] = useState(cartProducts);
  const [subtotal, setSubtotal] = useState();

  const shippingCost =
    subtotal > maxShipmentExtraPrice || subtotal === 0 ? 0 : shippingPrice;

  const updateSubtotal = useCallback(() => {
    const sum = visibleCartData.reduce((accumulator, currentValue) => {
      const elementPrice = productsData.find(
        (x) => x.id === currentValue.productId
      ).price;
      return accumulator + currentValue.quantity * elementPrice;
    }, 0);

    setSubtotal(sum);
  }, [visibleCartData]);

  useEffect(() => {
    updateSubtotal();
  }, [updateSubtotal]);

  const updateVisibleCartData = () => setVisibleCartData(cartData);

  const addMoreProducts = (id) => {
    const newCartData = cartData.map((el) =>
      el.productId === id ? { ...el, quantity: el.quantity + 1 } : el
    );
    setCartData(newCartData);
  };

  const removeProduct = (id) => {
    setCartData(cartData.filter((el) => el.productId !== id));
    setSubtotal(0);
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
    shippingCost,
    subtotal,
    removeProduct,
  };
}

export default useCartLogic;
