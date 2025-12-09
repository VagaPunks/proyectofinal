import mongoose from "mongoose";

const consultaSchema = new mongoose.Schema(
  {
    idProfesor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profesor",
      required: true,
    },

    idAsignatura: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asignatura",
      required: true,
    },

    estatus: {
      type: String,
      required: true,
    },

    fecha: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("consultas", consultaSchema);
