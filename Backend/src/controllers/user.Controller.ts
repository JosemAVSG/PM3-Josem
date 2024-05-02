import { Request, Response } from "express";
import {
  createUserService,
  getUserByIdService,
  getUsersService,
  loginUserService,
} from "../services/userServices";
import { User } from "../entities/user";
import { createAccessToken } from "../utils/jwt";
export const getUser = async (req: Request, res: Response) => {
  try {
    const users: User[] | undefined = await getUsersService();
    if (users === undefined) {
      res.status(404).json({ message: "Users Not Found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);

    const user: User | null | undefined = await getUserByIdService(Number(id));
    if (user === undefined) {
      res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const {
    name,
    email,
    birthdate,
    nDni,
    credentials: { username, password },
  } = req.body;
  try {
    const newUser: User | null = await createUserService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
    });

    if (!newUser) {
      res.status(404).json({ message: "Los datos son Incorrectos" });
    }
    const tokenAccess = await createAccessToken({ id: newUser.id });
    res.cookie("token", tokenAccess, { httpOnly: true });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await loginUserService({ username, password });
    if(!user){
      throw new Error("User Not Found");
    }
    const tokenAccess = await createAccessToken({ id: user?.id });
    res.cookie("token", tokenAccess, { httpOnly: true });
    res.status(200).json(user);
  } catch {
    res.status(404).json({ message: "User Not Found" });
  }
};
export const updateUser = async () => {};
export const deleteUser = async () => {};
