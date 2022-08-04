import jwt from "jsonwebtoken";
import { shortenSchema } from "../schemas/shortenSchema.js";

export function shortenMiddleware(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  let userId = null;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(201).send("Token inválido");
    userId = decoded.id;
  });

  const url = req.body;
  const { error } = shortenSchema.validate(url);
  if (error) return res.status(422).send(error.message);

  res.locals.userId = userId;

  next();
}
