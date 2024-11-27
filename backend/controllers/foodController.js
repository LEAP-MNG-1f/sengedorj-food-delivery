import foodModel from "../models/food.js";

const createFood = async (req, res) => {
  const result = await foodModel.create({
    name: "huushuur",
    Image: "asdasd",
    ingredient: "asdsad",
    price: 5000,
    categoryId: "67469177340b9445470e26f0",
  });

  res.json({
    succes: true,
    data: result,
  });
};

const getAllFood = async (req, res) => {
  const result = await foodModel.find().populate("customer");

  res.json({
    succes: true,
    data: result,
  });
};

export { createFood, getAllFood };
