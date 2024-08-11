require("dotenv").config();
const express = require("express");
const app = express();

const indexRouter = require("./routes");

const PORT = Number(process.env.PORT) || 8888;

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
