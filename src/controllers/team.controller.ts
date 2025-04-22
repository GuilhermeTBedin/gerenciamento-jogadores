import { Request, Response } from "express";
import { TeamData } from "../models/types";
import { createTeam, loginTeam } from "../services/team.service";
import { createTokenJWT } from "../utils/jwt";

export async function createTeamController(req: Request, res: Response) {
  try {
    const teamData: TeamData = req.body;
    const team = await createTeam(teamData);
    res.status(201).json({
      id: team.id,
      name: team.name,
      email: team.email
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar o time" });
  }
}

export async function loginTeamController(req: Request, res: Response): Promise<any> {
  try {
    const teamData = req.body;
    const teamCredentials = await loginTeam(teamData.email, teamData.password);
    if (!teamCredentials) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }
    const token = createTokenJWT(teamCredentials);
    res.status(200).json({
      teamCredentials: {
        id: teamCredentials.id,
        name: teamCredentials.name,
        email: teamCredentials.email
      },
      token
    })
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer login" });
  }
}