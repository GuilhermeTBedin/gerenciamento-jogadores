import { NextFunction, Request, Response } from "express";
import prisma from "../prisma";

export const verificarIdInexistenteNoBanco = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const verificarIdBanco = await prisma.player.findUnique({
    where: {
      id: id,
    }
  });
  if (!verificarIdBanco) {
    res.status(404).json({ error: "ID de Jogador não encontrado" });
    return;
  }
  next();
}