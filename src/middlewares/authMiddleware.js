import connection from "../databases/postgres.js";
import { signUpSchema } from "../schemas/authSchemas.js";
import { loginSchema } from "../schemas/authSchemas.js";

export async function registerMiddleware(req, res, next) {
  const user = req.body;

  const { error } = signUpSchema.validate(user);
  if (error) return res.status(422).send(error.message);

  try {
    const userExists = await connection.query(
      `SELECT * FROM users
        WHERE email = $1;`,
      [user.email]
    );
    if (userExists.rows.length > 0) {
      return res.status(409).send("Este email já foi cadastrado!");
    }
  } catch (e) {
    return res.status(500).send(e.message);
  }

  next();
}

export async function loginMiddleware(req, res, next) {
  const requisite = req.body;

  const { error } = loginSchema.validate(requisite);
  if (error) return res.status(422).send(error.message);

  try {
    const user = await connection.query(
      `SELECT * FROM users
            WHERE email=$1;`,
      [requisite.email]
    );
    if (user.rows.length === 0) {
      return res.status(401).send("Usuário Inexistente");
    }

    res.locals.user = user.rows[0];

    next();

  } catch (e) {
    return res.status(500).send(e.message);
  }
}
