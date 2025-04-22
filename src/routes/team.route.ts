import { Router } from "express";
import * as teamController from "../controllers/team.controller";

export const teamRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Times
 *   description: Gerenciamento de times
 */

/**
 * @swagger
 * /team/signup:
 *   post:
 *     summary: Registra um novo time
 *     tags: [Times]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do time
 *               email:
 *                 type: string
 *                 description: E-mail do time
 *               password:
 *                 type: string
 *                 description: Senha do time
 *     responses:
 *       201:
 *         description: Time registrado com sucesso
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro ao criar o time
 */
teamRoutes.post('/signup', teamController.createTeamController);

/**
 * @swagger
 * /team/login:
 *   post:
 *     summary: Realiza login de um time
 *     tags: [Times]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: E-mail do time
 *               password:
 *                 type: string
 *                 description: Senha do time
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT para autenticação
 *       401:
 *         description: Credenciais inválidas
 */
teamRoutes.post('/login', teamController.loginTeamController);