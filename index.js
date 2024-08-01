const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello this is express application");
});
app.listen(5666, () => {
  console.log("server is running on port 5666");
});
