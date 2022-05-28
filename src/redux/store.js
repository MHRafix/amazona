import Cookies from "js-cookies";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cart_product from "./cart_products/reducer";
import userInfo from "./users_login/reducer";

const combinedReducer = combineReducers({
  cart_product,
  userInfo,
});

const masterReducer = (state, action) => {
  if (action.types === HYDRATE) {
    const nextState = {
      ...state,
      cartedProducts: {
        cart_product:
          state.cart_product.quantity + action.payload.cart_product.quantity,
      },
      user_info: Cookies.getItem("userInfo")
        ? JSON.parse(Cookies.get("userInfo"))
        : null,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  return createStore(masterReducer, composeWithDevTools(applyMiddleware()));
};

export const wrapper = createWrapper(initStore);
