// import express from "express";
// import cors from "cors";
// import { v2 as cloudinary } from "cloudinary";
// import dotenv from "dotenv";
// import connectDB from "./connectDB.js";

// const server = express();

// server.use(cors());
// server.use(express.json());

// dotenv.config();

// const PORT = process.env.PORT || 8000;

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

// server.get("/", (req, res) => {
//   res.send(["hello world1"]);
// });

// server.post("/image-upload", async (req, res) => {
//   try {
//     const uploadResult = await cloudinary.uploader.upload("./assets/space.jpg");
//     console.log(uploadResult);
//     res.json(uploadResult);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: "Failed to upload image" });
//   }
// });

// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });
// import express from "express";
// import cors from "cors";
// import connectDB from "./connectDB.js";
// import dotenv from "dotenv";
// import bodyParser from "body-parser";

// dotenv.config();

// const server = express();
// const PORT = 8888;

// server.use(cors());

// server.get("/", async (req, res) => {
//   const db = await connectDB();
//   let collection = db.collection("users");
//   let results = await collection.findOne({ name: "Ned Stark" });

//   res.json({
//     succes: true,
//     data: results,
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDb from "./connectDB.js";
// import bodyParser from "body-parser";
// import { ObjectId } from "mongodb";

// dotenv.config();

// const server = express();
// const PORT = 4000;

// server.use(cors());
// server.use(bodyParser.json());

// server.get("/", async (req, response) => {
//   const db = await connectDb();

//   let collection = db.collection("movies");
//   let results = await collection.find().limit(10).toArray();

//   response.json({
//     succes: true,
//     data: results,
//   });
// });

// server.post("/product", async (req, response) => {
//   const db = await connectDb();

//   const collection = db.collection("product");
//   const result = await collection.insertMany([
//     {
//       name: "bandaash",
//       owner: "sengee",
//       price: "hymdral 5000",
//     },
//   ]);

//   response.json({
//     succes: true,
//     data: result,
//   });
// });

// server.delete("/delete-user", async (req, response) => {
//   const db = await connectDb();

//   const collection = db.collection("product");
//   const result = await collection.deleteOne({
//     _id: new ObjectId("674006576186d6fa68e7141c"),
//   });

//   response.json({
//     succes: true,
//     data: result,
//   });
// });

// server.put("/product", async (req, response) => {
//   const db = await connectDb();

//   const collection = db.collection("product");
//   const result = await collection.updateOne(
//     {
//       _id: new ObjectId("674006576186d6fa68e7141c"),
//     },
//     {
//       $set: { price: "8800", date: new Date() },
//     }
//   );

//   response.json({
//     succes: true,
//     data: result,
//   });
// });

// server.listen(PORT, () => {
//   console.log(`server is running on http://localhost:${PORT}`);
// });
import express from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import categoryRouter from "./routers/categoryRouter.js";
import foodRouter from "./routers/foodRouter.js";

const server = express();
const PORT = 8000;

server.use(express.json());
server.use(cors());

dotenv.config();

const MAIN_URL = "/api";

server.use(MAIN_URL, userRouter);
server.use(MAIN_URL, orderRouter);
server.use(MAIN_URL, categoryRouter);
server.use(MAIN_URL, foodRouter);

mongoose.connect(process.env.MONGODB_URL);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

server.listen(PORT, () => {
  console.log(`server running http://localhost:${PORT}`);
});
