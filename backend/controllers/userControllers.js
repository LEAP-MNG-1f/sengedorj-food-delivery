import userModel from "../models/user.js";

const createUser = async (req, res) => {
  const result = await userModel.create({
    name: "sengee",
    email: "senge@gmail.com",
    password: "adasd",
    phoneNumber: 99009900,
    role: "admin",
  });

  res.json({
    succes: true,
    data: result,
  });
};

const getAllUsers = async (req, res) => {
  const result = await userModel.find();

  res.json({
    succes: true,
    data: result,
  });
};

export { createUser, getAllUsers };
