import { NextFunction, Request, Response } from "express"

export const logMiddleware = ({ headers }: Request, res: Response, next: NextFunction) => {
    const userAgent = headers["user-agent"];
    console.log(userAgent);
    // el middleware permite que continue la paticion 
    next();
    // o si no se desea permitir que continue el middleware puede responder
    // res.status(401).send('La haz defecado');
}