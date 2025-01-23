import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const header = req.headers["authorization"];

    if (!header) {
      return res.status(401).json({ message: "Unauthorized && Token Not Privided." })
    }

    const token = header.replace("Bearer ", "");

    const decode = jwt.verify(token, process.env.JWT_SECRET || 'secret key');

    if (!decode) {
      return res.status(401).json({ message: "Token Invalid." });
    }
    req.user = (decode as {user: any}).user;
    next();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(401).json({ message: error.message });
    }
    return res.status(401).json({ message: "Unauthorized." });
  }
};

