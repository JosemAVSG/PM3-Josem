import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "token":"authorized"
    },
    responseType: "json",
});
export default instance;