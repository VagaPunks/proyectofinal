import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
    },

    correo: {
      type: String,
      required: [true, "El correo es obligatorio"],
      unique: true,
      lowercase: true,
    },

    telefono: {
      type: String,
      default: "",
    },

    contrasena: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
    },

    rol: {
      type: String,
      required: true,
      enum: ["admin", "coordinador", "profesor"],
    },

    estatus: {
      type: String,
      enum: ["activo", "inactivo"],
      default: "activo",
    },
  },
  { timestamps: true }
);

export default mongoose.model("usuarios", usuarioSchema);
