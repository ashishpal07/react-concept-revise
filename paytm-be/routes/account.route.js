import express from "express";
import { getBalance, transfer } from "../controllers/account.controller.js";
import { authentication } from "../middleware/auth.js";

const router = express.Router();

router.get("balance", authentication, getBalance);

router.post("/transfer", authentication, transfer);

export default router;
