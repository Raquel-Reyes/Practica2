import express from 'express';
import * as userController from './Controllers/userController.js';

const router = express.Router();

router.get("/usuarios", userController.getAll);
router.post("/usuarios", userController.createUsuarios);

export default router;