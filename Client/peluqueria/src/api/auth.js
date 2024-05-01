import instance from "./axios";
export const registerRequest = async (data) => {
    return await instance.post("/register", data);
}

export const loginRequest = async (data) => {
    return await instance.post("/login", data);
}

export const verifyToken = async () => {
    return await instance.get("/verify");
}