import express from 'express';
import cors from "cors";
import { setupSwagger } from './utils/swagger';
import { teamRoutes } from './routes/team.route';
import { playerRoutes } from './routes/player.route';

const server = express();

server.use(cors());
server.use(express.json());

setupSwagger(server);

server.use("/team", teamRoutes);
server.use("/team", playerRoutes);

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});