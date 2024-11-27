import mongoose, { Schema, model } from "mongoose";

const roleEnum = {
  values: ["admin", "user"],
};

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const categoryModel = model("category", categorySchema);
export default categoryModel;
