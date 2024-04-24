import { Request, Response } from "express";
import { CreateAppointment, GetAllAppointments, cancelAppointment, GetAppointmentById } from "../services/appoinmentServices";


export const createTurn = async (req: Request, res: Response) => {

    const { dia, time, timeEnd, userId, description } = req.body;
    const status = true;
    const newTurn  =  await CreateAppointment({ dia, time, timeEnd,  userId , status, description });
    res.status(201).json(newTurn);
}

export const getAllTurns = async (req: Request, res: Response) => {
    const turns =  GetAllAppointments();
    res.status(200).json(turns);
}

export const cancelTurn = async (req: Request, res: Response) => {
    const { id } = req.params;
    const turn = cancelAppointment(Number(id));
    res.status(200).json(turn);
}

export const getTurnById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const turn = GetAppointmentById(Number(id));
    res.status(200).json(turn);
}