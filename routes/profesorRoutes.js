import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
import {
  obtenerProfesores,
  crearProfesor,
  actualizarProfesor,
  eliminarProfesor,
} from "../controllers/profesorController.js";

const router = express.Router();

router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin", "coordinador", "profesor"),
  obtenerProfesores
);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  crearProfesor
);

router.put(
  "/:codigo",
  authMiddleware,
  roleMiddleware("admin"),
  actualizarProfesor
);

router.delete(
  "/:codigo",
  authMiddleware,
  roleMiddleware("admin"),
  eliminarProfesor
);

export default router;
