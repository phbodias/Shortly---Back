import jwt from "jsonwebtoken";

export async function tokenMiddleware(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send("Token inválido!");
    res.locals.userId = decoded.id;
  });

  next();
}
