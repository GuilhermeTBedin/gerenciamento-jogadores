import { Request, Response } from "express";
import { PlayerData } from "../models/types";
import { createPlayer, deletePlayer, getPlayers, updatePlayer } from "../services/player.service";
import { validationResult } from "express-validator";
import { CustomRequest } from "../types/CustomRequest";

export async function getPlayersController(req: CustomRequest, res: Response): Promise<any> {
  const teamId = req.teamId;
  if(!teamId) {
    return res.status(400).json({ error: "Time não encontrado" });
  }

  try {
    const players = await getPlayers(teamId);
    res.status(200).json(players);
  } catch {
    res.status(500).json({ error: "Erro ao buscar os jogadores" });
  }
}

export async function createPlayerController(req: CustomRequest, res: Response): Promise<any> {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const teamId = req.teamId;
    const playerData: PlayerData = {...req.body, teamId};
    const player = await createPlayer(playerData);
    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o jogador" });
  }
}

export async function updatePlayerController(req: Request, res: Response): Promise<any> {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const id = req.params.id;
    const playerData = req.body;
    if(!id || !playerData) {
      return res.status(400).json({ error: "Dados inválidos" });
    }
    const player = await updatePlayer(id, playerData);
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o jogador" });
  }
}

export async function deletePlayerController(req: Request, res: Response): Promise<any> {
  try {
    const id = req.params.id;
    if(!id) {
      return res.status(400).json({ error: "ID inválido ou inexistente" });
    }
    const player = await deletePlayer(id);
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar o jogador" });
  }
}