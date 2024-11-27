import orderModel from "../models/order.js";

const createOrder = async (req, res) => {
  const result = await orderModel.create({
    orderNumber: 123456,
    totalPrice: "123123a",
    customer: "6746859e7d2759fae3e5c9fd",
    foodIds: "6746918a28be302740c48bab",
    process: "active",
    CreateDate: new Date(),
    district: "ih delguur",
    khoroo: "15horoo",
    apartment: "baga tengeriin am",
  });

  res.json({
    succes: true,
    data: result,
  });
};

const getAllOrders = async (req, res) => {
  const result = await orderModel
    .find()
    .populate("customer")
    .populate("foodIds");

  res.json({
    succes: true,
    data: result,
  });
};

export { createOrder, getAllOrders };
