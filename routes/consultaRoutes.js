import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
import {
  obtenerConsultas,
  crearConsulta,
  actualizarConsulta,
  eliminarConsulta,
} from "../controllers/consultaController.js";

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin", "coordinador", "profesor"),
  obtenerConsultas
);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin", "coordinador"),
  crearConsulta
);

router.put(
  "/:codigo",
  authMiddleware,
  roleMiddleware("admin", "coordinador"),
  actualizarConsulta
);

router.delete(
  "/:codigo",
  authMiddleware,
  roleMiddleware("admin", "coordinador"),
  eliminarConsulta
);

export default router;
