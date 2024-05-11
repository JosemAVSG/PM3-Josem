import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config/env";

export const createAccessToken= async (payload: { id?: number; _id?: any; }) : Promise<string | undefined>  =>{
   
    try {
         const token = jwt.sign(payload, TOKEN_SECRET,{ expiresIn: '12h' });
         return token
        
     } catch (error) {
         console.log(error)    
     }
}