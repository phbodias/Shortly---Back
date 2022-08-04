import { nanoid } from "nanoid";
import connection from "../databases/postgres.js";
import jwt from "jsonwebtoken";

export async function shortenController(req, res) {
  try {
    const url = req.body.url;
    const shortUrl = nanoid();
    const userId = res.locals.userId;

    await connection.query(
      `INSERT INTO urls ("shortUrl", url, "userId")
    VALUES ($1, $2, $3)`,
      [shortUrl, url, userId]
    );

    res.status(201).send({ shortUrl });
  } catch (e) {
    return res.sendStatus(500);
  }
}

export async function getShortenUrlController(req, res) {
  try {
    const urlId = req.params.id;

    const { rows: url_ } = await connection.query(
      `SELECT * FROM urls WHERE id=$1;`,
      [urlId]
    );

    if (url_.length === 0) return res.sendStatus(404);

    const { id, url, shortUrl } = url_[0];

    return res.status(200).send({ id, shortUrl, url });
  } catch (e) {
    return res.sendStatus(500);
  }
}

export async function redirectToUrlController(req, res) {
  try {
    const shortUrl = req.params.shortUrl;

    await connection.query(
      `
        UPDATE urls
        SET views = views+1
        WHERE "shortUrl" = $1
      `,
      [shortUrl]
    );

    return res.redirect(200, shortUrl);
  } catch (e) {
    return res.sendStatus(500);
  }
}

export async function deleteShortUrlController(req, res) {
  const urlId = req.params.id;

  await connection.query(
    `DELETE FROM urls WHERE id=$1`, [urlId]
  )

  return res.sendStatus(204);
}
