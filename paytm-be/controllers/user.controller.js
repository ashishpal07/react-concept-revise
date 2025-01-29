import { User } from "../models/user.model.js";
import { Account } from "../models/account.model.js";
import bcrypt from "bcrypt";
import { loginUserSchema, createUserSchema } from "../types/user.type.js";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  try {
    const parseSchema = createUserSchema.safeParse(req.body);
    if (!parseSchema.success) {
      return res
        .status(400)
        .json({ message: "Invalid input data.", error: parseSchema.error });
    }

    const finsUser = await User.findOne({
      username: parseSchema.data.username,
    });
    if (finsUser) {
      return res.status(409).json({ message: "User already exist." });
    }

    const hashedPassword = await bcrypt.hash(parseSchema.data.password, 10);
    const user = await User.create({
      ...parseSchema.data,
      password: hashedPassword,
    });

    await Account.create({
      userId: user._id,
      balance: 1 + Math.random() * 10000,
    });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie('jwt',token, { httpOnly: true, secure: true, maxAge: 86400000 })

    return res
      .status(201)
      .json({ message: "User created successfully.", user: user._id, token });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "something went wrong while registering user." });
  }
}

export async function login(req, res) {
  try {
    const parseSchema = loginUserSchema.safeParse(req.body);
    if (!parseSchema.success) {
      return res
        .status(400)
        .json({ message: "Invalid input data.", error: parseSchema.error });
    }

    const finsUser = await User.findOne({
      username: parseSchema.data.username,
    });
    if (!finsUser) {
      return res.status(404).json({ message: "User Not Found." });
    }

    if (!(await bcrypt.compare(parseSchema.data.password, finsUser.password))) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign({ userId: finsUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const payload = { httpOnly: true, secure: false, maxAge: 86400000, sameSite:'None' };
    res.cookie('jwt', token, payload);

    return res
      .status(201)
      .json({ message: "User Logged in successfully.", token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong while login user." });
  }
}

export async function getuser(req, res) {
  try {
    const filter = req.query.filter || "";

    if (filter.length == 0) {
      return res
        .status(200)
        .json({ message: "not provided filter.", users: [] });
    }

    const users = await User.find({
      $or: [
        { firstName: { $regex: filter } },
        { lastName: { $regex: filter } },
      ],
    });

    return res.status(200).json({
      message: "Sccess",
      users: users.map((user) => {
        return {
          firstName: user.firstName,
          lastName: user.lastName,
          id: user._id,
        };
      }),
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong while getting user." });
  }
}

export async function getSingleUser(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found." });
    }
    return res
      .status(200)
      .json({
        message: "Success",
        user: { firstName: user.firstName, lastName: user.lastName },
      });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "something went wrong while getting single user." });
  }
}
