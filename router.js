import express from 'express';
import * as userController from './Controllers/userController.js';

const router = express.Router();

router.post("/usuarios", userController.createUsuarios);
router.get("/usuarios", userController.login);
router.get("/usuarios/:correo", userController.contrasenaOlvidada);
router.post("/usuarios/resetPassword", userController.cambioContrasena);


export default router;