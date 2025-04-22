import { body } from "express-validator";

export const validatePlayerData = [
  body("name").notEmpty().withMessage("O nome é obrigatório"),
  body("born").isDate().withMessage("A data de nascimento deve ser válida"),
  body("height").isInt({ min: 1 }).withMessage("A altura deve ser um número inteiro positivo"),
  body("weight").isInt({ min: 1 }).withMessage("O peso deve ser um número inteiro positivo"),
  body("nationality").notEmpty().withMessage("A nacionalidade é obrigatória"),
  body("position").notEmpty().withMessage("A posição é obrigatória"),
  body("shirtNumber").isInt({ min: 1 }).withMessage("O número da camisa deve ser um número inteiro positivo"),
  body("marketValue").isInt({ min: 0 }).withMessage("O valor do mercado deve ser um número inteiro não negativo"),
];

export const validatePlayerUpdateData = [
  body("name").optional().notEmpty().withMessage("O nome não pode estar vazio."),
  body("height").optional().isInt({ min: 1 }).withMessage("A altura deve ser um número inteiro positivo."),
  body("weight").optional().isInt({ min: 1 }).withMessage("O peso deve ser um número inteiro positivo."),
  body("nationality").optional().notEmpty().withMessage("A nacionalidade não pode estar vazia."),
  body("position").optional().notEmpty().withMessage("A posição não pode estar vazia."),
  body("shirtNumber").optional().isInt({ min: 1 }).withMessage("O número da camisa deve ser um número inteiro positivo."),
];
