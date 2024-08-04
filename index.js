const express = require("express");
const app = express(); //starting express

app.get("/", (req, res) => {
  res.send("Hello this is my first express application");
});

//Running server
app.listen(5666, () => {
  console.log("server is running on port 5666");
});

//practiced express
/*
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("this is express server");
});
app.listen(5555, () => {
  console.log("the app server is runnning on port 5555");
});*/
