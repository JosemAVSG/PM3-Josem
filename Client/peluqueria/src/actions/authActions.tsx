import {loginRequest, registerRquest, veryfyToken} from '../api/auth'
// import Cookie from 'js-cookie'

export const singupUser =  (userData)=>{
    return async (dispatch)=>{
    
    try {
        const res = await  registerRquest(userData);
     dispatch(RegisterSuccess(res.data));
        
    } catch (error) {
        console.log(error)        
    }

    }
}