import express, { Request, Response, NextFunction } from "express";
import { create, deleteLink, getSingle } from "../controllers/link.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = express.Router();

router.post(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    authenticate(req, res, next);
  },
  (req: Request, res: Response) => {
    create(req, res);
  }
);

router.delete(
  "/:linkId",
  (req: Request, res: Response, next: NextFunction) => {
    authenticate(req, res, next);
  },
  (req: Request, res: Response) => {
    deleteLink(req, res);
  }
);

router.get("/:linkId", (req: Request, res: Response) => {
  getSingle(req, res);
});

export default router;
