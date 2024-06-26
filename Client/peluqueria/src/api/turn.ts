import {  turnDto } from "../types/turn.interface";
import instance from "./axios";

export const getTurns = async () => {
    return await instance.get("/turns");
}
export const createTurn = async (data: turnDto) => {
    return await instance.post("/turns/schedule", data);
}

export const cancelTurn = async (id: number) => {
    return await instance.put(`/turns/cancel/${id}`);
}

export const getTurnById = async (id: number) => {
    return await instance.get(`/turns/${id}`);
}

export const getTurnByUserId = async (id: number) => {
    return await instance.get(`/turns/user/${id}`);
}