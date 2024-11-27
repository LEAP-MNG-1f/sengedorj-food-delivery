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

const categoryModel = model("Category", categorySchema);
export default categoryModel;
