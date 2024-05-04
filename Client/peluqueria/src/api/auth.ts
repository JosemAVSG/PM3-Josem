import instance from "./axios";
import { IUser, IUserLogin } from "../types/user.interface";
export const registerRequest = async (data: IUser ) => {
    return await instance.post("/users/resgister", data);
}

export const loginRequest = async (data:IUserLogin) => {
    return await instance.post("/users/login", data);
}

export const getUser = async (id: number) => {
   const data = await instance.get(`/users/${id}`);
   return data ;
}
export const verifyToken = async () => {
    return await instance.get("/verify");
}