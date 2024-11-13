import express, { response } from "express";
import cors from "cors";

const server = express();
const PORT = 8000;

server.use(cors());
server.get("/", (req, res) => {
  res.send(["hello", "ahhahah"]);
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} okkk`);
});
