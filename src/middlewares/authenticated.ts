import { NextFunction, Response } from "express"
import { validateTokenJWT } from "../utils/jwt"
import { CustomRequest } from "../types/CustomRequest";

export const authenticated = async (req: CustomRequest, res: Response, next: NextFunction): Promise<any> => {
  const authHeader = req.headers.authorization;

  if(!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token de autenticação não fornecido ou inválido' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = validateTokenJWT(token) as { id: string };
    req.teamId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token de autenticação inválido ou expirado' });
  }
}