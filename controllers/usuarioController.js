import {
  obtenerUsuarios as serviceObtener,
  crearUsuario as serviceCrear,
  actualizarUsuario as serviceActualizar,
  eliminarUsuario as serviceEliminar,
} from "../services/usuarioService.js";

export const obtenerUsuarios = async (req, res) => {
  try {
    const data = await serviceObtener(req.query);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener usuarios" });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const usuario = await serviceCrear(req.body);
    return res.status(201).json(usuario);
  } catch (error) {
    return res.status(400).json({
      message: "Error al crear usuario",
      error: error.message,
    });
  }
};

export const actualizarUsuario = async (req, res) => {
  try {
    const usuario = await serviceActualizar(req.params.codigo, req.body);
    if (!usuario) return res.status(404).json({ message: "No encontrado" });

    return res.json(usuario);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar usuario" });
  }
};

export const eliminarUsuario = async (req, res) => {
  try {
    const usuario = await serviceEliminar(req.params.codigo);
    if (!usuario) return res.status(404).json({ message: "No encontrado" });

    return res.json({ message: "Usuario eliminado" });
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar usuario" });
  }
};
