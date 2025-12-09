import mongoose from "mongoose";

const profesorSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
    },

    correo: {
      type: String,
      required: [true, "El correo es obligatorio"],
      lowercase: true,
    },

    telefono: {
      type: String,
      default: "",
    },

    estatus: {
      type: String,
      enum: ["activo", "inactivo"],
      default: "activo",
    },
  },
  { timestamps: true }
);

export default mongoose.model("profesores", profesorSchema);
