import mongoose from "mongoose";

export function connectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected."))
    .catch((error) => {
      console.log("error while connecting db. " + error.massage);
    });
}
