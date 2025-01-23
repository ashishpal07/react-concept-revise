import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: { [key: string]: any }; // Define the type of `user` here
    }
  }
}
