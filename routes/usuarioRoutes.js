import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
import {
  obtenerUsuarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
} from "../controllers/usuarioController.js";

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin", "coordinador"),
  obtenerUsuarios
);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  crearUsuario
);

router.put(
  "/:codigo",
  authMiddleware,
  roleMiddleware("admin"),
  actualizarUsuario
);

router.delete(
  "/:codigo",
  authMiddleware,
  roleMiddleware("admin"),
  eliminarUsuario
);

export default router;
