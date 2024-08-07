require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routing");

app.use(express.json());
app.use("/", indexRouter);
const PORT = Number(process.env.PORT) || 6999;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
