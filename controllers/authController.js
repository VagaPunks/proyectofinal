import Usuario from "../models/Usuario.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { correo, contrasena } = req.body;

    const usuario = await Usuario.findOne({ correo });
    if (!usuario)
      return res.status(401).json({ message: "Credenciales inválidas" });

    const passwordValida = await bcrypt.compare(
      contrasena,
      usuario.contrasena
    );

    if (!passwordValida)
      return res.status(401).json({ message: "Credenciales inválidas" });

    const token = jwt.sign(
      {
        id: usuario._id,
        nombre: usuario.nombre,
        rol: usuario.rol,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    // Enviar token en cookie HTTPOnly
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // cambiar a true en producción con HTTPS
      sameSite: "strict",
    });

    return res.json({
      message: "Login exitoso",
      usuario: {
        nombre: usuario.nombre,
        rol: usuario.rol,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

export const obtenerUsuarioAutenticado = async (req, res) => {
  return res.status(200).json({
    usuario: req.user,
  });
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  return res.json({ message: "Sesión cerrada" });
};
