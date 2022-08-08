import connection from "../databases/postgres.js";
import { shortenSchema } from "../schemas/shortenSchema.js";

export function shortenMiddleware(req, res, next) {
  const url = req.body;
  const { error } = shortenSchema.validate(url);
  if (error) return res.status(422).send(error.message);

  next();
}

export function getShortenUrlMiddleware(req, res, next) {
  const urlid = req.params.id;
  if (!parseInt(urlid) || urlid % 1 !== 0)
    return res.status(422).send("Envie um parâmetro do tipo inteiro.");
  next();
}

export async function redirectToUrlMiddleware(req, res, next) {
  try {
    const shortUrl = req.params.shortUrl;

    const { rows: url } = await connection.query(
      `
    SELECT * FROM urls WHERE "shortUrl"=$1`,
      [shortUrl]
    );

    if (url.length === 0) return res.sendStatus(404);

    next();
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

export async function deleteShortUrlMiddleware(req, res, next) {
  try {
    const urlId = req.params.id;
    const userId = res.locals.userId;

    const { rows: urlToDelete } = await connection.query(
      `SELECT * FROM urls WHERE id=$1`,
      [urlId]
    );

    if (urlToDelete.length === 0) return res.sendStatus(404);

    if (urlToDelete[0].userId !== userId) return res.sendStatus(401);

    next();
  } catch (e) {
    return res.status(500).send(e.message);
  }
}
