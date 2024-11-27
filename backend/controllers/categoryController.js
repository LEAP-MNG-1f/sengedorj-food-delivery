import categoryModel from "../models/category.js";

const createCategory = async (req, res) => {
  const result = await categoryModel.create({
    name: "soup",
  });

  res.json({
    succes: true,
    data: result,
  });
};

const getAllCategory = async (req, res) => {
  const result = await categoryModel.find();

  res.json({
    succes: true,
    data: result,
  });
};

export { createCategory, getAllCategory };
