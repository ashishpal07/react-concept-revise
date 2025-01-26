import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./configs/db.js";

dotenv.config();
connectDB();

import userRoutes from "./routes/user.route.js";
import accountRoutes from "./routes/account.route.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/accounts", accountRoutes);


app.listen(PORT, (err) => {
  if (err) {
    console.log("Error while running express server.");
    return;
  }
  console.log(`Server is running on ${PORT}`);
});


