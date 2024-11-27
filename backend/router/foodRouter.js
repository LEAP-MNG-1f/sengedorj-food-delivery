import express from "express";

import { createFood, getAllFood } from "../controllers/foodController.js";

const foodRouter = express.Router();

foodRouter.get("/food", getAllFood);
foodRouter.post("/food", createFood);

export default foodRouter;
