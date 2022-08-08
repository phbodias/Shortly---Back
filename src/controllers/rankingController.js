import connection from "../databases/postgres.js";

export async function getRanking(req, res) {
  try {
    const { rows: response } = await connection.query(`
    SELECT users.id, users.name, COUNT(urls."userId") AS "linksCount", SUM(urls."visitCount") AS "visitsCount"
    FROM users
    JOIN urls
    ON users.id=urls."userId"
    GROUP BY users.id
    ORDER BY "visitsCount" desc
    LIMIT 10
    `);

    res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}
