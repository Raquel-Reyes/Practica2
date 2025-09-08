import { json } from "express";
import usuarios from "../Database/database.js";
import { v4 as uuidv4 } from 'uuid';
import tokens from "../Database/databaseToken.js"


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

function contrasenaOlvidada (req, res){
    const { correo } = req.body;
    if (!correo) {
        return res.status(400).json({ error: "Faltan datos" });
    }
    const usuario = usuarios.find(u => u.correo === correo);
    if (!usuario) {
        return res.status(404).json({ error: "El correo que ingresó no existe" });
    }

    const token = uuidv4();
    console.log(token);
    tokens.push({
        token,
        correo: usuario.correo,
        creado: Date.now(),
        expiracion: Date.now() + 30 * 60 * 1000, 
        estado: "activo"
    });

    res.json({ message: `Enlace de recuperación: localhost:3001/usuarios/resetPassword?token=${token}`});
}

function cambioContrasena(req, res) {
    const { token, contrasena } = req.body;

    if (!contrasena) {
        return res.status(400).json({ error: "Faltan datos" });
    }
    const registro = tokens.find(d => d.token === token);
    if (!registro) {
        return res.status(404).json({ error: "Token inválido" });
    }
    if (registro.estado !== "activo") {
        return res.status(400).json({ error: "Token ya usado" });
    }

    if (Date.now() > registro.expiracion) {
        return res.status(400).json({ error: "Token expirado" });
    }

    const usuario = usuarios.find(u => u.correo === registro.correo);
    if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    usuario.contrasena = contrasena;
    registro.estado = "usado";

    res.json({ 
        message: "Contraseña actualizada correctamente" 
    });
}


export { 
    createUsuarios,
    login,
    contrasenaOlvidada,
    cambioContrasena
}