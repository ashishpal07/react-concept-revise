import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.MONGO_URI);


export const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/brainly")
  .then(() => console.log("Mongo DB connected!"))
  .catch((err) => {
    console.log("Error while connected to DB.", err.message);
    process.exit(1);
  });
}
