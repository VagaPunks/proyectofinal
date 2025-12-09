import Profesor from "../models/Profesor.js";

export const obtenerProfesores = async (query) => {
  const { page = 1, limit = 10, estatus } = query;

  const filtros = {};
  if (estatus) filtros.estatus = estatus;

  const profesores = await Profesor.find(filtros)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Profesor.countDocuments(filtros);

  return { profesores, total };
};

export const crearProfesor = async (data) => {
  const profesor = await Profesor.create(data);
  return profesor;
};

export const actualizarProfesor = async (codigo, data) => {
  const profesor = await Profesor.findByIdAndUpdate(codigo, data, {
    new: true,
  });

  return profesor;
};

export const eliminarProfesor = async (codigo) => {
  const profesor = await Profesor.findByIdAndDelete(codigo);
  return profesor;
};
