import { Request, Response } from "express";
import { createUserService } from "../services/userServices";
const getUser = async () => {};

 export const createUser = async (req: Request, res: Response) => {
      const { name, email, password } = req.body;

      const newUser = await createUserService({ name, email, password });
      res.status(201).json(newUser);



};

const updateUser = async () => {};
const deleteUser = async () => {};
