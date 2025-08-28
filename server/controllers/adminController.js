import User from "../models/User.js";

// @desc Get all users (Admin only)
export const getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};
