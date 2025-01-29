import express from "express";
import { getSingleUser, getuser, login, register } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", register);

router.post("/signin", login);

router.get("/bulk", getuser)

router.get("/:id", getSingleUser);

export default router;
