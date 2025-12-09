import Usuario from "../models/Usuario.js";
import bcrypt from "bcryptjs";

export const obtenerUsuarios = async (query) => {
  const { page = 1, limit = 10, rol, estatus } = query;

  const filtros = {};
  if (rol) filtros.rol = rol;
  if (estatus) filtros.estatus = estatus;

  const usuarios = await Usuario.find(filtros)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Usuario.countDocuments(filtros);

  return { usuarios, total };
};

export const crearUsuario = async (data) => {
  const { contrasena } = data;

  const hash = await bcrypt.hash(contrasena, 10);

  const usuario = await Usuario.create({
    ...data,
    contrasena: hash,
  });

  return usuario;
};

export const actualizarUsuario = async (codigo, data) => {
  if (data.contrasena) {
    data.contrasena = await bcrypt.hash(data.contrasena, 10);
  }

  const usuario = await Usuario.findByIdAndUpdate(codigo, data, {
    new: true,
  });

  return usuario;
};

export const eliminarUsuario = async (codigo) => {
  const usuario = await Usuario.findByIdAndDelete(codigo);
  return usuario;
};
