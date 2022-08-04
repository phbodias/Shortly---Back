import { Router } from "express";
import { loginController, registerController } from "../controllers/authControllers.js";
import { loginMiddleware, registerMiddleware } from "../middlewares/authMiddleware.js";


const router = Router();

router.post('/signup', registerMiddleware, registerController);
router.post('/signin', loginMiddleware, loginController);

export default router;