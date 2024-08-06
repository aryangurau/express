const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({ data: "hello world" });
});

router.post("/", (req, res) => {
  res.send({ data: "hello POST" });
});
router.patch("/", (req, res) => {
  res.send({ data: "hello PATCH" });
});
router.put("/", (req, res) => {
  res.send({ data: "hello PUT" });
});
router.delete("/", (req, res) => {
  res.send({ data: "hello DELETE" });
});

module.exports = router;
