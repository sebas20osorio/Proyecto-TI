import { sign, verify } from "jsonwebtoken"
const JWT_SECRET = process.env.JWT_SECRET || 'token.01010101'; 

export const generateToken = async (email: string) => {
    const jwt = sign({email}, JWT_SECRET, {
        expiresIn: "2h"
    });
    return jwt;
}

export const verifyToken = async (jwt: string) => {
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
}