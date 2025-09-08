import { json } from "express";
import usuarios from "../database.js";

function getAll(req, res) {
    res.json(usuarios);
    console.log(JSON.stringify({
        action: "get",
        route: "/usuarios"
    }));
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


export { getAll, createUsuarios };