import { Request, Response } from "express";
import {
  CreateAppointment,
  GetAllAppointments,
  cancelAppointment,
  GetAppointmentById,
  GetAppointmentByUserId,
} from "../services/appoinmentServices";
;

export const createTurn = async (req: Request, res: Response) => {
  const { dia, time, timeEnd, userId, description } = req.body;
  try {
    const status = true;
    const newTurn = await CreateAppointment({
      dia,
      time,
      timeEnd,
      userId,
      status,
      description,
    });

    if (!newTurn) {
      throw new Error("No se Pudo Crear el Turno");
    }
    
    res.status(201).json(newTurn);
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
};

export const getAllTurns = async (req: Request, res: Response) => {
  try {
    const turns = await GetAllAppointments();
    if (!turns) {
      throw new Error("No se encontraron turnos");
    }
    res.status(200).json(turns);
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
};

export const cancelTurn = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const turn = await cancelAppointment(Number(id));
    if (!turn) {
      throw new Error("No se pudo cancelar el turno");
    }
    res.status(200).json(turn);
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
};

export const getTurnById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const turn = await GetAppointmentById(Number(id));
    if (!turn) {
      throw new Error("No se encontro el turno");
    }
    res.status(200).json(turn);
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
};

export const getTurnByUserId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const turn = await GetAppointmentByUserId(Number(id));
    if (!turn) {
      throw new Error("No se encontro el turno");
    }
    res.status(200).json(turn);
  } catch (error) {
    res.status(404).json(error);
    console.log(error);
  }
};
