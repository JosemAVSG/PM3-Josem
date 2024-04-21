import { Request, Response } from "express";
import { createUserService, getUserByIdService, getUsersService  } from "../services/userServices";
export const getUser = async ( req: Request, res: Response ) => {
  try {
    const users  = await getUsersService();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }     
};

export const getUserById = async ( req : Request, res: Response) => {

  try {
    const { id } = req.params;
    const user = await getUserByIdService(Number(id));
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

 export const createUser = async (req: Request, res: Response) => {
      const { name, email, password } = req.body;

      const newUser = await createUserService({ name, email, password });
      res.status(201).json(newUser);
};

export const updateUser = async () => {};
export const deleteUser = async () => {};
