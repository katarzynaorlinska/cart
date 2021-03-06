import { renderHook } from "@testing-library/react-hooks";
import useCartLogic from "./useCartLogic";

test("Should have default subtotal amount", async () => {
  const { result } = renderHook(() => useCartLogic());

  expect(result.current.subtotal).toBe(23.8);
});
