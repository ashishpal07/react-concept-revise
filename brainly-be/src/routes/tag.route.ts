import express, { Request, Response } from 'express';
import { create, deleteOne, getAll, update } from '../controllers/tag.controller';

const router = express.Router();

router.post(
  "/",
  ((req: Request, res: Response) => { create(req, res) })
);

router.patch(
  "/:tagId",
  ((req: Request, res: Response) => { update(req, res) })
);

router.delete(
  "/:tagId",
  ((req: Request, res: Response) => { deleteOne(req, res) })
);

router.get(
  "/all",
  ((req: Request, res: Response) => { getAll(req, res) })
);

export default router;
