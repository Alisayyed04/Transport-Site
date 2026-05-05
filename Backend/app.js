import express from "express";
import cors from "cors";
const port = 9090;
const app = express();

app.get("/", (req, res) => {
  res.send("hi there buddy");
});

app.listen(port, (req, res) => {
  console.log("hi mum");
});
