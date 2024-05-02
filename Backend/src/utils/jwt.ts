import jwt, { JwtPayload } from "jsonwebtoken";

import { TOKEN_SECRET } from "../config/env";

export const createAccessToken=(payload:JwtPayload)=>{
    return new Promise( (resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d",
            },
            (err, token) => {
                if (err) reject(err);
                resolve(token);
            }
        );
    });
}