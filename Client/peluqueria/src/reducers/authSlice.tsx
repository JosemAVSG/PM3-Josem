import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  errors: [],
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RegisterSucces(state, action) {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    },
    LoginSucces(state, action) {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    },
    LoginFail (state, action) {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        errors: action.payload
      }
    },
    RegisterFail (state, action) {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        errors: action.payload
      }
    }
  },
});

export const { RegisterSucces, LoginSucces, LoginFail, RegisterFail } = authSlice.actions;
export default authSlice.reducer