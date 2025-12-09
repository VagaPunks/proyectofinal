import mongoose from "mongoose";

const evaluacionSchema = new mongoose.Schema(
  {
    profesor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profesor",
      required: true,
    },

    asignatura: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asignatura",
      required: true,
    },

    calificacion: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
    },

    observaciones: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("evaluaciones", evaluacionSchema);
