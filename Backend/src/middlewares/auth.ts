import { Request, Response, NextFunction } from "express";

const auth = (req: Request, res: Response, next: NextFunction) => {
        const {token} = req.headers;
        if(!token){
            res.status(401).json({message: 'Unauthorized'});
        }
        if(token === 'authorized'){
            next();
        }
        else{
            res.status(401).json({message: 'Unauthorized'});
        }
};
export default auth