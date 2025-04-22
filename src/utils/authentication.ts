import bcrypt from "bcrypt";

export async function hashPassword(password: string): Promise<string> {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

export async function comparePassword(password: string, passwordHash: string): Promise<boolean> {
  const result = await bcrypt.compare(password, passwordHash);
  return result;
}