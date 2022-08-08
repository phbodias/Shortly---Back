import { Router } from "express";
import { getRanking } from "../controllers/rankingController.js";
import { deleteShortUrlController, getShortenUrlController, redirectToUrlController, shortenController } from "../controllers/urlsControllers.js";
import { getUserController } from "../controllers/userControllers.js";
import { tokenMiddleware } from "../middlewares/tokenMiddleware.js";
import { deleteShortUrlMiddleware, getShortenUrlMiddleware, redirectToUrlMiddleware, shortenMiddleware } from "../middlewares/urlsMiddleware.js";

const router = Router();

router.post('/urls/shorten', tokenMiddleware, shortenMiddleware, shortenController);
router.get('/urls/:id', getShortenUrlMiddleware, getShortenUrlController);
router.get('/urls/open/:shortUrl', redirectToUrlMiddleware, redirectToUrlController);
router.delete('/urls/:id', tokenMiddleware, deleteShortUrlMiddleware, deleteShortUrlController);
router.get('/users/me', tokenMiddleware, getUserController);
router.get('/ranking', getRanking);

export default router;

