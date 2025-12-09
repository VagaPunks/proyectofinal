import Consulta from "../models/Consulta.js";

export const obtenerConsultas = async (query) => {
  const { page = 1, limit = 10, profesor, asignatura, estatus } = query;

  const filtros = {};
  if (profesor) filtros.idProfesor = profesor;
  if (asignatura) filtros.idAsignatura = asignatura;
  if (estatus) filtros.estatus = estatus;

  const consultas = await Consulta.find(filtros)
    .populate("idProfesor")
    .populate("idAsignatura")
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Consulta.countDocuments(filtros);

  return { consultas, total };
};

export const crearConsulta = async (data) => {
  const consulta = await Consulta.create(data);
  return consulta;
};

export const actualizarConsulta = async (codigo, data) => {
  const consulta = await Consulta.findByIdAndUpdate(codigo, data, {
    new: true,
  });

  return consulta;
};

export const eliminarConsulta = async (codigo) => {
  const consulta = await Consulta.findByIdAndDelete(codigo);
  return consulta;
};
