import express, { NextFunction, Request, Response } from "express";
import { create, deleteContent, getSingle, update } from "../controllers/content.controller";
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

router.patch(
  "/:contentId",
  (req: Request, res: Response, next: NextFunction) => {
    authenticate(req, res, next);
  },
  (req: Request, res: Response) => {
    update(req, res);
  }
);

router.delete(
  "/:contentId",
  ((req: Request, res: Response, next: NextFunction) => { authenticate(req, res, next) }),
  ((req: Request, res: Response) => { deleteContent(req, res) })
);

router.get(
  "/:contentId",
  ((req: Request, res: Response) => { getSingle(req, res) })
);

export default router;
