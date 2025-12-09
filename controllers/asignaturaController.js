import {
  obtenerAsignaturas as serviceObtener,
  crearAsignatura as serviceCrear,
  actualizarAsignatura as serviceActualizar,
  eliminarAsignatura as serviceEliminar,
} from "../services/asignaturaService.js";

export const obtenerAsignaturas = async (req, res) => {
  try {
    const data = await serviceObtener(req.query);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener asignaturas" });
  }
};

export const crearAsignatura = async (req, res) => {
  try {
    const asignatura = await serviceCrear(req.body);
    return res.status(201).json(asignatura);
  } catch (error) {
    return res.status(400).json({
      message: "Error al crear asignatura",
      error: error.message,
    });
  }
};

export const actualizarAsignatura = async (req, res) => {
  try {
    const asignatura = await serviceActualizar(req.params.codigo, req.body);
    if (!asignatura)
      return res.status(404).json({ message: "No encontrado" });

    return res.json(asignatura);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar asignatura" });
  }
};

export const eliminarAsignatura = async (req, res) => {
  try {
    const asignatura = await serviceEliminar(req.params.codigo);
    if (!asignatura)
      return res.status(404).json({ message: "No encontrado" });

    return res.json({ message: "Asignatura eliminada" });
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar asignatura" });
  }
};
