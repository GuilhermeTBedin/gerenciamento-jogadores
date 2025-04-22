import { Router } from "express";
import * as playerController from "../controllers/player.controller"
import { validatePlayerData, validatePlayerUpdateData } from "../middlewares/playerValidation";
import { authenticated } from "../middlewares/authenticated";
import { verificarIdInexistenteNoBanco } from "../middlewares/verificarIdInexistente";

export const playerRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Jogadores
 *   description: Gerenciamento de jogadores
 */

/**
 * @swagger
 * /team/players:
 *   get:
 *     summary: Lista todos os jogadores
 *     tags: [Jogadores]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de jogadores retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   born:
 *                     type: string
 *                     format: date
 *                   height:
 *                     type: number
 *                   weight:
 *                     type: number
 *                   nationality:
 *                     type: string
 *                   position:
 *                     type: string
 *                   shirtNumber:
 *                     type: number
 *                   marketValue:
 *                     type: number
 *                   teamId:
 *                     type: string
 *       401:
 *         description: Token de autenticação inválido ou ausente
 */
playerRoutes.get("/players", authenticated, playerController.getPlayersController);

/**
 * @swagger
 * /team/player:
 *   post:
 *     summary: Cria um novo jogador
 *     tags: [Jogadores]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               born:
 *                 type: string
 *                 format: date
 *               height:
 *                 type: number
 *               weight:
 *                 type: number
 *               nationality:
 *                 type: string
 *               position:
 *                 type: string
 *               shirtNumber:
 *                 type: number
 *               marketValue:
 *                 type: number
 *               teamId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Jogador criado com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token de autenticação inválido ou ausente
 */
playerRoutes.post("/player", authenticated, validatePlayerData, playerController.createPlayerController);

/**
 * @swagger
 * /team/player/{id}:
 *   put:
 *     summary: Atualiza um jogador existente
 *     tags: [Jogadores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do jogador
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               height:
 *                 type: number
 *               weight:
 *                 type: number
 *               nationality:
 *                 type: string
 *               position:
 *                 type: string
 *               shirtNumber:
 *                 type: number
 *     responses:
 *       200:
 *         description: Jogador atualizado com sucesso
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Token de autenticação inválido ou ausente
 *       404:
 *         description: ID de Jogador não encontrado 
 */
playerRoutes.put("/player/:id", authenticated, verificarIdInexistenteNoBanco,validatePlayerUpdateData, playerController.updatePlayerController);

/**
 * @swagger
 * /team/player/{id}:
 *   delete:
 *     summary: Remove um jogador
 *     tags: [Jogadores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do jogador
 *     responses:
 *       200:
 *         description: Jogador removido com sucesso
 *       401:
 *         description: Token de autenticação inválido ou ausente
 *       404:
 *         description: ID de Jogador não encontrado
 */
playerRoutes.delete("/player/:id", authenticated, verificarIdInexistenteNoBanco,playerController.deletePlayerController);
