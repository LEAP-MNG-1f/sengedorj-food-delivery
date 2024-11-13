import express, { response } from "express";

const server = express();
const PORT = 8000;

server.get("/", (req, res) => {
  res.send("hello");
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} okkk`);
});
