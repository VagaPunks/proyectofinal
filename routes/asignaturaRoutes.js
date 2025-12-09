import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { roleMiddleware } from "../middlewares/roleMiddleware.js";
import {
  obtenerAsignaturas,
  crearAsignatura,
  actualizarAsignatura,
  eliminarAsignatura,
} from "../controllers/asignaturaController.js";

const router = express.Router();



router.put(
  "/:codigo",
  authMiddleware,
  roleMiddleware("admin"),
  actualizarAsignatura
);

router.delete(
  "/:codigo",
  authMiddleware,
  roleMiddleware("admin"),
  eliminarAsignatura
);

router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin", "coordinador", "profesor"),
  obtenerAsignaturas
);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  crearAsignatura
);
export default router;
