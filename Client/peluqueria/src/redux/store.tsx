// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import reducer from "../reducers/rootReducer";
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    reducer,
  },
});
// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
