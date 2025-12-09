import Evaluacion from "../models/Evaluacion.js";

export const obtenerEvaluaciones = async (query) => {
  const { page = 1, limit = 10, profesor, asignatura } = query;

  const filtros = {};
  if (profesor) filtros.profesor = profesor;
  if (asignatura) filtros.asignatura = asignatura;

  const evaluaciones = await Evaluacion.find(filtros)
    .populate("profesor")
    .populate("asignatura")
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Evaluacion.countDocuments(filtros);

  return { evaluaciones, total };
};

export const crearEvaluacion = async (data) => {
  const evaluacion = await Evaluacion.create(data);
  return evaluacion;
};

export const actualizarEvaluacion = async (codigo, data) => {
  const evaluacion = await Evaluacion.findByIdAndUpdate(codigo, data, {
    new: true,
  });

  return evaluacion;
};

export const eliminarEvaluacion = async (codigo) => {
  const evaluacion = await Evaluacion.findByIdAndDelete(codigo);
  return evaluacion;
};
