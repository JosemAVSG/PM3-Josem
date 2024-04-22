import { Request, Response } from "express";
import { appoimentDto } from "../dto/user.dto";
import { CreateAppointment, GetAllAppointments, CancelAppointment, GetAppointmentById } from "../services/appoinmentServices";


export const createTurn = async (req: Request, res: Response) => {

    const { date, time, userId ,status } = req.body;
    const newTurn =  CreateAppointment({ date, time, userId , status });
    res.status(201).json(newTurn);
}

export const getAllTurns = async (req: Request, res: Response) => {
    const turns =  GetAllAppointments();
    res.status(200).json(turns);
}

export const cancelTurn = async (req: Request, res: Response) => {
    const { id } = req.params;
    const turn = CancelAppointment(Number(id));
    res.status(200).json(turn);
}

export const getTurnById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const turn = GetAppointmentById(Number(id));
    res.status(200).json(turn);
}