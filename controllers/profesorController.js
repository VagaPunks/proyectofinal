import {
  obtenerProfesores as serviceObtener,
  crearProfesor as serviceCrear,
  actualizarProfesor as serviceActualizar,
  eliminarProfesor as serviceEliminar,
} from "../services/profesorService.js";

export const obtenerProfesores = async (req, res) => {
  try {
    const data = await serviceObtener(req.query);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener profesores" });
  }
};

export const crearProfesor = async (req, res) => {
  try {
    const profesor = await serviceCrear(req.body);
    return res.status(201).json(profesor);
  } catch (error) {
    return res.status(400).json({
      message: "Error al crear profesor",
      error: error.message,
    });
  }
};

export const actualizarProfesor = async (req, res) => {
  try {
    const profesor = await serviceActualizar(req.params.codigo, req.body);
    if (!profesor) return res.status(404).json({ message: "No encontrado" });

    return res.json(profesor);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar profesor" });
  }
};

export const eliminarProfesor = async (req, res) => {
  try {
    const profesor = await serviceEliminar(req.params.codigo);
    if (!profesor) return res.status(404).json({ message: "No encontrado" });

    return res.json({ message: "Profesor eliminado" });
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar profesor" });
  }
};
