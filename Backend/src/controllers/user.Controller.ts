import { Request, Response } from "express";
import { createUserService, getUsers  } from "../services/userServices";
const getUser = async ( req: Request, res: Response ) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }     
};

 export const createUser = async (req: Request, res: Response) => {
      const { name, email, password } = req.body;

      const newUser = await createUserService({ name, email, password });
      res.status(201).json(newUser);
};

const updateUser = async () => {};
const deleteUser = async () => {};
