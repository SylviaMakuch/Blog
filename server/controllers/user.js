import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import express from 'express';
// import mongoose from 'mongoose';
import User from "../models/user.js";

// const router = express.Router();

export const signin = async (req, res) => {
  const { email, password } = req.params;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User does not exist" });
    const isPasswordCorrect = await bcrypt(password, existingUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Incorrect password/email" });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong with that login!" });
  }
};

export const signout = async (req, res) => {
  const { email, password, confimedPassword, firstName, lastName } = req.params;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exist" });

    if (password != confimedPassword);
    return res.status(400).json({ message: "password does not match!" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName}``${lastName}`,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({ result: result, token });
  } catch {
    res.status(500).json({ message: "Something went wrong with that login!" });
  }
};
