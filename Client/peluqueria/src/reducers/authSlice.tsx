import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../redux/store";
import { getUser, loginRequest, registerRequest } from '../api/auth';
import { IUser, IUserLogin } from "../types/user.interface";
import { verifyToken } from "../api/auth";
import Cookie from 'js-cookie';
// import { ITurn } from "../types/turn.interface";
import {  getTurnByUserId} from "../api/turn";
const initialState = {
  isAuthenticated: false,
  user:null,
  errors: null,
  loading: true,
  userTurns:[], 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    gettingTurns(state, action) {
      return {
        ...state,
        userTurns: action.payload
      }
    },
    Loading(state, action) {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setError(state, action) {
      return {
        ...state,
        errors: action.payload,
      };
    },
    Authentication(state, action) {
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    },
    User(state, action) {
      return {
        ...state,
        user: action.payload
      };
    },
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
    },
  },
});

export const signupUser = (userData: IUser) : AppThunk => {
    return async (dispatch) => {
      try {
        const res = await registerRequest(userData);
        dispatch(RegisterSucces(res.data));
      } catch (error) {
        dispatch(RegisterFail(error as Error));
      }
    };
  };
  
  export const signinUser = (userData: IUserLogin) : AppThunk => {
    return async (dispatch) => {
      try {
        const res = await loginRequest(userData);
        dispatch(LoginSucces(res.data));
        dispatch(verifyTokenAction()); // Verificar token después 6de iniciar sesión
      } catch (error) {
        dispatch(LoginFail(error));
      }
    };
  };

  export const verifyTokenAction = (): AppThunk => {
    return async (dispatch) => {

      const cookies = Cookie.get();

      try {
        if(!cookies.token){
          dispatch(Authentication(false));
          dispatch(Loading(false));
          return
        }
        const res = await verifyToken();

        
        if (!res.data){
          dispatch(Authentication(false));
        } 
        dispatch(Authentication(true));
        dispatch(Loading(false));
        const {payload:{id}} = res.data
        const user= await getUser(id);
        console.log(user.data);
        dispatch(User({login:true, user:user.data}));
      } catch (error) {
        dispatch(Authentication(false));
        dispatch(Loading(false));
      }
    
    };
  
  };

  export const turnsAction = (id:number): AppThunk => {
    return async (dispatch) => {
      try {    
        const res   = await getTurnByUserId(id);
        dispatch(gettingTurns(res.data));
      } catch (error) {
          dispatch(setError(error as Error)); 
      }
    }
  }

export const { RegisterSucces, setError, LoginSucces, LoginFail, RegisterFail, Loading, Authentication, User, gettingTurns } = authSlice.actions;
export default authSlice.reducer

