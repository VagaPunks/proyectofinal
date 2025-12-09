import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Rutas
import authRoutes from "./routes/authRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import profesorRoutes from "./routes/profesorRoutes.js";
import asignaturaRoutes from "./routes/asignaturaRoutes.js";
import consultaRoutes from "./routes/consultaRoutes.js";
import evaluacionRoutes from "./routes/evaluacionRoutes.js";

// Iniciar variables de entorno
dotenv.config();

const app = express();

// Conexión DB
connectDB();

// Middlewares globales
app.use(express.json());
app.use(cookieParser());

// Configurar cors con credenciales para Cookies HttpOnly
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/profesores", profesorRoutes);
app.use("/api/asignaturas", asignaturaRoutes);
app.use("/api/consultas", consultaRoutes);
app.use("/api/evaluaciones", evaluacionRoutes);

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
