import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (payload: object, expiresIn = '1d'): string => {
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn });
    return token;
};
