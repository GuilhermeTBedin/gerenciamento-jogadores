export interface TeamData {
  name: string;
  email: string;
  password: string;
}

export interface PlayerData {
  name: string;
  born: Date;
  height: number;
  weight: number;
  nationality: string;
  position: string;
  shirtNumber: number;
  marketValue: number;
  teamId: string;
}

export interface UpdatePlayerData {
  name?: string;
  height?: number;
  weight?: number;
  nationality?: string;
  position?: string;
  shirtNumber?: number;
}