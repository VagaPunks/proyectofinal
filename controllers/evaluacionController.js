import {
  obtenerEvaluaciones as serviceObtener,
  crearEvaluacion as serviceCrear,
  actualizarEvaluacion as serviceActualizar,
  eliminarEvaluacion as serviceEliminar,
} from "../services/evaluacionService.js";

export const obtenerEvaluaciones = async (req, res) => {
  try {
    const data = await serviceObtener(req.query);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener evaluaciones",
    });
  }
};

export const crearEvaluacion = async (req, res) => {
  try {
    const evaluacion = await serviceCrear(req.body);
    return res.status(201).json(evaluacion);
  } catch (error) {
    return res.status(400).json({
      message: "Error al crear evaluación",
      error: error.message,
    });
  }
};

export const actualizarEvaluacion = async (req, res) => {
  try {
    const evaluacion = await serviceActualizar(req.params.codigo, req.body);

    if (!evaluacion)
      return res.status(404).json({ message: "No encontrado" });

    return res.json(evaluacion);
  } catch (error) {
    return res.status(500).json({
      message: "Error al actualizar evaluación",
    });
  }
};

export const eliminarEvaluacion = async (req, res) => {
  try {
    const evaluacion = await serviceEliminar(req.params.codigo);
    if (!evaluacion)
      return res.status(404).json({ message: "No encontrado" });

    return res.json({ message: "Evaluación eliminada" });
  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar evaluación",
    });
  }
};
