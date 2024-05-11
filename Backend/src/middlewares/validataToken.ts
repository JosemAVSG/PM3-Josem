import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import { TOKEN_SECRET } from "../config/env";

export interface IPayload {
  _id: string;
  iat: number;
  exp: number;
}

export const authVerifyToken = async (req: Request,  res: Response,  next: NextFunction) => {
  try {
    // const token = req.headers["token"] as string;
    const { token } = req.cookies;
    if (!token) {
      throw new Error();
    }
    const decoded = jwt.verify(token, TOKEN_SECRET) as IPayload;
    req.userId = decoded._id;

    next();
  } catch (err) {
    res.status(401).send("Please authenticate");
  }
};
