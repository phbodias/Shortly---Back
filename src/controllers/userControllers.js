import connection from "../databases/postgres.js";

export async function getUserController(req, res) {
  try {
    const userId = res.locals.userId;
    let response = {};

    const { rows: userResponse } = await connection.query(
      `SELECT users.id, users.name, SUM(urls."visitCount") AS "visitCount"
        FROM users
        JOIN urls
        ON urls."userId" = users.id
        WHERE users.id = $1
        GROUP BY users.id;`,
      [userId]
    );

    if (userResponse.length === 0) {
      const user = await connection.query(
        `SELECT users.id AS id, users.name AS name
        FROM users
        WHERE id=$1`,
        [userId]
      );

      return res.status(200).send(user);
    }

    const { rows: urlsResponse } = await connection.query(
      `SELECT id, "shortUrl", url, "visitCount"
        FROM urls
        WHERE "userId" = $1`,
      [userId]
    );
    
    response = {
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
