import { Router } from "express";
import AuthController from "./AuthController";
import AuthRepository from "./AuthRepository";
import AuthService from "./AuthService";

const authRepository = new AuthRepository();
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);

const authRouter = Router();

authRouter.post("/auth/create", (req, res) => authController.create(req, res));

authRouter.post("/auth/login", (req, res) => authController.login(req, res));

export default authRouter;
