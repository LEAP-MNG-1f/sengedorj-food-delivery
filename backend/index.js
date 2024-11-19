import express, { response } from "express";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";

const server = express();
const PORT = 8000;

server.use(cors());
server.get("/", (req, res) => {
  res.send(["hello", "worlddddd"]);
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} okkk`);
});
