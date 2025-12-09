import mongoose from "mongoose";

const AsignaturaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },

    codigo: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },

    descripcion: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Asignaturas", AsignaturaSchema);
