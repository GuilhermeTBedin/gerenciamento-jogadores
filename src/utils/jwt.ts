import jwt from "jsonwebtoken";

export const createTokenJWT = (payload: any) => {
  return jwt.sign(payload, process.env.JWT_KEY as string);
};

export const validateTokenJWT = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_KEY as string);
  } catch (error) {
    throw new Error("Token inválido ou expirado");
  }
};