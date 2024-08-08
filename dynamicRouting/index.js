require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes");

const PORT = Number(process.env.PORT) || 5800;

app.use(express.json());
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
