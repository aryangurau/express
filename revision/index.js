require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express(); //starts the express applications
const indexRouter = require("./routes/index");

const PORT = Number(process.env.PORT);

mongoose
  .connect("mongodb://localhost:27017/hotel-booking")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("database error", err);
  });

app.use("/", indexRouter);

app.use((err, req, res, next) => {
  //application level middleware to handle errors in app level
  const errMsg = err ? err.toString() : "something went wrong";
  res.status(500).json({ data: "", msg: errMsg });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
