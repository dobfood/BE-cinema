import jwt from "jsonwebtoken";
import createError from "./error.js";
export const verifyToken = (req, res, next) => {
  const token = req.cookie.access_token;
  if (!token) return next(createError(401, "Ban khong xac thuc"));
  jwt.verify(token, process.env.NUMBER_SECRET_TOKEN, (err, user) => {
    if (err) return next(createError(403, "khong xac thuc duoc ma"));
    req.user = user;
    next();
  });
};
