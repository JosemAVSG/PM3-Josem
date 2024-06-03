import { Request, Response } from "express";
import {
  createUserService,
  getUserByIdService,
  getUsersService,
  loginUserService,
} from "../services/userServices";
import { ValidateCredential } from "../services/credentialServices";
import { User } from "../entities/user";
import { createAccessToken } from "../utils/jwt";
import { TOKEN_SECRET } from "../config/env";
import jwt from "jsonwebtoken";
import { IPayload } from "../middlewares/validataToken";
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
    const newUser = await createUserService({
      name,
      email,
      birthdate,
      nDni,
      username,
      password,
    });

    if(newUser){
      const tokenAccess = await createAccessToken({ id: newUser.id });
      res.cookie("token", tokenAccess);
      res.status(201).json(newUser);
    }else{
      res.status(404).json({ message: "Los datos son Incorrectos" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await ValidateCredential({username, password});

    if(user){
      const tokenAccess = await createAccessToken({ id: user.id });
      res.cookie("token", tokenAccess);
      res.status(200).json({login:true, user});
    }else{
      throw new Error("User Not Found");
    }
  } catch {
    res.status(404).json({ message: "User Not Found" });
  }
};


export const verifyToken = async (req: Request, res: Response) => {
    
  const {token} = req.cookies;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    try {
      const payload =  jwt.verify(token, TOKEN_SECRET) as IPayload;

      return res.status(200).json({ message: "Authorized", payload});
    } catch {
      return res.status(401).json({ message: "Unauthorized" });
    }
  };

export const updateUser = async () => {};
export const deleteUser = async () => {};
