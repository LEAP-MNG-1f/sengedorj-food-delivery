import exrpess from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userControllers.js";

const userRouter = exrpess.Router();

userRouter.get("/users", getUser);
userRouter.post("/create-user", createUser);
userRouter.put("/update-user/:id", updateUser);
userRouter.delete("/delete-user/:id", deleteUser);

export default userRouter;
