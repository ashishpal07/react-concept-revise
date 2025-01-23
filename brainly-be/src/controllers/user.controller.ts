import { User } from "../models/user.model";
import { registerSchema, loginSchema } from "../types/user.type";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

export const register = async (req: Request, res: Response) => {
  console.log("here i am");
  
  const parseData = registerSchema.safeParse(req.body);

  if (!parseData.success) {
    return res.status(400).json({ message: parseData.error });
  }

  try {
    const findUser = await User.findOne({ email: parseData.data.email });
    console.log(findUser);
    if (findUser) {
      return res.status(409).json({ message: "User already exist." });
    }

    // hash password
    const hashedPassword = bcrypt.hashSync(parseData.data.password, 10);

    const createUser = await User.create({
      ...parseData.data,
      password: hashedPassword,
    });
    return res
      .status(201)
      .json({ message: "Created successfully.", user: createUser });
  } catch (error: unknown) {
    console.log(error);
    
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ message: `Error while creating user ${error.message}.` });
    }
    return res
      .status(500)
      .json({ message: "Internal server error while creating user." });
  }
};

export const login = async (req: Request, res: Response) => {
  const parseData = loginSchema.safeParse(req.body);

  if (!parseData.success) {
    return res.status(400).json({ message: parseData.error })
  }

  try {
    const findUser = await User.findOne({
      $or: [
        { email: parseData.data.email },
        { userName: parseData.data.userName },
      ],
    });

    if (!findUser) {
      return res.status(404).json({ message: "User not found." })
    }

    const isPaswordValid = await bcrypt.compare(parseData.data.password, findUser.password);
    if (!isPaswordValid) {
      return res.status(400).json({ message: "Invalid credentials." })
    }
    // generate token
    const token = jwt.sign(
      { user: findUser._id },
      process.env.JWT_SECRET || 'fallback-secret-key',
      {expiresIn: process.env.JWT_TOKEN_EXPIRY},
    );

    return res.status(200).json({ message: "Logged in successfully.", token });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ message: `Error while creating user ${error.message}.` });
    }
    return res
      .status(500)
      .json({ message: "Internal server error while creating user." });
  }
}
