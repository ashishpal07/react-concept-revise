import express, { Application, Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const app: Application = express();

app.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await client.user.findMany();
    return res.json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log('Error while running server', err);
  }
  console.log("Server is running on port 3000");
});
