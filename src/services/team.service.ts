import { TeamData } from "../models/types";
import prisma from "../prisma";
import { comparePassword, hashPassword } from "../utils/authentication";

export async function createTeam(data: TeamData) {
  return prisma.team.create({
    data: {
      name: data.name,
      email: data.email,
      password: await hashPassword(data.password)
    }
  });
}

export async function loginTeam(email: string, password: string) {
  const team = await prisma.team.findUnique({
    where: { email }
  })
  if(!team) {
    return false;
  }

  const isPasswordValid = await comparePassword(password, team.password);
  if(!isPasswordValid) {
    return false;
  }

  return team;
}
