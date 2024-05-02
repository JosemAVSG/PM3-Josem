import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import { TOKEN_SECRET } from "../config/env";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const authVerifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies;

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, TOKEN_SECRET as Secret);
    (req as CustomRequest).token = decoded;

    next();
  } catch (err) {
    res.status(401).send("Please authenticate");
  }
};
