import connection from "../databases/postgres.js";

export async function getUserController(req, res) {
  try {
    const userId = res.locals.userId;

    const { rows: userResponse } = await connection.query(
      `SELECT users.id, users.name, SUM(urls."visitCount") AS "visitCount"
        FROM users
        JOIN urls
        ON urls."userId" = users.id
        WHERE users.id = $1
        GROUP BY users.id;`,
      [userId]
    );

    const { rows: urlsResponse } = await connection.query(
      `SELECT id, "shortUrl", url, "visitCount"
        FROM urls
        WHERE "userId" = $1`,
      [userId]
    );

    if (urlsResponse.length === 0) urlsResponse = [];

    const response = {
      id: userId,
      name: userResponse[0].name,
      visitCount: userResponse[0].visitCount,
      shortenedUrls: urlsResponse,
    };

    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}