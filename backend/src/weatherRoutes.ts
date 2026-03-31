import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello querry");
});

app.listen(PORT, () => {
  console.log(`sever open on port ${PORT}`);
});
