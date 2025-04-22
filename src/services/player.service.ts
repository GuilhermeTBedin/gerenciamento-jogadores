import { PlayerData, UpdatePlayerData } from "../models/types";
import prisma from "../prisma";

export async function getPlayers(teamId: string) {
  return prisma.player.findMany({
    where: { teamId },
    orderBy: {
      name: 'asc'
    }
  })
}

export async function createPlayer(data: PlayerData) {
  return prisma.player.create({
    data: {
      ...data,
      born: new Date(data.born),
    }
  });
}

export async function updatePlayer(id: string, data: UpdatePlayerData) {
  return await prisma.player.update({
    where: { id },
    data: {
      ...data,
    }
  });
}

export async function deletePlayer(id: string) {
  return await prisma.player.delete({
    where: { id }
  });
}