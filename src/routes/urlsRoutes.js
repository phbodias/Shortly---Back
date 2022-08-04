import { Router } from "express";
import { shortenController } from "../controllers/urlsControllers.js";
import { shortenMiddleware } from "../middlewares/shortenMiddlewares.js";

const router = Router();

router.post('/urls/shorten', shortenMiddleware, shortenController);

export default router;

