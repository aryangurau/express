require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = Number(process.env.PORT) || 8888;
const indexRouter = require("./routes");

mongoose
  .connect("mongodb://localhost:27017/hotel-mgmt")
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log("database error", err);
  });

app.use(express.json());
app.use(express.static("public"));

app.use("/", indexRouter);
app.use((err, req, res, next) => {
  const errMsg = err ? err.toString() : "something went wrong";
  res.status(500).json({ data: "", msg: errMsg });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
