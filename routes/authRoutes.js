import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { login, obtenerUsuarioAutenticado, logout } from "../controllers/authController.js";

const router = express.Router();

// LOGIN
router.post("/login", login);

// OBTENER USUARIO AUTENTICADO
router.get("/login", authMiddleware, obtenerUsuarioAutenticado);

// LOGOUT
router.post("/logout", authMiddleware, logout);

export default router;
