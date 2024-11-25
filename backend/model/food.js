import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  year: Number,
});

const foodModel = model("food", foodSchema);

export default foodModel;
