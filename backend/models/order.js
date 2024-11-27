import mongoose, { Schema, model } from "mongoose";

const processEnum = {
  values: ["active", "waiting", "progress", "delivered"],
};

const orderSchema = new Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: String,
    required: true,
  },
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  foodIds: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Food",
    required: true,
  },
  process: {
    type: String,
    enum: processEnum,
  },
  CreateDate: {
    type: Date,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  khoroo: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
});

const orderModel = model("Order", orderSchema);
export default orderModel;
