import {
  addToCart,
  removeFromCart,
  //   incrementProductCount,
  //   decrementProductCount,
} from "../../constants/cart";

export const addToCartAction = (payload: any) => {
  return {
    type: addToCart,
    payload,
  };
};
export const removeFromCartAction = (payload: any) => {
  return {
    type: removeFromCart,
    payload,
  };
};

// export const incrementCount = (payload: any) => {
//   return {
//     type: incrementProductCount,
//     payload,
//   };
// };
// export const decrementCount = (payload: any) => {
//   return {
//     type: decrementProductCount,
//     payload,
//   };
// };
