import Asignatura from "../models/asignatura.js";

export const obtenerAsignaturas = async (query) => {
  const { page = 1, limit = 10, nombre, codigo } = query;

  const filtros = {};
  if (nombre) filtros.nombre = new RegExp(nombre, "i");
  if (codigo) filtros.codigo = codigo.toUpperCase();

  const asignaturas = await Asignatura.find(filtros)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Asignatura.countDocuments(filtros);

  return { asignaturas, total };
};

export const crearAsignatura = async (data) => {
  const asignatura = await Asignatura.create(data);
  return asignatura;
};

export const actualizarAsignatura = async (codigo, data) => {
  const asignatura = await Asignatura.findByIdAndUpdate(codigo, data, {
    new: true,
  });

  return asignatura;
};

export const eliminarAsignatura = async (codigo) => {
  const asignatura = await Asignatura.findByIdAndDelete(codigo);
  return asignatura;
};
