import { Request, Response } from "express";
import { createUserService } from "../services/userServices";
const getUser = async () => {};

 export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, password, email, estado } = req.body;
    const data = await createUserService({ name, password, email, estado });
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async () => {};
const deleteUser = async () => {};
