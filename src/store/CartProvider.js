import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultsCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultsCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchChartAction] = useReducer(
    cartReducer,
    defaultsCartState
  );
  const addItemHandler = (item) => {
    dispatchChartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchChartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
