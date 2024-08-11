require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const indexRouter = require("./routes");

const PORT = Number(process.env.PORT) || 5800;

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  //middleware can add something in the body example country is added below
  req.body.country = "NP";
  next();
});

app.use("/", indexRouter); //it routes to router pages //user router,controller and model

app.use((err, req, res, next) => {
  //middleware //error handling // handles all the error at application level
  const errMsg = err ? err.toString() : "something went wrong!";
  res.status(500).json({ data: "", msg: errMsg });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
