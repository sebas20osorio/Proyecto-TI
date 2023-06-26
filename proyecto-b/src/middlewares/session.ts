import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    try{
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(" ").pop();
        const isUser = verifyToken(`${jwt}`);
        if (!isUser) res.status(400).send('NOT_VALID_SESSION');
        next(); 
    }catch(e){
        console.log({ e });
        res.status(400).send('NOT_VALID_SESSION');
    }
}