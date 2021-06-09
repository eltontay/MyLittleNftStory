import express from "express";
import { Document } from "mongoose";
import { UserModel, User } from "../schema/userschema";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    const newUser = new UserModel(req.body);
    const result = await newUser.save();
    return res
      .status(200)
      .send(`User ${req.body.email} successfully registered`);
  } catch (error) {
    if (error.code == 11000) {
      error = "Email already registered";
    }
    return res.status(500).send(error);
  }
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email }).exec();

    if (user) {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        return res.status(200).send(parseUserCredentials(user));
      } else {
        throw Error("Incorrect password");
      }
    } else {
      throw Error("User not found");
    }
  } catch (error) {
    return res.status(500).send("Invalid credentials");
  }
});

function parseUserCredentials(user: User & Document): User {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: "",
  };
}

export default router;