import jwt from "jsonwebtoken";
import connection from "../databases/postgres.js";
import { shortenSchema } from "../schemas/shortenSchema.js";

export function shortenMiddleware(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  let userId = null;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send("Token inválido");
    userId = decoded.id;
  });

  const url = req.body;
  const { error } = shortenSchema.validate(url);
  if (error) return res.status(422).send(error.message);

  res.locals.userId = userId;

  next();
}

export function getShortenUrlMiddleware(req, res, next) {
  const urlid = req.params.id;
  if (!parseInt(urlid) || urlid % 1 !== 0)
    return res.status(422).send("Envie um parâmetro do tipo inteiro.");
  next();
}

export async function redirectToUrlMiddleware(req, res, next) {
  const shortUrl = req.params.shortUrl;

  const { rows: url } = await connection.query(
    `
    SELECT * FROM urls WHERE "shortUrl"=$1`,
    [shortUrl]
  );

  if (url.length === 0) return res.sendStatus(404);

  next();
}

export async function deleteShortUrlMiddleware(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  let userId = null;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send("Token inválido");
    userId = decoded.id;
  });

  const urlId = req.params.id;

  const { rows: url } = await connection.query(
    `SELECT * FROM urls WHERE id=$1`,
    [urlId]
  );

  if (url.length === 0) return res.sendStatus(404);

  if (url[0].userId !== userId) return res.sendStatus(401);

  next();
}
