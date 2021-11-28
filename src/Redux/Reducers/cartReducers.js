import { CART_ADD_ITEM, CART_EMPTY, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING } from "../constants/carConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const exsistItem = state.cartItems.find(
        (c) => c.product === item.product
      );
      if (exsistItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((c) =>
            c.product === exsistItem.product ? item : c
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.product !== action.payload),
      };
    case CART_SAVE_SHIPPING:
      return {
        ...state, shippingAddress :action.payload
      }
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state, PaymentMethod:action.payload
      }
      case CART_EMPTY:
      return {
        ...state, cartItems: []
      }
    default:
      return state;
  }
};
