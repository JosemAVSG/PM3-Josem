import { configureStore ,Action,ThunkAction } from "@reduxjs/toolkit";
import authSlice from "../reducers/authSlice";


const store = configureStore({
    reducer: {
        auth: authSlice,
    },
});

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>