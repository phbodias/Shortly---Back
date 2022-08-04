import { nanoid } from "nanoid";
import connection from "../databases/postgres.js";

export async function shortenController(req, res) {
  try {
    const url = req.body.url;
    const shortUrl = nanoid();
    const userId = res.locals.userId;

    await connection.query(
      `INSERT INTO urls (url, "shortUrl", "userId")
    VALUES ($1, $2, $3)`,
      [shortUrl, url, userId]
    );

    res.status(201).send({ shortUrl });
  } catch (e) {
    return res.sendStatus(500);
  }
}
