import express from "express";
import range from "range-parser";
import path from "path";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/ping", (req, res) => {
  res.send("pong!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
