import { json } from "express";
import usuarios from "../database.js";

function login(req, res) {
    const { correo, contrasena } = req.body;

    if (!correo || !contrasena) {
        return res.status(400).json({ error: "Verifique las credenciales, alguno de los campos es incorrecto" });
    }

    const usuario = usuarios.find(u => u.correo === correo && u.contrasena === contrasena);
    if (!usuario) {
        return res.status(404).json({ error: "Datos incorrectos." });
    }

    res.status(200).json({
        status: `¡Bienvenido(a) ${usuario.correo}, inicio de sesión exitoso!`
    });
}

function createUsuarios(req, res) {
    if (!req.body.correo || !req.body.contrasena) {
        return res.status(400).json({ error: "Faltan datos obligatorios: correo o contraseña" });
    }
    const { correo, contrasena } = req.body;
    const newUsuarios = {correo, contrasena };
    usuarios.push(newUsuarios);
    res.status(201).json({
        message: "Usuario creada correctamente",
        nuevoUsuario: newUsuarios,
    });
    console.log(JSON.stringify({
        action: "post",
        route: "/usuarios"
    }));
}


export { 
    createUsuarios,
    login
}