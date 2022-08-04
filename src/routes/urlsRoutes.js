import { Router } from "express";
import { deleteShortUrlController, getShortenUrlController, redirectToUrlController, shortenController } from "../controllers/urlsControllers.js";
import { deleteShortUrlMiddleware, getShortenUrlMiddleware, redirectToUrlMiddleware, shortenMiddleware } from "../middlewares/shortenMiddleware.js";

const router = Router();

router.post('/urls/shorten', shortenMiddleware, shortenController);
router.get('/urls/:id', getShortenUrlMiddleware, getShortenUrlController);
router.get('/urls/open/:shortUrl', redirectToUrlMiddleware,redirectToUrlController);
router.delete('/urls/:id', deleteShortUrlMiddleware, deleteShortUrlController);

export default router;

