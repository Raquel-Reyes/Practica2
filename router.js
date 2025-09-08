import express from 'express';
import * as userController from './Controllers/userController.js';

const router = express.Router();

router.post("/usuarios", userController.createUsuarios);
router.get("/usuarios", userController.login);
export default router;