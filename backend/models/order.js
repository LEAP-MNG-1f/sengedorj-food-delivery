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
    ref: "user",
    required: true,
  },
  foodIds: {
    type: Array,
    ref: "food",
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
  Khoroo: {
    type: String,
    required: true,
  },
  Apartment: {
    type: String,
    required: true,
  },
});

const orderModel = model("order", orderSchema);
export default orderModel;
