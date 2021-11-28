import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./cartReducers";
import {  orderDetailsReducers, orderReducers } from "./orderReducers";
// import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailsReducer, productReducer } from "./productReducers";
import { userRegisterReducer, userSigninReducer } from "./userReducer";

const initialState = {
  userSignin :{
    userInfo:localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
    
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
      shippingAddress: localStorage.getItem("shippingAddress")
      ? JSON.parse(localStorage.getItem("shippingAddress"))
      : {},
      paymentMethod:"Paypal"
  },
};

const reducer = combineReducers({
  productList: productReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin :userSigninReducer,
  userRegister:userRegisterReducer,
  orderCreate:orderReducers,
  orderDetails :orderDetailsReducers
});

 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
   composeEnhancer(applyMiddleware(thunk))
  // applyMiddleware(thunk)
);

export default store;
