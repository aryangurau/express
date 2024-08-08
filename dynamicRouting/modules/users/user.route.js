//perform CRUD operation for users

const router = require("express").Router();

//read all data
router.get("/", (req, res) => {
  //use query
  res.json({ data: `hello from get alldata users` });
});

//read single data
router.get("/:id", (req, res) => {
  console.log(req?.params?.id);
  res.json({
    data: `hello world from get single data users ${req?.params?.id}`,
  });
});

//add data
router.post("/", (req, res) => {
  //use req body
  res.json({ data: `hello world from post users${req?.body}` });
});

//update multiple field data
router.put("/:id", (req, res) => {
  //use params +body
  res.json({ data: `hello world from put users ` });
});

//update single data
router.patch("/:id", (req, res) => {
  //use params +body
  res.json({ data: `hello world from patch users ` });
});

//delete data
router.delete("/:id", (req, res) => {
  res.json({ data: `hello world from delete users ` });
});

module.exports = router;
