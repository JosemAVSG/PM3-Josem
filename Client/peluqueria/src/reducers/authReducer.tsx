import { PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  isAuthenticated: false,
  user: null,
  errors: [],
  loading: true,
};

const authReducer = (state = initialState, action:PayloadAction) => {
  switch (action.type) {
    case "SET_AUTHENTICATION":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "REGISTER_FAIL":
      return {
        ...state,
        errors: action.payload,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        errors: action.payload,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;