import jwt from "jsonwebtoken";

export async function authentication(req, res, next) {
  try {
    const header = req.header.authorization || '';
    const token = header.split(" ")[1];

    if (!token) {
      return res.status(400).json({ message: "Token Not Provided." });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).json({ message: "Unaothorized." });
    }

    req.user = decode.userId;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong while authentication." });
  }
}
