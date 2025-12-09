import {
  obtenerConsultas as serviceObtener,
  crearConsulta as serviceCrear,
  actualizarConsulta as serviceActualizar,
  eliminarConsulta as serviceEliminar,
} from "../services/consultaService.js";

export const obtenerConsultas = async (req, res) => {
  try {
    const data = await serviceObtener(req.query);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener consultas" });
  }
};

export const crearConsulta = async (req, res) => {
  try {
    const consulta = await serviceCrear(req.body);
    return res.status(201).json(consulta);
  } catch (error) {
    return res.status(400).json({
      message: "Error al crear consulta",
      error: error.message,
    });
  }
};

export const actualizarConsulta = async (req, res) => {
  try {
    const consulta = await serviceActualizar(req.params.codigo, req.body);
    if (!consulta)
      return res.status(404).json({ message: "No encontrado" });

    return res.json(consulta);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar consulta" });
  }
};

export const eliminarConsulta = async (req, res) => {
  try {
    const consulta = await serviceEliminar(req.params.codigo);
    if (!consulta)
      return res.status(404).json({ message: "No encontrado" });

    return res.json({ message: "Consulta eliminada" });
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar consulta" });
  }
};
