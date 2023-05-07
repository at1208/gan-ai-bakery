import { addToCart, removeFromCart } from "../../constants/cart";

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case addToCart:
      return {
        cart: action.payload,
      };
    case removeFromCart:
      return {
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
