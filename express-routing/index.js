require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes");

app.use("/", indexRouter);
PORT = Number(process.env.PORT) || 8000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
